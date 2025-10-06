import React from 'react'
import type { SmallModalTemplateProps } from './types'

import SecondaryButton from '@/components/atoms/buttons/secondary-button'
import MainButton from '@/components/atoms/buttons/main-button'
import { BottomContainer, Container, ContentContainer } from './styles'

const SmallModalTemplate: React.FC<SmallModalTemplateProps> = ({
  children,
  onClose,
  mainButtonLabel = 'Desactivar',
}) => (
  <Container>
    <ContentContainer>{children}</ContentContainer>
    <BottomContainer>
      <SecondaryButton label="Cancelar" onClick={onClose} />
      <MainButton label={mainButtonLabel} color="error" onClick={onClose} />
    </BottomContainer>
  </Container>
)

export default SmallModalTemplate
