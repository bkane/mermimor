<template>
    <div class="col-lg-4 col-md-6 col-sm-12 flex-grow-0 flex-shrink-0">
        <div class="card pb-3 mx-auto" style="width: 18rem;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <img v-if="photo_url" :src='photo_url' class='img-fluid' :class='{ votedout: voted_out }' />
                <h3 class="card-title text-center">{{name}}</h3>
                <p class="card-text"><small class="text-muted">{{points}} pts</small></p>
                
                <p v-if="team_names.filter(t => t.id == team_id)[0]">
                    Team: {{team_names.filter(t => t.id == team_id)[0]?.name}}
                </p>
                <p v-else>Team: <em>undrafted</em></p>

                <p v-if="voted_out">Voted out: {{episode_names.filter(e => e.id == voted_out)[0].name}}</p>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Survivor',
    props: ['name', 'points', 'team_id', 'team_names', 'episode_names', 'voted_out', 'photo_url']
}
</script>

<style>
.votedout {
    filter: grayscale(100%);
}
</style>