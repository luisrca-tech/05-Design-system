import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@ignaite-ui/react'

export default {
  title: 'Info/Tooltip',
  component: Tooltip,
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    available: 'Disponível',
    availableAt: '19 de Dezembro'
  }
}

export const Secondary: StoryObj<TooltipProps> = {
  args: {
    available: 'Indisponível',
    availableAt: '22 de Dezembro'
  }
}