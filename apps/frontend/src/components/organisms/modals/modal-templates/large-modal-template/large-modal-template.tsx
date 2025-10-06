import React from 'react'
import type { LargeModalTemplateProps } from './types'
import {
  BottomContainer,
  ButtonsContainer,
  Container,
  ContentContainer,
  HeaderContainer,
  Title,
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
      <Title variant="button2">{title}</Title>
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
