'use client'
import React from 'react'

import { Checkbox, Divider, Flex, Form, Grid, Input, theme, Typography } from 'antd'

import { LockOutlined, MailOutlined } from '@ant-design/icons'
import HButton from '@/components/Buttons/HButton'
import HGoogleButton from '@/components/Buttons/HGoogleButton'
import HFacebookButton from '@/components/Buttons/HFacebookButton'

const { useToken } = theme
const { useBreakpoint } = Grid
const { Text, Link } = Typography

import './index.scss'
import HGithubButton from '@/components/Buttons/HGithubButton'
import { applicationConfig } from '@/constants/ApplicationConfig'

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

  const handleSignIn = (values: TFormValues) => {
    // eslint-disable-next-line no-console
    console.log('Handle sign in', values)
  }

  const handleSignUp = (values: TFormValues) => {
    // eslint-disable-next-line no-console
    console.log('Handle sign up', values)
  }

  const onFinish = (values: TFormValues) => {
    if (isSignInForm) {
      handleSignIn(values)
    } else {
      handleSignUp(values)
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
            <HGoogleButton />
            <HGithubButton
              onClick={() => {
                window.location.href = applicationConfig.SIGN_WITH_GITHUB
              }}
            />
            <HFacebookButton />
          </Flex>
          <Divider style={{ color: token.colorTextSecondary, margin: 0 }}>or</Divider>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
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
                  <HButton variant="primary" size="large" type="submit" fullWidth>
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
                  <HButton variant="primary" size="large" type="submit" fullWidth>
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
