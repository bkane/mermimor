<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">
                <div class="hstack">
                    <img src="@/assets/jeff.png" height="64" alt="jeffff" class="d-inline-block align-bottom px-3" />
                    <div class="vstack">
                        <div class="display-5 py-0">Mermimor</div>
                        <div class="navbar-text fs-6 fw-lighter fst-italic py-0">
                            come on in <span class="text-decoration-line-through">guys</span>
                        </div>
                    </div>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                <span class="navbar-toggler-icon"></span>
            </button>

            <nav class="collapse navbar-collapse" id="navbarNavDropdown" ref="navbarMenuCollapse">
                <ul class="navbar-nav text-end">
                    <li class="navbar-item">
                        <router-link to="/" class="nav-link navbar-link">Standings</router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link to="/episodes" class="nav-link">Episodes</router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link to="/survivors" class="nav-link">Survivors</router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link to="/scoring" class="nav-link">Scoring</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    watch: {
        $route() {
            this.$refs.navbarMenuCollapse.classList.remove("show");
        }
    }
};
</script>

<style></style>
