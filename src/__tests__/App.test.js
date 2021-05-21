import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  let container;

  beforeEach(() => {
    container = render(<App />).container;
  });

  it('should render intial text "Hello World"', () => {
    const header = container.querySelector("h1");
    expect(header.innerHTML).toEqual("Hello World");
  });

  it("should have the sum in a div", () => {
    const sum = container.querySelector("div");
    expect(sum.innerHTML).toEqual("3");
  });
});
