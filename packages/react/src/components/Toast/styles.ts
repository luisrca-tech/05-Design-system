import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  width: '22.5rem',
  height: '5.125rem',
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  border: '1px',
  fontFamily: '$default',
})

export const ToastContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  padding: '$3 $5',

  strong: {
    fontWeight: '$bold',
    fontSize: '$xl',
    color: '$white',
    lineHeight: '$short',
  },

  span: {
    fontWeight: '$regular',
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray200',
  },
})
