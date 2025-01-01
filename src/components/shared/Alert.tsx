import React from 'react'
import styled from '@emotion/styled'
import { colors } from '@styles/colorPalette'
import Text from '@shared/Text'
import Dimmed from '@shared/Dimmed'
import Button from '@shared/Button'
import Flex from '@shared/Flex'

interface AlertProps {
  open?: boolean
  title: React.ReactNode
  description?: React.ReactNode
  buttonLabel?: string
  onButtonClick: () => void
}

const Alert = ({
  open,
  title,
  description,
  buttonLabel = '확인',
  onButtonClick,
}: AlertProps) => {
  if (!open) return null
  return (
    <Dimmed>
      <Container>
        <Text typography="t4" bold display="block" style={{ marginBottom: 6 }}>
          {title}
        </Text>
        {description ? (
          <Text typography="t7" color="grey">
            {description}
          </Text>
        ) : null}
        <Flex justify="flex-end">
          <Button
            onClick={onButtonClick}
            weak
            style={{ marginTop: 12, border: 'none' }}
          >
            {buttonLabel}
          </Button>
        </Flex>
      </Container>
    </Dimmed>
  )
}

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  border-radius: 8px;
  overflow: hidden;
  z-index: var(--alert-zindex);
  width: 320px;
  padding: 24px;
  box-sizing: border-box;
`

export default Alert
