<template>
    <div class="card pb-3">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
            <h3 class="card-title">{{name}}</h3>
            <p class="card-text"><small class="text-muted">{{date}}</small></p>
            <ul>{{events}}</ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Episode',
    props: ['name', 'date', 'events']
}
</script>

<style>

</style>