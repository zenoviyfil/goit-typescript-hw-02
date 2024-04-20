import axios, { AxiosResponse } from "axios";
import { Image } from "../components/ImageCard/ImageCard";

const CLIENT_AUTH = "JRCgPyKqek-3xDn3ZMJlEUM77lu4GANVfaWzKoflQJA";

axios.defaults.baseURL = "https://api.unsplash.com/search";

type PhotoResult = {
  total: number
  total_pages: number
  results: Image[]
}

export const fetchPhoto = async (currentPage: number, per_page: number, photo: string) => {
  const response: AxiosResponse<PhotoResult> = await axios.get(
    `/photos?client_id=${CLIENT_AUTH}&page=${currentPage}&per_page=${per_page}&query=${photo}`
  );
  return response.data;
};
