import css from "./ImageCard.module.css";

type Image = {
  urls: {
    regular: string
    small: string
  }
  likes: number
  description: string
}

type Props = {
  image: Image
  onToggle: (image: Image) => void
}

const ImageCard = ({
  image: { urls, likes, description },
  onToggle
}: Props) => {
  const imageInfo = {
    likes: likes,
    urls: urls.regular,
    description: description,
  };
  return (
    <div className={css.imageContainer} onClick={() => onToggle(imageInfo)}>
      <img src={urls.small} alt={description} width="400" />
    </div>
  );
};
export default ImageCard;