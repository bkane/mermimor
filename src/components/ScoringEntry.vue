<template>
    <div class="row mb-2">
        <div class="col-2 text-center">{{ points }}</div>
        <div class="col-3 text-start h5 ">
            <span class="badge event text-wrap" :class="css_class">{{ name }}</span>
        </div>
        <div class="col text-muted fs-6">{{ description }}</div>
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
