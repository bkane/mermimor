<template>
    <!-- <div class="col-lg-4 col-md-6 col-sm-12 flex-grow-0 flex-shrink-0"> -->
    <div class="col">
        <div class="card mb-3 mx-auto" style="width: 18rem">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <img v-if="photo_url" :src="photo_url" class="img-fluid" :class="{ eliminated: eliminated }" />
                <h3 class="card-title text-center">{{ name }}</h3>
                <h5 class="text-center text-muted">{{ bio }} - {{ age }}</h5>

                <!-- Tribes -->
                <div class="text-center">
                    <span v-for="tribe in tribes" :key="tribe.name" :class="tribe" class="badge m-1"> {{ tribe }}</span>
                    <span>- {{ points }} pts</span>
                </div>

                <!-- Draft team -->
                <div>
                    <p class="text-center" v-if="team_names.filter(t => t.id == team_id)[0]">
                        {{ team_names.filter(t => t.id == team_id)[0]?.name }}
                    </p>
                    <p class="text-center text-muted" v-else><em>Undrafted</em></p>
                </div>
            </div>

            <!-- Eliminated episode -->
            <div v-if="eliminated" class="card-footer text-center text-muted">
                Eliminated:
                {{ episode_names.filter(e => e.id == eliminated)[0].name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Survivor",
    props: ["name", "id", "points", "team_id", "team_names", "episode_names", "eliminated", "photo_url", "age", "bio", "tribes"]
};
</script>

<style>
.eliminated {
    filter: grayscale(100%);
}

/* Season 43 */
.Coco {
    background: rgb(66, 164, 221);
    color: rgb(255, 255, 255);
}

.Vesi {
    background: rgb(228, 74, 28);
}

.Baka {
    background: rgb(221, 236, 87);
    color: rgb(78, 78, 78);
}

/* Season 42 */
.Ika {
    background: rgb(77, 90, 212);
    color: rgb(255, 255, 255);
}

.Taku {
    background: rgb(209, 153, 48);
    color: rgb(255, 255, 255);
}

.Vati {
    background: rgb(80, 204, 117);
    color: rgb(255, 255, 255);
}

/* Season 41 */
.Ua {
    background: rgb(114, 196, 125);
    color: rgb(255, 255, 255);
}

.Luvu {
    background: rgb(151, 188, 243);
}

.Yase {
    background: rgb(248, 248, 118);
    color: rgb(78, 78, 78);
}

/* Season 20: Heroes vs Villains */
.Heroes {
    background: rgb(152, 152, 216);
}

.Villains {
    background: rgb(168, 31, 31);
    color: whitesmoke;
}

.Yin {
    background: rgb(39, 39, 36);
    color: rgb(240, 240, 240);
}
</style>
