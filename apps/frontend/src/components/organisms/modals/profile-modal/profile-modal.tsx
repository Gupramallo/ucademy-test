import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import React from 'react'
import ImagePlaceholder from '@/components/atoms/image-placeholder'
import { LargeModalTemplate } from '../modal-templates'
import MainButton from '@/components/atoms/buttons/main-button'
import ProfileInfoLabel from '@/components/molecules/profile-info-label'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import EmailIcon from '@mui/icons-material/Email'
import { ContentContainer, InfoContainer } from './styles'
import { useToggleActiveStatus } from '@/hooks/use-toggle-active-status/use-toggle-active-status'

const ProfileModal: React.FC = () => {
  const { closeModal, openEditModal, onChange, selectedUser } =
    useToggleActiveStatus()

  return (
    <LargeModalTemplate
      onClose={closeModal}
      topButtons={
        <MainButton
          label="Editar estudiante"
          onClick={() => openEditModal(selectedUser)}
        />
      }
      bottomContent={
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                defaultChecked={selectedUser?.isActive}
                onChange={onChange}
              />
            }
            label="Cuenta activa"
          />
        </FormGroup>
      }
    >
      <ContentContainer>
        <ImagePlaceholder />
        <InfoContainer>
          <ProfileInfoLabel
            icon={<AccountCircleIcon />}
            title="Nombres y apellidos"
            text={`${selectedUser?.name} ${selectedUser?.lastName}`}
          />
          <ProfileInfoLabel
            title="Nombres de usuario"
            text={selectedUser?.name}
          />
          <ProfileInfoLabel
            icon={<EmailIcon />}
            title="Email"
            text={selectedUser?.email}
          />
          <ProfileInfoLabel
            icon={<PhoneAndroidIcon />}
            title="Móvil"
            text={selectedUser?.phone}
          />
        </InfoContainer>
      </ContentContainer>
    </LargeModalTemplate>
  )
}

export default ProfileModal
