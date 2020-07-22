import React from "react";
import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe("Prueba en: <GifGridItem />", () => {
  const titleTest = "Prueba";
  const urlTest =
    "https://media0.giphy.com/media/sEULHciNa7tUQ/giphy.gif?cid=ccfe99e00iom4cwxm6skphpn0b6h98tzsqqy3wgl7s8isrhc&rid=giphy.gif";

  const wrapper = shallow(<GifGridItem title={titleTest} url={urlTest} />);

  test("Debe de mostrar el contenido correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de renderizar un parrafo con el title ", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(titleTest);
  });

  test("Debe de renderizar imagen con src y alt", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(urlTest);
    expect(img.prop("alt")).toBe(titleTest);
  });

  test("Debe de contener animacion animate__fadeIn ", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
