import React from 'react'
import Form from '@components/signup/Form'
import { FormValues } from '@models/signup'
import { auth, store } from '@remote/firebase'

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { COLLECTIONS } from '@/constants/constants'
import { collection, doc, setDoc } from 'firebase/firestore'

const SignupPage = () => {
  const handleSubmit = async (formValues: FormValues) => {
    const { email, password, name } = formValues

    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(user, {
      displayName: name,
    })

    const newUser = {
      uid: user.uid,
      email: user.email,
      displayName: name,
    }

    await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser)

    // TODO
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SignupPage
