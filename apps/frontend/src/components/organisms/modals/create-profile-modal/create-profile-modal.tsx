import React from 'react'
import { ModalProps } from '../types'
import { LargeModalTemplate } from '../modal-templates'

import MainButton from '@/components/atoms/buttons/main-button'
import useCreateUserForm from '@/hooks/use-create-user-form'
import UserProfileForm from '../../user-profile-form'

const CreateProfileModal: React.FC<ModalProps> = () => {
  const { closeModal, handleSubmit, onSubmit, register, errors, isPending } =
    useCreateUserForm()

  return (
    <LargeModalTemplate
      onClose={closeModal}
      topButtons={
        <MainButton
          label="Guardar"
          onClick={handleSubmit(onSubmit)}
          disabled={isPending}
        />
      }
    >
      <UserProfileForm register={register} errors={errors} />
    </LargeModalTemplate>
  )
}

export default CreateProfileModal
