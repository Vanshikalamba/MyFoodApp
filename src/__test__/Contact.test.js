import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";
describe("Contact Page TCs", () => {
  it("should load contact component ", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  it("should get Input Placeholder ", () => {
    render(<Contact />);
    const inputname = screen.getByPlaceholderText("Enter Name");
    expect(inputname).toBeInTheDocument();
  });

  it("should get 2 Input  ", () => {
    render(<Contact />);
    const inputboxes = screen.getAllByRole("textbox");
    expect(inputboxes.length).toBe(2);
  });
});
