import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@jonathas-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
} as Meta<TextProps>

export const Primary: StoryObj = {}

export const CustomTag: StoryObj = {
  args: {
    children: 'Lorem ipsum but a little bit customized.',
    as: 'strong',
  },
}
