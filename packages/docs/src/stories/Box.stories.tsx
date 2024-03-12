import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@jonathas-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o Box</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj = {}
