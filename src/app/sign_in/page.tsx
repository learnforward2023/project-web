'use client'
import FeatureList from '@/PageComponents/SignInPage/FeatureList'
import SignInForm from '@/PageComponents/SignInPage/Form'
import { PrimaryLayout } from '@/components/Layouts/PrimaryLayout'

export default function SignIn() {
  return (
    <PrimaryLayout>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem'
        }}
      >
        <FeatureList />
        <SignInForm />
      </section>
    </PrimaryLayout>
  )
}
