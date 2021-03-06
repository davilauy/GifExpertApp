export const getGifs = async (category) => {
  const api = "RB6y6aecpnudUmHpHkHXrVQ0QZe6o53l";

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${api}`;

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
