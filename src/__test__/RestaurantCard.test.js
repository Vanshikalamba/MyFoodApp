import { render } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import resList from "../utils/mockdata";
import "@testing-library/jest-dom";

it("Testing Restaurant Cards", () => {
  render(<RestaurantCard resData={resList} />);
  const name = screen.getAllByText("Pizza");
  expect(name).toBeInTheDocument();
});
