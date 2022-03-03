import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import HookApp from "../HookApp";

describe("Prueba inicial de configuración", () => {
  test("1. Realizar el snapshot del componente", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
