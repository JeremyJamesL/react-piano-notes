import classes from "./Piano.module.scss"
import naturals from "../Data/naturals"
import flatsSharps from "../Data/sharps-flats"
import { useState } from "react"


function Piano(props) {


  const [showCorrectKey, updateShowCorrectKey] = useState('');

  const handleClick = (e) => {
      const guess = e.target.id;
      console.log(e.target.className)

      if (e.target.className.includes('_grey-out_')) {
        props.updateIsCorrect('neither')
        updateShowCorrectKey('false')
      } 

      else if(guess === props.note) {
        props.updateIsCorrect('true');
        updateShowCorrectKey('false');
      } 

      else {
        props.updateIsCorrect('false');
        updateShowCorrectKey('true');
      }


      props.updateGuess(guess);
  }

  const renderNaturals = (key) => {
     return (
        <div className={`${classes["natural-keys"]} ${showCorrectKey === 'true' && props.activeFlashCard === key ? classes["grey-out"] : ''}`} id={key} key={key} onClick={handleClick}></div>
     )
  }

  const renderSharpsFlats = (key) => {   
        return key === "empty" ? <div id={key} className={`${classes["flats-sharps-keys"]} ${classes["hide"]}`}></div>  : <div id={key} className={`${key} ${classes["flats-sharps-keys"]}`} onClick={handleClick} ></div>;
  }
 
  return (
    <div key={Math.random()} className={classes.piano}>
        <div className={classes.naturals}>
            {naturals.map(n => renderNaturals(n))}
        </div>
        <div className={classes["flats-sharps"]}>
            {flatsSharps.map(s => renderSharpsFlats(s))}
        </div>

    </div>
  )
}
export default Piano