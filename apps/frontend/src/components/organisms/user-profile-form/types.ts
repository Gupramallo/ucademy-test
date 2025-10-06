import { UserInputFieldProps } from '@/components/molecules/user-input-field/types'
import { UserFormData } from '../modals/types'
import { FieldErrors } from 'react-hook-form'

export type UserProfileFormProps = Pick<UserInputFieldProps, 'register'> & {
  errors: FieldErrors<UserFormData>
}
