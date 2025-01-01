import React from 'react'
import './App.css'

import Text from '@shared/Text'
import Button from '@shared/Button'
import Input from '@shared/Input'
import TextField from '@shared/TextField'
import { useAlertContext } from '@contexts/AlertContext'

function App() {
  const { open } = useAlertContext()
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

      <div style={{ height: 10, width: '100%', background: '#efefef' }}></div>

      <Input placeholder={'로그인'} aria-invalid={true} />
      <Input />

      <TextField label="아이디" />
      <TextField label="패스워드" hasError={true} helpMessage="asdsad" />

      <div style={{ height: 10, width: '100%', background: '#efefef' }}></div>

      {/*<Alert*/}
      {/*  open={true}*/}
      {/*  title="알럿이 떴습니다."*/}
      {/*  description="바보"*/}
      {/*  onButtonClick={() => {}}*/}
      {/*/>*/}

      <Button
        onClick={() => {
          open({
            title: '카드신청완료',
            description: '내역 페이지에서 확인해 주세요.',
            onButtonClick: () => {},
          })
        }}
      >
        Alert오픈
      </Button>
    </div>
  )
}

export default App
