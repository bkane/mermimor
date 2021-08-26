<template>
    <div class="card pb-3">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
            <h3 class="card-title">{{name}}</h3>
            <p class="card-text"><small class="text-muted">{{date}}</small></p>
            <ul v-for="event in events"
            :key="event.name">
            
                <li>{{event.name}} - {{event.type}} - {{event.points}}
                    <ul v-for="survivor_id in event.survivor_ids" :key="survivor_id">
                        <li>{{survivor_names.filter(s => s.id == survivor_id)[0].name}}</li>
                    </ul>

                </li>

            </ul>
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

</style>