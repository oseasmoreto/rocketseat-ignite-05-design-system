import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@oseasmoreto/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae est eius quae. Labore accusantium enim numquam, iusto architecto, consectetur tempore ducimus hic officiis ea dignissimos. Quia quasi voluptatum possimus a?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
