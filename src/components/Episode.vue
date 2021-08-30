<template>
    <div class="card pb-3">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
            <h3 class="card-title">{{name}}</h3>
            <p class="card-text"><small class="text-muted">Air date: {{date}}</small></p>
            <div v-for="event in events" :key="event.name" class="mb-3">
                
                <!-- Event -->
                <button class="btn btn-outline-dark" data-bs-toggle="collapse" :data-bs-target="'#event' + event.id">
                    {{event.name}} - <span class="badge" :class="event.css_class">{{event.type}}</span> - {{event.points}} pts
                </button>

                <!-- Survivors involved -->
                <div class="collapse" :id="'event' + event.id">
                    <ul v-for="survivor_id in event.survivor_ids" :key="survivor_id">
                        <li>{{survivor_names.filter(s => s.id == survivor_id)[0].name}}</li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Episode',
    props: ['name', 'date', 'events', 'survivor_names']
}
</script>

<style>
.wintribalimmunity {
    background: darkolivegreen;
}

.wintribalreward {
    background: darkorange;
    color:darkslategrey
}

.votedout {
    background: black;
}
</style>