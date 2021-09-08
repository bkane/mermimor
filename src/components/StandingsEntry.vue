<template>
    <div class="row">
        <div class="col-2 fs-3 text-start">
            {{ rank }}
        </div>

        <div class="col">
            <h3
                class="btn btn-primary"
                data-bs-toggle="collapse"
                :href="'#collapse' + id"
            >
                {{ name }}
            </h3>

            <div class="collapse" :id="'collapse' + id">
                <ul v-for="pick in picks" :key="pick.id">
                    <li>{{ pick.name }} - {{ pick.points }} pts</li>
                </ul>
                <p v-if="picks.length == 0">No picks yet</p>
            </div>
        </div>

        <div class="col-2 text-center">
            <small class="ms-auto">{{ score }} pts</small>
        </div>
    </div>
</template>

<script>
export default {
    name: "StandingsEntry",
    props: ["id", "rank", "name", "score", "picks"],
};
</script>

<style>
</style>