import {
  TooltipArrow as TooltipArrowStyled,
  TooltipContent as TooltipContentStyled,
} from './styles'
import * as TooltipRoot from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'

export interface TooltipProps extends ComponentProps<typeof TooltipRoot.Root> {
  open: boolean
}

export const TooltipPortal = TooltipRoot.Portal

export const TooltipProvider = TooltipRoot.Provider

export const TooltipContainer = TooltipRoot.Root

export const TooltipTrigger = TooltipRoot.Trigger

export const TooltipArrow = TooltipArrowStyled

export const TooltipContent = TooltipContentStyled
