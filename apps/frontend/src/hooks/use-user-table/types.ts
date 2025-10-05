import type { User } from '@/shared/types'
import { MODAL_ACTIONS, MODAL_TYPES } from './constants'

export type ModalType = keyof typeof MODAL_TYPES

export type ModalState = {
  isOpen: boolean
  type: ModalType
  selectedUser: User | undefined
}

export type ModalAction = {
  type: (typeof MODAL_ACTIONS)[keyof typeof MODAL_ACTIONS]
  user?: User
}
