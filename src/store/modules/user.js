import { login} from '@/api/login'

const user = {
  state: {
    token: ''
  },

  mutations: {
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

  }
}

export default user
