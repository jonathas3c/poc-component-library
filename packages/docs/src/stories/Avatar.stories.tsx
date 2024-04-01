import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@jonathas-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/jonathas3c.png',
    alt: 'Jonathas Germano',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
