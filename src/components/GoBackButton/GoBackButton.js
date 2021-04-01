import styles from './GoBackButton.module.scss';
const GoBackButton = ({ onClick }) => {
  return (
    <button className={styles.goBackButton} type="button" onClick={onClick}>
      Go back
    </button>
  );
};

export default GoBackButton;
