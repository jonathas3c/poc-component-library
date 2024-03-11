import type { Meta, StoryObj} from '@storybook/react'
import { Button, ButtonProps } from '@jonathas-ui/react'

export default {
    title: 'Button',
    component: Button,
} as Meta<ButtonProps>

export const Primary:StoryObj<ButtonProps> = {
    args: {
        children: 'Primary',
    },
}

export const Small:StoryObj<ButtonProps> = {
    args: {
        size: 'small',
        children: 'Small',
    },
}

export const Medium:StoryObj<ButtonProps> = {
    args: {
        size: 'medium',
        children: 'Medium',
    },
}

export const Large:StoryObj<ButtonProps> = {
    args: {
        size: 'large',
        children: 'Large',
    },
}