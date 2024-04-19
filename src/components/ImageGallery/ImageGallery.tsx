import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onToggle }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard image={image} onToggle={onToggle} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;