import css from "./ErrorMessage.module.css";

type ErrorMessage = {
  message: string
}

const ErrorMessage = ({ message }:ErrorMessage) => {
  return (
  <p className={css.errorMessage}>{message}</p>
  );
};

export default ErrorMessage;