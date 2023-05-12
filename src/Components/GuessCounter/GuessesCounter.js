import classes from "./GuessesCounter.module.scss"
import Counter from "./Counter"

function GuessesCounter(props) {

  return (
    <div className={classes.counters}>
        <Counter name="total" label="Total" count={props.guessesState.guesses}/>
        <Counter name="correct" label="Correct" count={props.guessesState.correct} />
        <Counter name="incorrect" label="Incorrect" count={props.guessesState.incorrect}/>
    </div>
  )
}
export default GuessesCounter