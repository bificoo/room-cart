import { useState, useMemo } from "react"
import CustomInputNumber from "modules/CustomInputNumber"
import { getMaximumPeople } from "./utils"
import styled from "./Room.module.scss"

type RoomProps = {
  max: number
}

const Room = (props: RoomProps) => {
  const [adult, setAdult] = useState(1)
  const [child, setChild] = useState(0)

  const max = getMaximumPeople({ adult, child, max: props.max })

  return (
    <div className={styled.wrapper}>
      <div>房間：{adult + child}人</div>
      <div className={styled.adult}>
        <div>大人</div>
        <div>
          <CustomInputNumber
            value={adult}
            min={1}
            max={max}
            onChange={e => {
              console.info("adult e", +e.target.value)
              setAdult(+e.target.value)
            }}
          />
        </div>
      </div>
      <div className={styled.child}>
        <div>小孩</div>
        <div>
          <CustomInputNumber
            value={child}
            min={0}
            max={max}
            onChange={e => setChild(+e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Room
