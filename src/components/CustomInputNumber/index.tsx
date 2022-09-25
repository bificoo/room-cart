import styled from "./CustomInputNumber.module.scss"

const CustomInputNumber = () => {
  return (
    <div className={styled.wrapper}>
      <button className={styled.button}>-</button>
      <input type="number" />
      <button>+</button>
    </div>
  )
}

export default CustomInputNumber
