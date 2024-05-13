import { ToastContainer, ToastContent } from './styles'

export interface ToastProps {
  scheduling: string
  schedulingAt: string
}

export function Toast({ scheduling, schedulingAt }: ToastProps) {
  return (
    <ToastContainer>
      <ToastContent>
        <strong>{scheduling}</strong>
        <span>{schedulingAt}</span>
      </ToastContent>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
