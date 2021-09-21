<template>
    <div class="card pb-3">
        <div class="card-body">
            <h3 class="card-title">{{ name }}</h3>
            <p class="card-text">
                <small class="text-muted">Air date: {{ date }}</small>
            </p>
            <h4 v-for="elimination in eliminations" :key="elimination">Eliminated: {{ elimination }}</h4>

            <div class="col-md col-lg-8 col-xl-6">
                <div class="row striped-row bordered" v-for="survivor in survivors_with_filtered_events" :key="survivor.id">
                    <div class="col-4">{{ survivor.name }}</div>
                    <div class="col-6">
                        <div v-if="survivor.episode_events.length > 0">
                            <div class="row" v-for="event in survivor.episode_events" :key="event.id">
                                <div class="col">
                                    <span class="badge event text-wrap" :class="event.css_class">{{ event.name }}</span>
                                </div>
                                <div class="col-1 text-start">{{ event.points }}</div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="row">
                                <div class="col">(no events)</div>
                                <div class="col-1">0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Episode",
    props: ["name", "date", "eliminations", "survivors_with_filtered_events"]
};
</script>

<style>
.bordered {
    border-color: rgb(223, 224, 225);
    border-width: 1px;
    border-style: solid;
}
.votedout {
    background: black;
}

.event {
    background: darkslategrey;
    color: whitesmoke;
}

.win-reward {
    background: rgb(252, 255, 86);
    color: rgb(105, 105, 105);
}
.participate-reward {
    background: rgb(242, 243, 165);
    color: rgb(133, 133, 133);
}

.win-tribal-immunity {
    background: rgb(36, 114, 53);
    color: whitesmoke;
}
.win-team-challenge-first-place {
    background: rgb(64, 197, 93);
    color: whitesmoke;
}
.win-individual-immunity {
    background: rgb(36, 114, 53);
    color: whitesmoke;
}

.find-hidden-idol {
    background: rgb(57, 95, 126);
    color: whitesmoke;
}
.play-hidden-idol {
    background: rgb(54, 119, 156);
    color: whitesmoke;
}
.vote-cancellation {
    background: rgb(97, 162, 216);
    color: whitesmoke;
}
.voted-off-unused-idol {
    background: rgb(185, 69, 69);
    color: whitesmoke;
}
.survive-round-pre {
    background: darkslategrey;
    color: whitesmoke;
}
.survive-round-post {
    background: rgb(84, 141, 141);
    color: whitesmoke;
}
.first-eliminated {
    background: rgb(218, 4, 207);
    color: rgb(252, 252, 252);
}
.final-tribal {
    background: rgb(118, 92, 160);
    color: whitesmoke;
}
.jury-vote {
    background: rgb(118, 92, 160);
    color: whitesmoke;
}
.jury-vote-for-winner {
    background: rgb(118, 92, 160);
    color: whitesmoke;
}
</style>
