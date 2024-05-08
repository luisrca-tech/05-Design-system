import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignaite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/luisrca-tech.png',
    alt: 'Luis Felipe',
  },
    argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}