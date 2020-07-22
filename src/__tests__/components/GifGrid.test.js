import "@testing-library/jest-dom";
import React from "react";

import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";

import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Prueba en: <GifGrid />", () => {
  const category = "Will Smith";

  test("Debe de mostrar el componente correctamente ", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar items cuando se cargan imagenes desde custom hook ", () => {
    const dataMock = [
      {
        id: "abc",
        title: "test",
        url: "https://localhost/img.png",
      },
      {
        id: "123",
        title: "test 2",
        url: "https://localhost/img.png",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: dataMock,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(dataMock.length);
  });
});
