import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@ignaite-ui/react'

export default {
  title: 'Info/Toast',
  component: Toast,
  args: {
    scheduling: 'Agendamento realizado',
    schedulingAt: 'Quarta feira, 23 de outubro ás 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const Secondary: StoryObj<ToastProps> = {
  args: {
    schedulingAt: 'Segunda feira, 15 de maio ás 16h'
  }
}