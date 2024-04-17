import css from "./ImageCard.module.css";
const ImageCard = ({
  image: { urls, likes, description },
  onToggle
}) => {
  const imageInfo = {
    likes: likes,
    modal: urls.regular,
    description: description,
  };
  return (
    <div className={css.imageContainer} onClick={() => onToggle(imageInfo)}>
      <img src={urls.small} alt={description} width="400" />
    </div>
  );
};
export default ImageCard;