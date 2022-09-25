import RoomAllocation from "modules/RoomAllocation"

const App = () => {
  return (
    <div>
      <RoomAllocation guest={10} room={3} onChange={result => console.info(result)} />
    </div>
  )
}

export default App
