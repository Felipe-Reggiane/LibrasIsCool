import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SlideButton from "./slideButton";

import { JSDOM } from "jsdom";

const dom = new JSDOM("<!doctype html><html><body></body></html>");
global.window = dom.window;
global.document = dom.window.document;

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/",
  }),
  useNavigate: () => jest.fn(),
}));

afterEach(() => {
  jest.clearAllMocks();
});
describe("test SlideButton", () => {
  test("SlideButton renders correctly", () => {
    const { asFragment } = render(<SlideButton />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("handle left click", () => {
    const navigate = jest.fn();
    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockReturnValue(navigate);
    jest
      .spyOn(require("react-router-dom"), "useLocation")
      .mockReturnValue({ pathname: "/buttons" });
    const { getByText } = render(<SlideButton />);

    // Simulate a click on the "Digitar texto" button
    fireEvent.click(getByText("Digitar texto"));
    expect(navigate).toHaveBeenCalledWith("/home");
  });

  test("handle right click", () => {
    const navigate = jest.fn();
    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockReturnValue(navigate);
    jest
      .spyOn(require("react-router-dom"), "useLocation")
      .mockReturnValue({ pathname: "/home" });
    const { getByText } = render(<SlideButton />);

    fireEvent.click(getByText("Botões"));
    expect(navigate).toHaveBeenCalledWith("/buttons");
  });
});
