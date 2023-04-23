<template>
    <div class="container shadow">
        <form class="contact-form" action="app.vue">
            <h2>Contact Us</h2>
            <div class="form-control">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required v-model="email">
            </div>
            <div class="form-control">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required v-model="password">
            </div>
            <button type="submit" @click="login">Submit</button>
        </form>
    </div>
</template>


<style scoped>
.container{
    padding: 20px;
}
.contact-form {
    /* background-color: #f4f4f4; */
    padding: 20px;
    border-radius: 5px;
}

.contact-form h2 {
    margin-top: 0;
    margin-bottom: 20px;
}

.form-control {
    margin-bottom: 20px;
    border: 1px solid transparent;
}

.form-control label {
    display: block;
    margin-bottom: 5px;
}

.form-control input,
.form-control textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.form-control input:focus {
    outline: none;
    border-color: #6eb7ff;
}

button[type="submit"] {
    display: block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #6eb7ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #5b9ae5;
}
</style>



<script>
    import axios from "axios"
export default {
    data() {
        return {
            email:'',
            password:'',
        }
    },
    methods:{
        async login() {
            let result = await axios.get(``)
        }
    }
}

</script>