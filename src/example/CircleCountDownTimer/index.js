import useCountDownTimer from "../../common/hook/useCountDownTimer";

const CircleCountDownTimer = () => {
  const [time, percent] = useCountDownTimer(90, () => {
    alert('Hết giờ')
  })
  return (
      <>
        <h3>Circle count donw timer</h3>
      </>
  )
}

export default CircleCountDownTimer
