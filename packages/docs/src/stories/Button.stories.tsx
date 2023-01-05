import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@oseasmoreto/react'

export default {
  title: 'Home/Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
    children: 'Enviar',
  },
}
