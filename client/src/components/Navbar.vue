<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">Mermimor</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
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
    </nav>
</template>

<script>
export default {
    name: 'Navbar'

}
</script>

<style>

</style>