import React from 'react'
import Flex from '@shared/Flex'
import { Link, useLocation } from 'react-router-dom'
import Button from '@shared/Button'
import { css } from '@emotion/react'
import { colors } from '@styles/colorPalette'

const Navbar = () => {
  const location = useLocation()
  const showSignButton = !['/signup', '/signin'].includes(location.pathname)
  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyle}>
      <Link to="/">홈</Link>
      {showSignButton && (
        <Link to="/signup">
          <Button>로그인/회원가입</Button>
        </Link>
      )}
    </Flex>
  )
}

const navbarContainerStyle = () => css`
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.grey};
  padding: 10px 24px;
`

export default Navbar
