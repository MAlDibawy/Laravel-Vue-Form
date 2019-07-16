<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Registration</h1>

                <form  @submit.prevent="register(user)">
                    <div class="text-left">
                        <div class="form-group" :class="{'has-error': errors.name.length}">
                            <input type="text" class="form-control" id='name' placeholder="username" v-model="user.name">
                            <p class="help-block" v-for="error in errors.name" :key='error.id' >{{ error }}</p>
                        </div>
                        
                        <div class="form-group" :class="{'has-error': errors.email.length}">
                            <input type="email" class="form-control" id='email' placeholder="email" v-model="user.email">
                            <p class="help-block" v-for="error in errors.email" :key='error.id'>{{ error }}</p>
                        </div>

                        <div class="form-group" :class="{'has-error': errors.password.length}">
                            <input type="password" class="form-control" id='password' placeholder="password" v-model="user.password">
                            <p class="help-block" v-for="error in errors.password" :key='error.id'>{{ error }}</p>
                        </div>
                        
                        <div class="form-group" :class="{'has-error': errors.password_confirmation.length}">
                            <input type="password" class="form-control" id='password_confirmation' placeholder="confirm password" v-model="user.password_confirmation">
                            <p class="help-block" v-for="error in errors.password_confirmation" :key='error.id'>{{ error }}</p>
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary">Register</button>
                        <br><br>
                        <router-link class="btn btn-default" :to="{name:'index'}">Home</router-link>
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
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null,
                },
                errors: {
                    name: [],
                    email: [],
                    password: [],
                    password_confirmation: [],
                },
            }
        },
        methods: {
            resetUser() {
                this.user = {
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null,
                }
            },

            register(user) {
                axios.post(API.register, user)
                    .then(response => {
                        this.resetUser()
                        
                        let successMessage = response.data.message
                        alert(successMessage)
                        
                    })
                    .catch(error => {
                        let data = error.response.data.errors
                        for (let key in this.errors) {
                        // reset all errors
                        this.errors[key] = []

                        let errorMessage = data[key]
                        
                        if (errorMessage)
                            this.errors[key] = errorMessage
                        }
                    })  
            }
        },
    }
</script>
