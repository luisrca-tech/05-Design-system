import {
  Indicator,
  TooltipContainer,
  TooltipContent,
  TooltipContentContainer,
} from './styles'

export interface TooltipProps {
  available: 'Disponível' | 'Indisponível'
  availableAt: string
}

export function Tooltip({ availableAt, available }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipContentContainer>
        <TooltipContent>
          <h2>
            {availableAt} - {available}
          </h2>
        </TooltipContent>
      </TooltipContentContainer>
      <Indicator
        width="16"
        height="8"
        viewBox="0 0 17 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.5 8L16.5 0L0.5 0L8.5 8Z" fill="#121214" />
      </Indicator>
    </TooltipContainer>
  )
}
