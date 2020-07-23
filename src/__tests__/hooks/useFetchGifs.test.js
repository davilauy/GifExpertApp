import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Prueba en hook: useFetchGifs", () => {
  test("Debe de retornar el estado inicial ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Will Smith")
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("Debe de retornar un arreglo de imagenes y loading en false ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Will Smith")
    );

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});
