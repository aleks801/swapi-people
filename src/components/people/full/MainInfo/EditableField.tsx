import { Input, InputProps } from 'antd'

type Props = Pick<InputProps, 'onChange'> & {
  edit: boolean
  value: string
  editValue: string
}

export const EditableField = ({ edit, value, editValue, onChange }: Props) => {
  if (!edit) {
    return value
  }

  return <Input value={editValue} onChange={onChange} />
}
