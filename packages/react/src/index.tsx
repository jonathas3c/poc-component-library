import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  color: '$white',
  border: 0,
  borderRadius: '$sm',
  fontWeight: '$bold',

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $3',
      },
      medium: {
        fontSize: '$md',
        padding: '$3 $6',
      },
      large: {
        fontSize: '$lg',
        padding: '$3 $8',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
