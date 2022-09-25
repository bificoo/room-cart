import FormBase from "./Form"
import FormInput from "./FormInput"

export type { FormInputProps } from "./FormInput"

const Form = Object.assign(FormBase, {
  Input: FormInput,
})

export default Form
