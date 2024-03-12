import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@jonathas-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj = {
  args: {
    children: 'Primary',
  },
}
