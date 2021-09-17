<template>
    <div class="row py-2 striped-row">
        <div class="col-md-2 col-3 text-center align-self-center">{{ points }}</div>
        <div class="col-md-3 col-9 text-start h5 mb-0 align-self-center">
            <span class="badge event text-wrap" :class="css_class">{{ name }}</span>
        </div>
        <div class="col text-muted fs-6 align-self-center">{{ description }}</div>
    </div>
</template>

<script>
export default {
    name: "ScoringEntry",
    props: ["name", "points", "css_class", "description"]
};
</script>

<style>
.info-badge {
    font-size: 0.5em;
    background: rgb(254, 254, 255);
    border: blue;
}
</style>
