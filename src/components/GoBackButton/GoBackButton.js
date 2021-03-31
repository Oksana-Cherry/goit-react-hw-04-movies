import './GoBackButton.scss';

const GoBackButton = ({ onClick }) => {
  return (
    <button className="GoBackButton" type="button" onClick={onClick}>
      Go back
    </button>
  );
};

export default GoBackButton;
