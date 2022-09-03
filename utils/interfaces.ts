export interface ILogin {
  username: string
  password: string
}

export interface IRegister {
  name: string
  email: string
  username: string
  password: string
}

export interface PostProps {
  title: string
  body: string
  id: number
}
