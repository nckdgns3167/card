import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { css } from '@emotion/react'
import Flex from '@shared/Flex'
import FixedBottomButton from '@shared/FixedBottomButton'
import TextField from '@shared/TextField'
import Spacing from '@shared/Spacing'
import { FormValues } from '@models/signup'
import validator from 'validator'

const Form = ({ onSubmit }: { onSubmit: (formValues: FormValues) => void }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    rePassword: '',
    name: '',
  })

  // 만져짐으로 인해 더러워진 것을 기록. 한 번이라도 포커싱된 적 있으면 기록됨.
  const [dirty, setDirty] = useState<Partial<FormValues>>({})

  const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const handleBlur = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setDirty((prev) => ({
      ...prev,
      [e.target.name]: 'true',
    }))
  }, [])

  const errors = useMemo(() => validate(formValues), [formValues])

  const isValid = Object.keys(errors).length === 0

  return (
    <Flex direction="column" css={formContainerStyle}>
      <TextField
        label="이메일"
        name="email"
        placeholder="test@gmail.com"
        value={formValues.email}
        onChange={handleFormValues}
        hasError={Boolean(dirty.email) && Boolean(errors.email)}
        helpMessage={Boolean(dirty.email) && errors.email}
        onBlur={handleBlur}
      />
      <Spacing size={16} />
      <TextField
        label="패스워드"
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleFormValues}
        hasError={Boolean(dirty.password) && Boolean(errors.password)}
        helpMessage={Boolean(dirty.password) && errors.password}
        onBlur={handleBlur}
      />
      <Spacing size={16} />
      <TextField
        label="패스워드 재확인"
        name="rePassword"
        type="password"
        value={formValues.rePassword}
        onChange={handleFormValues}
        hasError={Boolean(dirty.rePassword) && Boolean(errors.rePassword)}
        helpMessage={Boolean(dirty.rePassword) && errors.rePassword}
        onBlur={handleBlur}
      />
      <Spacing size={16} />
      <TextField
        label="이름"
        name="name"
        placeholder="홍길동"
        value={formValues.name}
        onChange={handleFormValues}
        hasError={Boolean(dirty.name) && Boolean(errors.name)}
        helpMessage={Boolean(dirty.name) && errors.name}
        onBlur={handleBlur}
      />
      <FixedBottomButton
        label="회원가입"
        onClick={() => {
          onSubmit(formValues)
        }}
        disabled={!isValid}
      />
    </Flex>
  )
}

const validate = (formValues: FormValues) => {
  let errors: Partial<FormValues> = {}
  if (!validator.isEmail(formValues.email)) {
    errors.email = '이메일 형식을 확인해 주세요.'
  }
  if (formValues.password.length < 8) {
    errors.password = '비밀번호를 8글자 이상 입력해 주세요.'
  }
  if (formValues.rePassword.length < 8) {
    errors.rePassword = '비밀번호를 8글자 이상 입력해 주세요.'
  } else if (!validator.equals(formValues.rePassword, formValues.password)) {
    errors.rePassword = '비밀번호를 확인해 주세요.'
  }
  if (formValues.name.length < 2) {
    errors.name = '이름은 2글자 이상 입력해 주세요.'
  }
  return errors
}

const formContainerStyle = css`
  padding: 24px;
`

export default Form
