<template>
    <div class="row bg-dark text-light">
        <div class="col-1 h4 text-center align-self-center py-0 px-1 fs-5">#{{ rank }}</div>
        <div class="col h4 align-self-center py-0">
            <div class="vstack p-0">
                {{ name }}
                <p class="text-muted m-0 fs-6">{{ owner }}</p>
            </div>
        </div>
        <div class="col-2 h4 ps-0 text-start align-self-center">{{ score }} pts</div>
    </div>

    <div class="picks-table">
        <div class="row striped-row" v-for="pick in picks" :key="pick.id">
            <div class="col-1"></div>
            <div class="col-8 col-md py-0 ps-4" :class="{ 'text-decoration-line-through': pick.eliminated }">
                {{ pick.name }}
            </div>
            <div class="col p-0 pe-5 text-start">{{ pick.points }}</div>
        </div>
        <div class="row spacer mb-2"></div>
    </div>
</template>

<script>
export default {
    name: "StandingsEntry",
    props: ["id", "rank", "name", "owner", "score", "picks"]
};
</script>

<style>
.spacer {
    border: none;
}

.striped-row {
    border-bottom-color: rgb(223, 224, 225);
    border-bottom-width: 1px;
    border-bottom-style: solid;
}

.striped-row:nth-child(odd) {
    background-color: rgb(236, 237, 238);
}
</style>
