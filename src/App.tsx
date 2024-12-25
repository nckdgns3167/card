import React from 'react'
import logo from './logo.svg'
import './App.css'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Text from '@shared/Text'
import Button from '@shared/Button'

function App() {
  return (
    <div>
      <Text typography="t1" display="block">
        Hello World!
      </Text>
      <Text typography="t2">Hello World!</Text>
      <Text typography="t3">Hello World!</Text>
      <Text typography="t4">Hello World!</Text>
      <Text>Hello World!</Text>
      <Text typography="t6">Hello World!</Text>

      <div style={{ height: 10, width: '100%', background: '#efefef' }}></div>

      <Button>안녕하세요</Button>
      <Button color="success">안녕하세요</Button>
      <Button color="error">안녕하세요</Button>
      <Button weak>안녕하세요</Button>
      <Button full>안녕하세요</Button>
      <Button color="error" disabled>
        안녕하세요
      </Button>
    </div>
  )
}

export default App
