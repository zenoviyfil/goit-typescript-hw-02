import React from "react";
import { toast, Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (photo: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;
    const photo = (form.elements.namedItem("photo") as HTMLInputElement).value;

    if (photo.trim() === "") {
        toast.error("Search input is empty!");
        return;
      }

    onSearch(photo);
    form.reset();
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="photo"
          placeholder="Search..."
        />
        <button className={css.searchBtn} type="submit">
            Search
        </button>
      </form>
      <Toaster position="bottom-right" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;