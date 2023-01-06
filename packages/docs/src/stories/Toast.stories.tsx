import type { StoryObj, Meta } from '@storybook/react'
import {
  Button,
  Toast,
  ToastAction,
  ToastDescription,
  ToastProps,
  ToastProvider,
  ToastTitle,
} from '@oseasmoreto-ignite-ui/react'
import { useEffect, useRef, useState } from 'react'
import { X } from 'phosphor-react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {},
  decorators: [
    (Story) => {
      const [open, setOpen] = useState<boolean>(false)
      const eventDateRef = useRef(new Date())
      const timerRef = useRef(0)

      function oneWeekAway() {
        const now = new Date()
        const inOneWeek = now.setDate(now.getDate() + 7)
        return new Date(inOneWeek)
      }

      useEffect(() => {
        return () => clearTimeout(timerRef.current)
      }, [])

      return (
        <ToastProvider swipeDirection="right">
          <Button
            onClick={() => {
              setOpen(false)
              window.clearTimeout(timerRef.current)
              timerRef.current = window.setTimeout(() => {
                eventDateRef.current = oneWeekAway()
                setOpen(true)
              }, 100)
            }}
          >
            Open
          </Button>
          <Toast open={open} onOpenChange={setOpen}>
            <ToastTitle>Agendamento realizado</ToastTitle>
            <ToastDescription asChild>
              Quarta-feira, 23 de Outubro às 16h
            </ToastDescription>
            <ToastAction asChild altText="Close">
              <Button variant="tertiary" size="md">
                <X size={16} />
              </Button>
            </ToastAction>
          </Toast>
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
