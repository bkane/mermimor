<template>
    <div class="row py-2 striped-row">
        <div class="col-6 col-sm-3 text-start h5 mb-0 align-self-center">
            <span class="badge event text-wrap">{{ name }}</span>
        </div>
        <div class="col-6 col-sm text-muted fs-6 align-self-center">{{ survivors_names.filter(s => s.id == survivor_id)[0].name }}</div>
        <div class="col-6 col-sm text-start h5">
            <span class="badge default-advantage" :class="css_class"> {{ type }}</span>
        </div>
        <div class="col-12 col-sm text-muted fs-6 align-self-center">{{ notes }}</div>
    </div>
</template>

<script>
export default {
    name: "Advantage",
    props: [
        "id",
        "key",
        "name",
        "type",
        "survivor_id",
        "inactive",
        "event_earned_id",
        "event_lost_id",
        "notes",
        "survivors_names",
        "css_class"
    ]
};
</script>

<style>
.default-advantage {
    background: rgb(69, 71, 73);
    color: whitesmoke;
}

.immunity-idol {
    background: rgb(57, 95, 126);
    color: whitesmoke;
}
.steal-a-vote {
    background: rgb(226, 76, 66);
    color: whitesmoke;
}
.knowledge-is-power {
    background: rgb(240, 209, 73);
    color: rgb(53, 52, 52);
}
.extra-vote {
    background: rgb(137, 68, 248);
    color: whitesmoke;
}
</style>
