import { toast, Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.elements.photo.value;

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