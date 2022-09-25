import RoomAllocation from "modules/RoomAllocation"

const App = () => {
  const guest = 10
  const room = 3
  return (
    <div>
      <RoomAllocation
        guest={guest}
        room={room}
        disabled={guest === room}
        onChange={result => console.info(result)}
      />
    </div>
  )
}

export default App
