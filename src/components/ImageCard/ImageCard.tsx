import css from "./ImageCard.module.css";

export type Image = {
  id?: number
  urls: {
    regular: string
    small: string
  }
  likes: number
  description: string
}

export type Props = {
  image: Image
  onToggle: (image: Image) => void
}

const ImageCard = ({
  image: { urls, likes, description },
  onToggle
}: Props) => {
  const imageInfo = {
    likes: likes,
    urls: {
      regular: urls.regular, 
      small: urls.small
    },
    description: description,
  };
  return (
    <div className={css.imageContainer} onClick={() => onToggle(imageInfo)}>
      <img src={urls.small} alt={description} width="400" />
    </div>
  );
};
export default ImageCard;