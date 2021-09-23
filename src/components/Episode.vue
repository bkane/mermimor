<template>
    <div class="card mb-3 col-md col-lg-8 col-xl-6 mx-auto">
        <div class="card-body">
            <h3 class="card-title">{{ name }}</h3>
            <p class="card-text d-none d-md-block">
                <small class="text-muted">Air date: {{ date }}</small>
            </p>
            <h5>
                Eliminated: <span class="fs-6">{{ eliminations.join(", ") }}</span>
            </h5>
        </div>
        <div class="card-footer p-0">
            <h3
                class="btn btn-secondary mb-0 accordion-button"
                data-bs-toggle="collapse"
                :data-bs-target="'#eventsTable' + id"
                :class="{ collapsed: id != 0 }"
            >
                View All Events
            </h3>
            <div class="accordion-collapse collapse" :id="'eventsTable' + id" :class="{ show: id == 0 }">
                <div class="row striped-row bordered mx-0" v-for="survivor in survivors_with_filtered_events" :key="survivor.id">
                    <div class="col-4 align-self-center">{{ survivor.name }}</div>
                    <div class="col-6 align-self-center">
                        <div v-if="survivor.episode_events.length > 0">
                            <div class="row" v-for="event in survivor.episode_events" :key="event.id">
                                <div class="col">
                                    <span class="badge event text-wrap" :class="event.css_class">{{ event.name }}</span>
                                </div>
                                <div class="col-1 text-start align-self-center">{{ event.points }}</div>
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
    props: ["name", "date", "eliminations", "survivors_with_filtered_events", "id"]
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
    margin: 0.1em;
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
