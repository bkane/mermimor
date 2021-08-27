<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">
                <div class="hstack">
                    <img src="@/assets/jeff.png" height="64" alt="jeffff" class="d-inline-block align-bottom px-3">
                    <div class="vstack">
                        <div class="display-5 py-0">Mermimor</div>
                        <div class="navbar-text fs-6 fw-lighter fst-italic py-0">come on in guys</div>
                    </div>
                </div>
                
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="navbar-item">
                        <router-link to="/" class="nav-link">Standings</router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link to="/episodes" class="nav-link">Episodes</router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link to="/survivors" class="nav-link">Survivors</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'

}
</script>

<style>

</style>