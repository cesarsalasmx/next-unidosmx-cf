export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>{
  if (typeof window !== "undefined") {
    isBrowser() && window.localStorage.getItem("gatsbyUser")
      ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
      : {}
  }
}

const setUser = user =>{
  if (typeof window !== "undefined") {
    window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
  }
}
export const handleLogin = ({ username, password }) => {
  if (username === `john` && password === `pass`) {
    return setUser({
      username: `john`,
      name: `Johnny`,
      email: `johnny@example.org`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}