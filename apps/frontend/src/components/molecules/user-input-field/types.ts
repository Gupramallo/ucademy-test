import type { UserFormData } from '@/components/organisms/modals/types'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

export type UserInputFieldProps = {
  title: string
  error?: boolean
  register: UseFormRegister<UserFormData>
  rules?: RegisterOptions<UserFormData>
  type?: string
  fieldKey: keyof UserFormData
  helperText?: string
  required?: boolean
}
