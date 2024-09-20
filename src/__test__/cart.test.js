import { BrowserRouter } from "react-router-dom";
import { act, fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "../utils/mockDataforResMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) });
});
it("should Load res Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("BURGERS (19)");
  fireEvent.click(accordianHeader);
  const findItemList = screen.getAllByTestId("foodItemList");
  expect(findItemList.length).toBe(19);
  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);
  const cartText = screen.getByText("Cart👜(1)");
  expect(cartText).toBeInTheDocument();
  fireEvent.click(addBtn[2]);
  const cartText2 = screen.getByText("Cart👜(2)");
  expect(cartText2).toBeInTheDocument();
  const findItemListcart = screen.getAllByTestId("foodItemList");
  expect(findItemListcart.length).toBe(21);
  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);
  expect(screen.getByText("No Items In Cart...Please Add :)"));
});
