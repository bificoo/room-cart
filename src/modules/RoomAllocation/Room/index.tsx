import { useState } from "react"
import CustomInputNumber, { Event } from "modules/CustomInputNumber"
import { getMaximumPeople } from "./utils"
import styled from "./Room.module.scss"

export type GuestArrangement = { adult: number; child: number }
type RoomProps = {
  left: number
  disabled: boolean
  onChange: (output: GuestArrangement) => void
}

const Room = (props: RoomProps) => {
  const [adult, setAdult] = useState(1)
  const [child, setChild] = useState(0)
  const total = adult + child

  const updateAdult = (e: Event) => {
    setAdult(+e.target.value)
    props.onChange({ adult: +e.target.value, child })
  }

  const updateChild = (e: Event) => {
    setChild(+e.target.value)
    props.onChange({ adult, child: +e.target.value })
  }

  return (
    <div className={styled.wrapper}>
      <div>房間：{total}人</div>
      <div className={styled.adult}>
        <div>大人</div>
        <div>
          <CustomInputNumber
            value={adult}
            min={1}
            max={getMaximumPeople(adult, { total, left: props.left })}
            disabled={props.disabled}
            onChange={updateAdult}
            onBlur={updateAdult}
          />
        </div>
      </div>
      <div className={styled.child}>
        <div>小孩</div>
        <div>
          <CustomInputNumber
            value={child}
            min={0}
            max={getMaximumPeople(child, { total, left: props.left })}
            disabled={props.disabled}
            onChange={updateChild}
            onBlur={updateChild}
          />
        </div>
      </div>
    </div>
  )
}

export default Room
