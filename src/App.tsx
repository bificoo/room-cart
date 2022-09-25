import CustomInputNumber from "modules/CustomInputNumber"

const App = () => {
  return (
    <div>
      <CustomInputNumber
        name="test"
        min={2}
        max={10}
        step={2}
        onChange={e => console.log("change", e.target.name, e.target.value)}
        onBlur={e => console.log("blur", e.target.name, e.target.value)}
      />
    </div>
  )
}

export default App
