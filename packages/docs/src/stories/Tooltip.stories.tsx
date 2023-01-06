import type { StoryObj, Meta } from '@storybook/react'
import {
  TooltipProvider,
  TooltipProps,
  TooltipContainer,
  TooltipTrigger,
  Button,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
  Text,
} from '@oseasmoreto-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: TooltipContent,
  args: {},
  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <TooltipContainer>
            <TooltipTrigger asChild>
              <Button>Display tooltip</Button>
            </TooltipTrigger>
            <TooltipPortal>
              <TooltipContent>
                <Text size="sm">Hi, i m tooltip</Text>
                <TooltipArrow />
              </TooltipContent>
            </TooltipPortal>
          </TooltipContainer>
        </TooltipProvider>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
