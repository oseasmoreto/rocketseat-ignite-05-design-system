import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@oseasmoreto/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/oseasmoreto.png',
    alt: 'Oseas Moreto',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
    alt: 'Oseas Moreto',
  },
}
