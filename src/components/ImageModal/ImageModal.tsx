import css from "./ImageModal.module.css";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

type Props = {
  modalState: boolean
  modalOnClose: () => void
  likes: number
  urls: {
    regular: string
    small: string
  }
  description: string
}

const ImageModal = ({
  modalState,
  modalOnClose,
  likes,
  urls,
  description,
}: Props ) => {
  return (
    <ReactModal
      isOpen={modalState}
      onRequestClose={modalOnClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <div className={css.imgContainer}>
        <img className={css.imgModal} src={urls.regular} alt={description} />
        <div className={css.imgInfo}>
          <div className={css.imgInfoDown}>
            <p>{description}</p>
            <p>Likes: {likes}</p>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};
export default ImageModal; 