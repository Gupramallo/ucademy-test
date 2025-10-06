import React from 'react'
import { Typography } from '@mui/material'
import type { LargeModalTemplateProps } from './types'
import {
  BottomContainer,
  ButtonsContainer,
  Container,
  ContentContainer,
  HeaderContainer,
} from './styles'
import SecondaryButton from '@/components/atoms/buttons/secondary-button'

const LargeModalTemplate: React.FC<LargeModalTemplateProps> = ({
  title = 'Perfil',
  topButtons,
  bottomContent,
  children,
  onClose,
}) => (
  <Container>
    <HeaderContainer>
      <Typography>{title}</Typography>
      <ButtonsContainer>{topButtons}</ButtonsContainer>
    </HeaderContainer>

    <ContentContainer>{children}</ContentContainer>

    <BottomContainer>
      {bottomContent ?? <div />}
      <SecondaryButton label="Cerrar" onClick={onClose} />
    </BottomContainer>
  </Container>
)

export default LargeModalTemplate
