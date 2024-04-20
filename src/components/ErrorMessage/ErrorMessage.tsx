import css from "./ErrorMessage.module.css";

type Props = {
  message: string | boolean
}

const ErrorMessage = ({ message }:Props) => {
  return (
  <p className={css.errorMessage}>{message}</p>
  );
};

export default ErrorMessage;