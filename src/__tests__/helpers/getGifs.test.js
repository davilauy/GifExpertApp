import { getGifs } from "../../helpers/getGifs";

describe("Prueba en helper getGifs", () => {
  test("Debe de retornar 10 elementos ", async () => {
    const category = "Will Smith";
    const gifs = await getGifs(category);

    expect(gifs.length).toBe(10);
  });

  test("Debe de retornar un array vacio ", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
