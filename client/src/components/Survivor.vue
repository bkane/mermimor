<template>
    <!-- <div class="col-lg-4 col-md-6 col-sm-12 flex-grow-0 flex-shrink-0"> -->
    <div class="col">
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

                <!-- <div class="accordion">
                    <div class="accordion-item">
                        <p class="accordion-header">
                            <button class="accordion-button collapsed p-1" type="button" data-bs-toggle="collapse" :data-bs-target="'#bio' + id">
                                View Bio
                            </button>
                        </p>
                        <div class="accordion-collapse collapse" :id="'bio' + id">
                            <div class="accordion-body">
                                <p>Age: {{age}}</p>
                                <p>{{bio}}</p>
                            </div>
                        </div>
                    </div>
                </div> -->

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Survivor',
    props: ['name', 'id', 'points', 'team_id', 'team_names', 'episode_names', 'voted_out', 'photo_url', 'age', 'bio']
}
</script>

<style>
.votedout {
    filter: grayscale(100%);
}
</style>