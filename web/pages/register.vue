<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <b-row class="justify-content-center">
                <b-col md="6" sm="8">
                    <b-card no-body class="mx-4">
                        <b-card-body class="p-4">

                            <h1>Register</h1>
                            <p class="text-muted">Create your account</p>

                            <Notification :message="error" v-if="error"/>
                            <b-form @submit.prevent="register">
                                <b-input-group class="mb-3">
                                    <b-input-group-prepend>
                                        <b-input-group-text>@</b-input-group-text>
                                    </b-input-group-prepend>
                                    <input type="email" class="form-control" placeholder="Email" name="email"
                                           v-model="user.email" v-validate="{ required: true, email: true }" >
                                    <br>
                                    <span>{{ errors.first('email') }}</span>
                                </b-input-group>

                                <b-input-group class="mb-3">
                                    <b-input-group-prepend>
                                        <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                                    </b-input-group-prepend>
                                    <input type="password" class="form-control" placeholder="Password"
                                           v-model="user.password">
                                </b-input-group>

                                <b-input-group class="mb-4">
                                    <b-input-group-prepend>
                                        <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                                    </b-input-group-prepend>
                                    <input type="password" class="form-control" placeholder="Repeat password"
                                           v-model="user.confirmPassword">
                                </b-input-group>

                                <b-button variant="success" block type="submit">Create Account</b-button>
                            </b-form>
                        </b-card-body>

                    </b-card>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>

    import Notification from "../components/Notification";

    export default {
        name: 'Register',
        components: {Notification},
        layout: 'clean',
        middleware: 'guest',
        data() {
            return {
                error: null,
                user: {
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            };
        },
        methods: {
            async register() {
                try {
                    console.log(this.$axios.defaults.baseURL)
                    await this.$axios.post('users', {user: this.user});

                    await this.$auth.loginWith('local', {
                        data: {user: this.user}
                    });

                    this.$router.push('/');
                } catch (e) {
                    this.error = e.response.data.errors;
                }
            },
        },
    }
</script>
