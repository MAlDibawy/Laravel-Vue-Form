<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>login</h1>

                <form  @submit.prevent="login(user)">
                    <div class="text-left">
                        
                        <div class="form-group">
                            <input type="email" class="form-control" id='email' placeholder="email" v-model="user.email">
                        </div>

                        <div class="form-group">
                            <input type="password" class="form-control" id='password' placeholder="password" v-model="user.password">
                        </div>
                        
                    </div>

                    <div class="text-center">
                    
                        <button class="btn btn-primary">login</button>
                        <br><br>
                        <router-link class="btn btn-default" :to="{name:'index'}">
                            Home
                        </router-link>
                        <router-link :to="{ name: 'Register' }" class="btn btn-default">
                            Register
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    email: null,
                    password: null,
                },
            }
        },
        methods: {
            resetUser() {
                this.user = {
                    email: null,
                    password: null,
                }
            },

            login(user) {
                Store.dispatch('login', user)
                    .then(response => {
                        console.log('response from success login')
                    })
                    .catch(response => {
                        console.log('response from failed login')
                    })
            }
        },
    }
</script>
