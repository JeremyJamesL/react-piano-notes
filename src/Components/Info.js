import classes from "./Info.module.scss"
import { useState } from "react"

function Info() {

  const [showText, updateShowText] = useState(false);

  return (
    <div className={classes.info}>
            <span className={`${classes.text} ${showText ? classes.show : ''}`}>On smaller devices, the piano is reduced to 4 octaves (C2 to C6)</span>
            <span className={classes.icon} onClick={() => updateShowText(!showText)} >ℹ</span>
    </div>
  )
}
export default Info