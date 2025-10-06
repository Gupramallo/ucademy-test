import { Typography } from '@mui/material'
import React from 'react'
import { SmallModalTemplate } from '../modal-templates'
import { useModalProvider } from '@/shared/providers/modal-provider/context'
import type { User } from '@/shared/types'
import {
  ContentContainer,
  IconContainer,
  TextContainer,
  WarningIcon,
} from './styles'

const WarningModal: React.FC = () => {
  const { selectedUser, openProfileModal } = useModalProvider()

  return (
    <SmallModalTemplate
      onClose={() => openProfileModal(selectedUser as User)}
      onClick={() => {}}
    >
      <ContentContainer>
        <IconContainer>
          <WarningIcon />
        </IconContainer>

        <TextContainer>
          <Typography>¿Seguro que quieres desactivar esta cuenta?</Typography>
          <Typography>
            El usuario dejará de tener acceso a la plataforma.
          </Typography>
        </TextContainer>
      </ContentContainer>
    </SmallModalTemplate>
  )
}

export default WarningModal
