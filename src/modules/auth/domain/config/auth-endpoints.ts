const projectName = process.env.BACKEND_PROJECT_NAME ?? "poc"

interface AuthEndpoints {
  userLogin: string
  userRegister: string
  refreshToken: string
  loggedInUser: string
  userDetail: string
}

export const authEndpoints: AuthEndpoints = {
  userLogin: `${projectName}/user/login/`,
  userRegister: `${projectName}/user/login/`,
  refreshToken: `${projectName}/refresh-token/`,
  loggedInUser: `${projectName}/refresh-token/`,
  userDetail: `logged-in-user/`,
}