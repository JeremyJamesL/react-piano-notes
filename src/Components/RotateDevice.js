import rotateDevice from "../Assets/Images/rotate-device.jpg"
import classes from "./RotateDevice.module.scss"

function RotateDevice() {
  return (
    <div>
        <img src={rotateDevice} className={classes.img} />
        <p>For smaller screens, please rotate your device</p>
    </div>
  )
}
export default RotateDevice