import Body from "../components/Body";
import { act } from "@testing-library/react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA_FETCH from "../utils/mockfetchdata";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_FETCH);
    },
  });
});

it("check search flow", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const getAllCardsbeforeSearch = screen.getAllByTestId("resCard");
  expect(getAllCardsbeforeSearch.length).toBe(20);
  const searchbtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  //console.log(searchInput);
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchbtn);
  //screen should load 5 cards
  const getAllCards = screen.getAllByTestId("resCard");
  expect(getAllCards.length).toBe(5);
});

it("verify top rated restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body></Body>
      </BrowserRouter>
    );
  });
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });
  fireEvent.click(topRatedBtn);
  const getAllCards = screen.getAllByTestId("resCard");
  expect(getAllCards.length).toBe(16);
});
