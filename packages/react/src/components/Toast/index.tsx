import {
  ToastContainer,
  ToastTitle as ToastTitleStyled,
  ToastDescription as ToastDescriptionStyled,
  ToastAction as ToastActionStyled,
} from './styles'
import * as ToastRoot from '@radix-ui/react-toast'
import { ComponentProps } from 'react'

export const ToastProvider = ToastRoot.Provider

export const Toast = ToastContainer

export const ToastTitle = ToastTitleStyled

export const ToastDescription = ToastDescriptionStyled

export const ToastAction = ToastActionStyled

export const ToastViewport = ToastRoot.Viewport

export interface TooltipProviderProps
  extends ComponentProps<typeof ToastRoot.Provider> {
  swipeDirection: ToastRoot.SwipeDirection
}

export interface ToastProps extends ComponentProps<typeof ToastContainer> {}

Toast.displayName = 'Toast'
