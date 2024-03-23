'use client'
import React from 'react'

import { Checkbox, Divider, Flex, Form, Grid, Input, message, theme, Typography } from 'antd'

import { LockOutlined, MailOutlined } from '@ant-design/icons'
import HButton from '@/components/Buttons/HButton'
import HGoogleButton from '@/components/Buttons/HGoogleButton'
import HFacebookButton from '@/components/Buttons/HFacebookButton'

const { useToken } = theme
const { useBreakpoint } = Grid
const { Text, Link } = Typography

import './index.scss'
import HGithubButton from '@/components/Buttons/HGithubButton'
import { API } from '@/constants/API'
import { headers, isFetchingSuccess, POST_METHOD } from '@/constants/fetchTools'
import { TOGETHER_TOKEN } from '@/constants/constants'

type TFormValues = {
  email: string;
  password: string;
  passwordConfirmation: string;
  remember?: boolean;
  term?: boolean;
}

interface ISignInFormProps { }

const SignInForm: React.FC<ISignInFormProps> = () => {
  const { token } = useToken()
  const screens = useBreakpoint()

  const [isSignInForm, setIsSignInForm] = React.useState<boolean>(true)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const handleSignIn = async (values: TFormValues) => {
    setIsLoading(true)
    try {
      const response = await fetch(API.SIGN_IN_WITH_NORMAL_ACCOUNT, {
        method: POST_METHOD,
        headers: headers(),
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      })
      const data = await response.json()

      if (isFetchingSuccess(response)) {
        message.success(data.message)
        window.localStorage.setItem(TOGETHER_TOKEN, data.token)
      } else {
        message.error(data.message)
      }

      setIsLoading(false)
    } catch (_error) {
      setIsLoading(false)
    }
  }

  const handleSignUp = async (values: TFormValues) => {
    setIsLoading(true)
    try {
      const response = await fetch(API.SIGN_UP_WITH_NORMAL_ACCOUNT, {
        method: POST_METHOD,
        headers: headers(),
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          passwordConfirmation: values.passwordConfirmation
        })
      })
      const data = await response.json()

      if (isFetchingSuccess(response)) {
        message.success(data.message)
        window.localStorage.setItem(TOGETHER_TOKEN, data.token)
      } else {
        message.error(data.errors[0])
      }

      setIsLoading(false)
    } catch (_error) {
      setIsLoading(false)
    }
  }

  return (
    <section
      style={{
        alignItems: 'center',
        backgroundColor: token.colorBgContainer,
        display: 'flex',
        padding: screens.md ? `${token.sizeXXL}px 0px` : '0px'
      }}
      className="SignInForm"
    >
      <div
        style={{
          margin: '0 auto',
          padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
          boxShadow: token.boxShadow,
          borderRadius: token.borderRadius,
          width: '100%'
        }}
        className="SignInForm__Container"
      >
        <div style={{
          marginBottom: token.marginLG,
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          <Text style={{
            fontSize: token.fontSizeHeading3,
            fontWeight: 'bold',
            fontFamily: 'system-ui'
          }}>Start with <span className="HTextLogo">Together</span></Text>
          <Flex gap="small" wrap="nowrap" className="SNS__ButtonGroup">
            <HGoogleButton
              onClick={() => {
                window.location.href = process.env.SIGN_WITH_GOOGLE as string
              }}
            />
            <HGithubButton
              onClick={() => {
                window.location.href = process.env.SIGN_WITH_GITHUB as string
              }}
            />
            <HFacebookButton
              onClick={() => {
                window.location.href = process.env.SIGN_WITH_FACEBOOK as string
              }}
            />
          </Flex>
          <Divider style={{ color: token.colorTextSecondary, margin: 0 }}>or</Divider>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true
          }}
          onFinish={(values) => (isSignInForm ? handleSignIn(values) : handleSignUp(values))}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Vui lòng nhập email của bạn!'
              }
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Địa chỉ email address"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu của bạn!'
              },
              {
                min: 8,
                message: 'Mật khẩu phải có ít nhất 8 ký tự!'
              }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Mật khẩu"
              size="large"
            />
          </Form.Item>
          {
            isSignInForm ? (
              <>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox style={{
                      color: token.colorTextSecondary
                    }}>Remember me</Checkbox>
                  </Form.Item>
                  <Link href="#" style={{ float: 'right' }}>
                    Quên mật khẩu?
                  </Link>
                </Form.Item>
                <Form.Item style={{ marginBottom: '0px' }}>
                  <HButton variant="primary" size="large" type="submit" fullWidth isLoading={isLoading}>
                    Sign in to your account
                  </HButton>
                  <div style={{
                    marginTop: token.marginLG,
                    textAlign: 'center',
                    width: '100%'
                  }}>
                    <Text style={{
                      color: token.colorTextSecondary
                    }}>Don’t have an account yet?</Text>{' '}
                    <Link href="#" onClick={() => setIsSignInForm(false)}>Sign up here</Link>
                  </div>
                </Form.Item>
              </>
            ) : (
              <>
                <Form.Item
                  name="passwordConfirmation"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập lại mật khẩu!'
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve()
                        }
                        return Promise.reject('Mật khẩu không trùng khớp!')
                      }
                    })
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                    size="large"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item
                    name="term"
                    valuePropName="checked"
                    noStyle
                    rules={[
                      {
                        validator: (_, value) => {
                          if (!value) {
                            return Promise.reject('Vui lòng đồng ý với điều khoản sử dụng!')
                          }
                          return Promise.resolve()
                        }
                      }
                    ]}
                  >
                    <Checkbox
                      style={{
                        color: token.colorTextSecondary
                      }}
                    >
                      Đồng ý với <Link href="#">điều khoản sử dụng</Link>
                    </Checkbox>
                  </Form.Item>
                </Form.Item>
                <Form.Item style={{ marginBottom: '0px' }}>
                  <HButton variant="primary" size="large" type="submit" fullWidth isLoading={isLoading}>
                    Create a new Together account
                  </HButton>
                  <div style={{
                    marginTop: token.marginLG,
                    textAlign: 'center',
                    width: '100%'
                  }}>
                    <Text style={{
                      color: token.colorTextSecondary
                    }}>
                      Already have an account?{' '}
                    </Text>{' '}
                    <Link href="#" onClick={() => setIsSignInForm(true)}>Sign in here</Link>
                  </div>
                </Form.Item>
              </>
            )
          }
        </Form>
      </div>
    </section>
  )
}

export default SignInForm
