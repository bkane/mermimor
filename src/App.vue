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