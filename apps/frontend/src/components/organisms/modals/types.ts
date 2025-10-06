import { User } from '@/shared/types'

export type ModalProps = {
  user?: User
}

export type UserFormData = Omit<User, 'isActive' | '_id'>
