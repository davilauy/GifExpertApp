export const getGifs = async (category) => {
  const api = "qx461iYvIRA211LI6NWOSqRRj6viRFTR";

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&apiKey=${api}`;

  const response = await fetch(url);
  const { data } = await response.json();

  const gifs =
    data &&
    data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

  return gifs;
};
