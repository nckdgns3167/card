import React from 'react'
import { createPortal } from 'react-dom'

import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from '@styles/colorPalette'

import Button from '@shared/Button'

interface FixedBottomButtonProps {
  label: string
  onClick: () => void
}

const FixedBottomButton = ({ label, onClick }: FixedBottomButtonProps) => {
  const $portalRoot = document.getElementById('root-portal')

  if ($portalRoot == null) return null

  return createPortal(
    <Container>
      <Button size="medium" css={buttonStyle} full onClick={onClick}>
        {label}
      </Button>
    </Container>,
    $portalRoot,
  )
}

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.white};
  padding: 20px;
`

const buttonStyle = css`
  border-radius: 8px;
`

export default FixedBottomButton
