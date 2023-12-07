import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import SlideButton from "./slideButton";
import {
  ScreenContext,
  ScreenContextProvider,
} from "../../context/screenContext";

import { JSDOM } from "jsdom";

import { useContext } from "react";

const dom = new JSDOM("<!doctype html><html><body></body></html>");
global.window = dom.window;
global.document = dom.window.document;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

jest.mock("../../context/ScreenContext", () => ({
  ...jest.requireActual("../../context/ScreenContext"),
  useContext: jest.fn(),
}));

afterEach(() => {
  jest.clearAllMocks();
});
describe("test left e right buttom", () => {
  beforeEach(() => {
    const mockContext = [
      "home", // currentScreen
      jest.fn(), // setCurrentScreen
    ];

    useContext.mockReturnValue(mockContext);
  });

  it("test right click change context", () => {
    const { getByText } = render(
      <ScreenContextProvider>
        <SlideButton />
      </ScreenContextProvider>
    );

    const button = getByText("Botões");

    fireEvent.click(button);

    // Verificar se a função do contexto foi chamada corretamente
    expect(useContext(ScreenContext)[1]).toHaveBeenCalledWith("buttons");
  });

  it("test left click call navigate", () => {
    const { getByText } = render(
      <ScreenContextProvider>
        <SlideButton />
      </ScreenContextProvider>
    );

    const button = getByText("Digitar texto");

    fireEvent.click(button);

    // Verificar se o navigate foi chamado
    expect(useNavigate).toHaveBeenCalled();
  });
});
