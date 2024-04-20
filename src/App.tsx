/* eslint-disable no-undef */
import "./App.css";

import { useState, useEffect } from "react";
import { fetchPhoto } from "./apiservice/api";
import { toast, Toaster } from "react-hot-toast";
import { useToggle } from "./hooks/useToggle";
import { Image } from "./components/ImageCard/ImageCard"

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [info, setInfo] = useState<Image | null>(null);
  const [searchPhoto, setSearchPhoto] = useState<string>("");
  const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const per_page: number = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        setLoadMoreBtn(false);
        const res = await fetchPhoto(
          currentPage,
          per_page,
          searchPhoto
        );
        if (res.total === 0) {
          setImages([]);
          setError(true);
          toast.error("Sorry, there are no images matching your search query. Please try again!")
        } else {
          setImages((prevImages) => [...prevImages, ...res.results]);
          if (currentPage < res.total_pages) {
            setLoadMoreBtn(true);
          } else {
            setLoadMoreBtn(false)
          }
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (searchPhoto !== "") fetchData();
  }, [currentPage, searchPhoto]);

  const handleSearch = (photo: string) => {
    if (photo !== "" && photo !== searchPhoto) {
      setSearchPhoto(photo);
      setCurrentPage(1);
      setImages([]);
    }
  };
  const handlePagination = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const { isOpen, open, close } = useToggle();

  const handleToggle = (image: Image) => {
    setInfo(image);
    open();
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} 
        onToggle={handleToggle}
         />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {loadMoreBtn && <LoadMoreBtn onLoadMore={handlePagination} />}
      {info && <ImageModal
        modalState={isOpen}
        modalOnClose={close}
        image = {info}
      />}
      <Toaster position="bottom-right" reverseOrder={false}/>
    </>
  );
}

export default App;