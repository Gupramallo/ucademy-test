import React from 'react'
import { Container } from './styles'
import UserInputField from '@/components/molecules/user-input-field'
import type { UserProfileFormProps } from './types'

const UserProfileForm: React.FC<UserProfileFormProps> = ({
  register,
  errors,
}) => (
  <Container>
    <UserInputField
      title="Nombre"
      register={register}
      fieldKey="name"
      error={!!errors.name}
    />
    <UserInputField
      title="Apellido"
      register={register}
      fieldKey="lastName"
      error={!!errors.lastName}
    />
    <UserInputField
      title="Correo Electrónico"
      type="email"
      register={register}
      rules={{
        required: 'El correo electrónico es obligatorio',
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Por favor ingresa un correo electrónico válido',
        },
      }}
      fieldKey="email"
      error={!!errors.email}
      helperText={errors.email?.message}
      required
    />
    <UserInputField
      title="Teléfono"
      register={register}
      fieldKey="phone"
      type="tel"
    />
  </Container>
)

export default UserProfileForm
