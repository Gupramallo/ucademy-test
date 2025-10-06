import React from 'react'
import { Container } from './styles'
import UserInputField from '@/components/molecules/user-input-field'
import type { UserProfileFormProps } from './types'
import { EMAIL_REGEX } from './constants'

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
      title="Email"
      type="email"
      register={register}
      rules={{
        required: 'El email es obligatorio',
        pattern: {
          value: EMAIL_REGEX,
          message: 'Por favor ingresa un email válido',
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
