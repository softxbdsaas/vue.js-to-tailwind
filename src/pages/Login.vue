<template>
    <div class="bg-white p-8 rounded-lg shadow-lg mt-10" style="max-width: 450px; margin:auto">
        <h2 class="text-2xl font-bold text-center pb-6">Login</h2>
        <form @submit.prevent="login">
            <div class="grid gap-4">

                <!-- Email -->
                <input type="email" v-model="email" placeholder="Email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required />
                <!-- Password -->
                <input type="password" v-model="password" placeholder="Password"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required />


                <!-- Submit Button -->
                <button type="submit"
                    class="w-full py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    Submit
                </button>
            </div>
        </form>
        <p>Don't have an account? <router-link to="/register" class="text-indigo-600">Create an account</router-link> to
            get started.</p>
    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2'; // Import SweetAlert2


export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post("http://localhost:5000/api/login", {
                    email: this.email,
                    password: this.password,
                });

                if (response.data.success) {
                    // Show success alert using SweetAlert2
                    Swal.fire({
                        title: 'Success!',
                        text: 'Registration successful.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    }).then(() => {
                        this.$router.push({ name: 'Home' }); // Assuming the login route is named 'login'
                    });
                    // Store token or redirect to a protected page
                    Cookies.set("auth_token", response.data.token, { expires: 7 }); // Cookie will expire in 7 days
                } else {
                    console.log(response?.data,"responseresponse")
                    alert("Invalid credentials");
                }
            } catch (error) {
                console.error(error);
                alert("Error during login");
            }
        },
    },
};
</script>
