import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios';

Vue.use(Vuex)

const Store = new Vuex.Store({
    plugins: [createPersistedState()],

    state: {
        tokens: {
            access_token: null,
            expires_in: null,
            refresh_token: null,
            token_type: null,
        },
        currentUser: {
            name: null,
            email: null,
        },
    },
    actions: {
        login(context, user) {
            // console.log('user', user)
            return new Promise((resolve, reject)=>{
                let data = {
                    client_id: 2,
                    client_secret: 'UeCGd5K3bTo3klGa4S1MahqgWnbWHPbJOa8bc90a',
                    grant_type: 'password',
                    username: user.email,
                    password: user.password,
                }
                axios.post(API.login,data)
                    .then(response => {
                        let responseData = response.data
                        let now = Date.now()

                        responseData.expires_in = responseData.expires_in + now

                        context.commit('updateTokens', responseData)
                        
                        resolve(response)
                    })
                    .catch(response => {
                        reject(response)
                    })
            })
        }
    },
    mutations: {
        updateTokens(state, tokens) {
            state.tokens = tokens
        },
    }
})
export default Store