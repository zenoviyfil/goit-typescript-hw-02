import axios from "axios";

const CLIENT_AUTH = "JRCgPyKqek-3xDn3ZMJlEUM77lu4GANVfaWzKoflQJA";

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const fetchPhoto = async (currentPage, per_page, photo) => {
  const response = await axios.get(
    `/photos?client_id=${CLIENT_AUTH}&page=${currentPage}&per_page=${per_page}&query=${photo}`
  );
  return response.data;
};
