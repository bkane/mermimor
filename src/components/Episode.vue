<template>
    <div class="card pb-3">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
            <h3 class="card-title">{{ name }}</h3>
            <p class="card-text">
                <small class="text-muted">Air date: {{ date }}</small>
            </p>
            <div v-for="event in events" :key="event.name" class="mb-3">
                <!-- Event -->
                <button class="btn btn-outline-dark" data-bs-toggle="collapse" :data-bs-target="'#event' + event.id">
                    <span class="badge event" :class="event.css_class">{{ event.name }}</span>
                    - {{ event.points }} pts
                </button>

                <!-- Survivors involved -->
                <div class="collapse" :id="'event' + event.id">
                    <ul v-for="survivor_id in event.survivor_ids" :key="survivor_id">
                        <li>
                            {{ survivor_names.filter(s => s.id == survivor_id)[0].name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Episode",
    props: ["name", "date", "events", "survivor_names"]
};
</script>

<style>
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
