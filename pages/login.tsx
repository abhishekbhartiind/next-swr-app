import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { requiredValidationMessage } from '@utils/constants'
import { ILogin } from '@utils/interfaces'

const Login = () => {
  const validationSchema = useMemo(
    () =>
      yup.object({
        username: yup.string().required(`Username ${requiredValidationMessage}`),
        password: yup.string().required(`Password ${requiredValidationMessage}`),
      }),
    [],
  )

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(validationSchema),
  })

  const handleLogin = async (data: ILogin) => {
    console.log('login form data => ', data)
  }

  return (
    <div className="container">
      <p className="flow-text center grey-text">Login</p>
      <div className="row"></div>
      <form className="col s12" onSubmit={handleSubmit(handleLogin)} autoComplete="off">
        <div className="row">
          <div className="input-field col s6">
            <input
              id="username"
              type="text"
              className="validate"
              {...register('username')}
              placeholder="Enter your Username"
            />
            <label htmlFor="username">Username</label>
            {errors.username && (
              <span className="helper-text red-text">{errors.username.message}</span>
            )}
          </div>
          <div className="input-field col s6">
            <input
              id="password"
              type="password"
              className="validate"
              {...register('password')}
              placeholder="Enter your Password"
            />
            <label htmlFor="password">Password</label>
            {errors.password && (
              <span className="helper-text red-text">{errors.password.message}</span>
            )}
          </div>
          <div className="input-field col s6">
            <button className="btn grey waves-effect waves-light" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
