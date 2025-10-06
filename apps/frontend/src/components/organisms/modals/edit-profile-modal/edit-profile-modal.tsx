import React from 'react'
import type { ModalProps } from '../types'
import { LargeModalTemplate } from '../modal-templates'
import MainButton from '@/components/atoms/buttons/main-button'
import SecondaryButton from '@/components/atoms/buttons/secondary-button'
import UserProfileForm from '../../user-profile-form'
import useEditUserForm from '@/hooks/use-edit-user-form'

const EditProfileModal: React.FC<ModalProps> = () => {
  const {
    closeModal,
    isPending,
    register,
    handleSubmit,
    onSubmit,
    handleCancel,
    errors,
  } = useEditUserForm()

  return (
    <LargeModalTemplate
      onClose={closeModal}
      topButtons={
        <>
          <SecondaryButton label="Cancelar" onClick={handleCancel} />
          <MainButton
            label="Guardar"
            onClick={handleSubmit(onSubmit)}
            disabled={isPending}
          />
        </>
      }
    >
      <UserProfileForm register={register} errors={errors} />
    </LargeModalTemplate>
  )
}

export default EditProfileModal
