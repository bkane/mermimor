<template>
    <div class="home">
        <Navbar />
        <section class="container mt-5">
            <!-- Use :key="$route.path" to reload components when the route param changes:
                https://vueschool.io/lessons/how-to-rerender-components-when-vue-router-params-changes 
                -->
            <router-view :key="$route.path"></router-view>
        </section>
    </div>
</template>

<script>
import axios from "axios";
import Navbar from "./components/Navbar.vue";

export default {
    name: "App",
    components: {
        Navbar
    },
    async created() {
        axios.defaults.baseURL = process.env.VUE_APP_API_BASE || "nah";
    }
};
</script>

<style>
.loader {
    width: 256px;
    height: 256px;
    opacity: 0;
    animation-name: spin, fadeIn;
    animation-duration: 2s, 600ms;
    animation-timing-function: linear, ease;
    animation-iteration-count: infinite, 1;
    animation-delay: 400ms;
    animation-fill-mode: forwards;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
