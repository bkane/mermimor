<template>
    <div class="row">
        <div class="col text-start h5">
            <span class="badge" :class="css_class">{{ name }}</span>
        </div>
        <div class="col-2 text-center">
            {{ points }}
        </div>
    </div>
</template>

<script>
export default {
    name: "ScoringEntry",
    props: ["name", "points", "css_class"],
};
</script>

<style></style>
