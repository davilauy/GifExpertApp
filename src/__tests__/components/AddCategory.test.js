import React from "react";
import "@testing-library/jest-dom";

import { AddCategory } from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("Prueba en: <AddCategory />", () => {
  const setCategories = jest.fn();

  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe de mostrar el contenido correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar el valor en input", () => {
    const input = wrapper.find("input");
    const value = "hola mundo";

    input.simulate("change", {
      target: {
        value,
      },
    });

    const p = wrapper.find("p");
    expect(value).toBe(p.text().trim());
  });

  test("No debe de hacer post onSubmit ", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });

    expect(setCategories).not.toHaveBeenCalled();
  });
});
