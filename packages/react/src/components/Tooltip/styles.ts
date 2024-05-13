import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const TooltipContentContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',

  width: '$50',
  height: '$11',
  borderRadius: '5px',
  backgroundColor: '$gray900',
  color: '$gray100',
})

export const TooltipContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  h2: {
    fontFamily: 'Inter',
    fontWeight: '$medium',
    fontSize: '$sm',
    lineHeight: '$shorter',
    letterSpacing: '0.09px',
  },
})

export const Indicator = styled('svg', {})
