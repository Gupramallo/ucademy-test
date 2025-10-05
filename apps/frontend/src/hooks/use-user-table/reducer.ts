import { INITIAL_MODAL_STATE, MODAL_ACTIONS, MODAL_TYPES } from './constants'
import { ModalAction, ModalState } from './types'

export const modalReducer = (
  state: ModalState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    case MODAL_ACTIONS.openProfile:
      return {
        isOpen: true,
        type: MODAL_TYPES.profile,
        selectedUser: action.user,
      }

    case MODAL_ACTIONS.openEdit:
      return {
        isOpen: true,
        type: MODAL_TYPES.edit,
        selectedUser: action.user,
      }

    case MODAL_ACTIONS.openCreate:
      return {
        isOpen: true,
        type: MODAL_TYPES.create,
        selectedUser: undefined,
      }

    case MODAL_ACTIONS.openWarning:
      return {
        isOpen: true,
        type: MODAL_TYPES.warning,
        selectedUser: undefined,
      }

    case MODAL_ACTIONS.closeModal:
      return INITIAL_MODAL_STATE

    default:
      return state
  }
}
