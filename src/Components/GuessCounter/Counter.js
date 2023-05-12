import classes from "./Counter.module.scss";

function Counter(props) {
  return (
    <button className={`${classes.counter} ${classes[`counter--${props.name}`]}`}>
          {props.label}: <strong>{props.count}</strong>
    </button>
  )
}
export default Counter;