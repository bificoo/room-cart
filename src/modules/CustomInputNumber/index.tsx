import Button from "components/Button"
import Form from "components/Form"
import React, { useRef, useState } from "react"
import styled from "./CustomInputNumber.module.scss"

type CustomInputNumberProps = {
  min?: number
  max?: number
  step?: number
  name?: string
  value?: number
  disabled?: boolean
  onChange?: (e: {
    target: {
      name: string
      value: string
    }
  }) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
}

const CustomInputNumber = ({
  step = 1,
  value: defaultValue = 0,
  ...props
}: CustomInputNumberProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [value, setValue] = useState(defaultValue)

  const update = (callback: (currentValue?: number) => number | undefined) => {
    if (!inputRef.current) return

    const currentValue = +inputRef.current.value || undefined
    const newValue = callback(currentValue)

    if (newValue && newValue !== currentValue) {
      inputRef.current.value = String(newValue)
      setValue(newValue)
      props.onChange &&
        props.onChange({
          target: {
            name: props.name || "",
            value: String(newValue),
          },
        })
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!inputRef.current) return

    const currentValue = +inputRef.current.value || undefined
    if (currentValue) {
      if (props.min && currentValue < props.min) {
        inputRef.current.value = String(props.min)
        setValue(props.min)
      } else if (props.max && currentValue > props.max) {
        inputRef.current.value = String(props.max)
        setValue(props.max)
      }
    }

    props.onBlur && props.onBlur(e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(e)
  }

  return (
    <div className={styled.wrapper}>
      <Button
        className={styled.button}
        disabled={value === props.min}
        onClick={() => {
          update(currentValue => {
            if (!currentValue) return props.min
            const newValue = currentValue - step
            return props.min && newValue < props.min ? props.min : newValue
          })
        }}>
        -
      </Button>
      <Form.Input
        ref={inputRef}
        type="number"
        inputMode="numeric"
        defaultValue={defaultValue}
        name={props.name}
        min={props.min}
        max={props.max}
        disabled={props.disabled}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <Button
        className={styled.button}
        disabled={value === props.max}
        onClick={() => {
          update(currentValue => {
            if (!currentValue) return props.min
            const newValue = currentValue + step
            return props.max && newValue > props.max ? props.max : newValue
          })
        }}>
        +
      </Button>
    </div>
  )
}

export default CustomInputNumber
