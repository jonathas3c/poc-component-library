import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@jonathas-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom heading text',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Custom H1 heading',
    as: 'h1',
  },
  // TODO: Remove before final release
  // parameters: {
  //   docs: {
  //     description: {
  //       story:
  //         'By default heading will always be and `h2`, but you can change it using the `as` prop.',
  //     },
  //   },
  // },
}
