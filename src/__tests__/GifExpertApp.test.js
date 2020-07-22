import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("Prueba en <GifExpertApp />", () => {
  test("Debe de renderizar el componente correctamente ", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar una lista de categorias ", () => {
    const categories = ["Will Smith", "Goku"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
