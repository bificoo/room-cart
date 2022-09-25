import { useMemo, useState } from "react"
import Room, { GuestArrangement } from "./Room"
import styled from "./RoomAllocation.module.scss"

type RoomAllocationProps = {
  /** 住客人數 */
  guest: number
  /** 房間數量 */
  room: number
  disabled: boolean
  onChange: (result: GuestArrangement[]) => void
}

const getLeftPeople = (guest: number, roomOutputs: GuestArrangement[]) => {
  const sum = roomOutputs.reduce((sum, roomOtput) => {
    return sum + roomOtput.adult + roomOtput.child
  }, 0)
  return guest - sum
}

const RoomAllocation = (props: RoomAllocationProps) => {
  const [roomOutputs, setRoomOutputs] = useState<GuestArrangement[]>(() =>
    Array.from({ length: props.room }, () => ({ adult: 1, child: 0 })),
  )
  const leftPeople = getLeftPeople(props.guest, roomOutputs)

  if (props.guest < props.room) return <div>人數不可少於房間數</div>
  return (
    <div className={styled.wrapper}>
      <div className={styled.info}>
        住客人數：{props.guest}人/{props.room}房
      </div>
      <div className={styled.left}>尚未分配人數：{leftPeople}人</div>
      {roomOutputs.map((_, index) => {
        return (
          <Room
            key={index}
            left={leftPeople}
            disabled={props.disabled}
            onChange={(output: GuestArrangement) => {
              const newRoomOutputs = roomOutputs.map((roomOutput, roomOutputIndex) => {
                if (index !== roomOutputIndex) return roomOutput
                return output
              })
              setRoomOutputs(newRoomOutputs)
              props.onChange(newRoomOutputs)
            }}
          />
        )
      })}
    </div>
  )
}

export default RoomAllocation
