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
        <button
          class="btn btn-outline-dark"
          data-bs-toggle="collapse"
          :data-bs-target="'#event' + event.id"
        >
          <span class="badge" :class="event.css_class">{{ event.name }}</span>
          - {{ event.points }} pts
        </button>

        <!-- Survivors involved -->
        <div class="collapse" :id="'event' + event.id">
          <ul v-for="survivor_id in event.survivor_ids" :key="survivor_id">
            <li>
              {{ survivor_names.filter((s) => s.id == survivor_id)[0].name }}
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
  props: ["name", "date", "events", "survivor_names"],
};
</script>

<style>
.wintribalimmunity {
  background: darkolivegreen;
}

.wintribalreward {
  background: darkorange;
  color: darkslategrey;
}

.votedout {
  background: black;
}

.survive-round-pre {
  background: darkslategrey;
  color: whitesmoke;
}
.survive-round-post {
  background: darkslategrey;
  color: whitesmoke;
}
.participate-reward {
  background: darkslategrey;
  color: whitesmoke;
}
.win-team-immunity {
  background: darkslategrey;
  color: whitesmoke;
}
.win-team-immunity-second-place {
  background: darkslategrey;
  color: whitesmoke;
}
.win-individual-reward {
  background: darkslategrey;
  color: whitesmoke;
}
.win-individual-immunity {
  background: darkslategrey;
  color: whitesmoke;
}
.get-idol-clue {
  background: darkslategrey;
  color: whitesmoke;
}
.find-hidden-idol {
  background: darkslategrey;
  color: whitesmoke;
}
.use-hidden-idol {
  background: darkslategrey;
  color: whitesmoke;
}
.voted-off-unused-idol {
  background: darkslategrey;
  color: whitesmoke;
}
.create-super-idol {
  background: darkslategrey;
  color: whitesmoke;
}
.vote-cancellation {
  background: darkslategrey;
  color: whitesmoke;
}
.make-fake-idol {
  background: darkslategrey;
  color: whitesmoke;
}
.play-fake-idol {
  background: darkslategrey;
  color: whitesmoke;
}
.player-quit {
  background: darkslategrey;
  color: whitesmoke;
}
.medical-removal {
  background: darkslategrey;
  color: whitesmoke;
}
.jury-vote {
  background: darkslategrey;
  color: whitesmoke;
}
.sole-survivor {
  background: darkslategrey;
  color: whitesmoke;
}
</style>
