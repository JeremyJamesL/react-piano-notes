import classes from "./FlashCard.module.scss";

function FlashCard(props) {
  const style = props.isCorrect === '' ? 'flash-card--neutral' : props.isCorrect === 'false' ? 'flash-card--red' : 'flash-card--green';

  return (
      <div className={`${classes["flash-card"]} ${classes[style]}`}>
          <img src={`/Images/notes/${props.note}.png`} alt="" />
      </div>
  )
}
    
export default FlashCard;

    