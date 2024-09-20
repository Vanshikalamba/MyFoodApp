import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import resList2 from "../utils/mocdatafortest";
import "@testing-library/jest-dom";

it("Testing Restaurant Cards", () => {
  render(<RestaurantCard resData={resList2} />);
  //console.log(resList2);
  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});
