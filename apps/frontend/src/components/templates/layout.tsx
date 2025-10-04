import React, { PropsWithChildren } from 'react'
import SideMenu from '../organisms/side-menu'
import { Container, Content } from './styles'

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <SideMenu />
    <Content>{children}</Content>
  </Container>
)

export default Layout
