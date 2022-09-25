import { useMemo } from "react"
import Room from "./Room"
import styled from "./RoomAllocation.module.scss"

type GuestArrangement = { adult: number; child: number }
type RoomAllocationProps = {
  /** 住客人數 */
  guest: number
  /** 房間數量 */
  room: number
  onChange: (result: GuestArrangement[]) => void
}

const getLeftPeople = (guest: number, room: number) => {
  if (guest - room < 0) return 0
  else return guest - room
}

const RoomAllocation = (props: RoomAllocationProps) => {
  const leftPeople = getLeftPeople(props.guest, props.room)

  return (
    <div className={styled.wrapper}>
      <div>
        住客人數：{props.guest}人/{props.room}房
      </div>
      <div>尚未分配人數：{leftPeople}人</div>
      {Array.from({ length: props.room }, (v, i) => i).map((_, index) => {
        return <Room key={index} max={leftPeople} />
      })}
    </div>
  )
}

export default RoomAllocation
