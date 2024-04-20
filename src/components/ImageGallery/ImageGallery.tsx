import ImageCard, { Image } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

type Props = {
  images: Image[]
  onToggle: (image: Image) => void
}

const ImageGallery = ({ images, onToggle }: Props) => {
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