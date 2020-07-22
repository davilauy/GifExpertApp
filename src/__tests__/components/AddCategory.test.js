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

  test("Debe de llamar a la func setCategories y limpiar el input ", () => {
    const value = "test value";
    wrapper.find("input").simulate("change", { target: { value } });

    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
