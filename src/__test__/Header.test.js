import { Provider } from "react-redux";
import appstore from "../utils/appStore";

import Header from "../components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("Header has login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbtn = screen.getByRole("button", { name: "Login" });
  expect(loginbtn).toBeInTheDocument();
});
test("Header has Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartbtn = screen.getByText(/Cart/);
  expect(cartbtn).toBeInTheDocument();
});
test("login-logout Button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginbtn);
  const logoutbtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutbtn).toBeInTheDocument();
});
