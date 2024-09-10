import type { InputHTMLAttributes } from "react"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"

export function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <Input
      className="focus:border-red-300 focus:ring-amber-500 focus:outline-teal-400"
      {...props}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}
