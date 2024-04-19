import css from "./ImageModal.module.css";
import ReactModal from "react-modal";
import { Image } from "../ImageCard/ImageCard";

ReactModal.setAppElement("#root");

type Props = {
  modalState: boolean
  modalOnClose: () => void
  image: Image
}

const ImageModal = ({
  modalState,
  modalOnClose,
  image
}: Props ) => {
  return (
    <ReactModal
      isOpen={modalState}
      onRequestClose={modalOnClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <div className={css.imgContainer}>
        <img className={css.imgModal} src={image.urls.regular} alt={image.description} />
        <div className={css.imgInfo}>
          <div className={css.imgInfoDown}>
            <p>{image.description}</p>
            <p>Likes: {image.likes}</p>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};
export default ImageModal; 