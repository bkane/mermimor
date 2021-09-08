<template>
    <div class="home">
        <Navbar />
        <section class="container mt-5">
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
import axios from "axios";
import Navbar from "./components/Navbar.vue";

export default {
    name: "App",
    components: {
        Navbar,
    },
    created() {
        console.log(`created ${this.seasonTitle}`);
        axios.defaults.baseURL = process.env.VUE_APP_API_BASE || "nah";
    },
};
</script>

<style>
.loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>