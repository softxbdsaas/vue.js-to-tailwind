<template>
    <div class="bg-white p-8 rounded-lg shadow-lg mt-10" style="max-width: 450px; margin:auto">
        <h2 class="text-2xl font-bold text-center pb-6">Register</h2>
        <form @submit.prevent="register" enctype="multipart/form-data">
            <div class="grid gap-4">
                <!-- First Name -->
                <input type="text" v-model="first_name" placeholder="First Name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required />
                <!-- Last Name -->
                <input type="text" v-model="last_name" placeholder="Last Name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required />
                <!-- Email -->
                <input type="email" v-model="email" placeholder="Email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required />
                <!-- Password -->
                <input type="password" v-model="password" placeholder="Password"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required />
                <!-- Mobile -->
                <input type="text" v-model="mobile" placeholder="Mobile"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required />
                <!-- Nick Name -->
                <input type="text" v-model="nick_name" placeholder="Nick Name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <!-- Date of Birth -->
                <input type="date" v-model="date_of_birth" placeholder="Date of Birth"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required />
                <!-- Gender -->
                <select v-model="gender"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <!-- Address -->
                <input type="text" v-model="address" placeholder="Address"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <!-- Image Upload -->
                <div>
                    <label class="block text-sm font-medium text-gray-700">Upload Profile Picture</label>
                    <input type="file" @change="handleFileUpload"
                        class="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <!-- Submit Button -->
                <button type="submit"
                    class="w-full py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    Register
                </button>
            </div>
        </form>
        <p class="mt-4 text-center">Already have an account? <router-link to="/login"
                class="text-indigo-600">Login</router-link></p>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2

export default {
    data() {
        return {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            mobile: "",
            nick_name: "",
            date_of_birth: "",
            gender: "Male",
            address: "",
            image: null,
        };
    },
    methods: {
        handleFileUpload(event) {
            this.image = event.target.files[0];
        },
        async register() {
            const formData = new FormData();
            formData.append("first_name", this.first_name);
            formData.append("last_name", this.last_name);
            formData.append("email", this.email);
            formData.append("password", this.password);
            formData.append("mobile", this.mobile);
            formData.append("nick_name", this.nick_name);
            formData.append("date_of_birth", this.date_of_birth);
            formData.append("gender", this.gender);
            formData.append("address", this.address);
            if (this.image) {
                formData.append("image", this.image);
            }

            try {
                const response = await axios.post("http://localhost:5000/api/users", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                // Show success alert using SweetAlert2
                // Show success alert using SweetAlert2
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration successful.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    // Redirect to login page after user clicks OK
                    this.$router.push({ name: 'login' }); // Assuming the login route is named 'login'
                });
            } catch (error) {
                console.log(error);

                // Show error alert using SweetAlert2
                Swal.fire({
                    title: 'Error!',
                    text: 'Error during registration. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        },
    },
};
</script>

<style scoped>
/* Additional custom styling if needed */
</style>
