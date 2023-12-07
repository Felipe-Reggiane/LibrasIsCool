import React from "react";
import renderer from "react-test-renderer";
import Buttons from "./buttons";
it("Button snapshot", () => {
  let props = {
    image: "",
    title: "",
  };

  const component = renderer.create(<Buttons props={props} />);
  const tree = component.toJSON();
  // Confere o snapshot de um componente recebendo props
  expect(tree).toMatchSnapshot();
});
