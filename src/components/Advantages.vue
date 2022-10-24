<template>
    <div>
        <h1 class="text-center pb-4">Advantages</h1>
        <div v-if="loading" class="text-center">
            <img src="@/assets/brad.png" class="loader mx-auto" />
        </div>
        <div
            v-if="
                !loading &&
                    (advantages_active == undefined || advantages_active.length == 0) &&
                    (advantages_inactive == undefined || advantages_inactive.length == 0)
            "
        >
            <p class="text-center">Nothing yet.</p>
        </div>
        <div v-else>
            <div>
                <div class="h1">Active</div>
                <div class="row">
                    <div class="col-3 text-muted text-center d-none d-md-block">Name</div>
                    <div class="col text-muted text-start d-none d-md-block">Survivor</div>
                    <div class="col text-muted text-start d-none d-md-block">Type</div>
                    <div class="col text-muted text-start d-none d-md-block">Notes</div>
                </div>
                <Advantage
                    v-for="advantage in advantages_active"
                    :key="advantage.id"
                    :id="advantage.id"
                    :name="advantage.name"
                    :type="advantage.type"
                    :survivor_id="advantage.survivor_id"
                    :inactive="advantage.inactive"
                    :event_earned_id="advantage.event_earned_id"
                    :event_lost_id="advantage.event_lost_id"
                    :notes="advantage.notes"
                    :survivors_names="survivors_names"
                    :css_class="advantage.css_class"
                />
            </div>
            <div class="mt-5">
                <div class="h1">Inactive</div>
                <div class="row">
                    <div class="col-3 text-muted text-center d-none d-md-block">Name</div>
                    <div class="col text-muted text-start d-none d-md-block">Survivor</div>
                    <div class="col text-muted text-start d-none d-md-block">Type</div>
                    <div class="col text-muted text-start d-none d-md-block">Notes</div>
                </div>
                <Advantage
                    v-for="advantage in advantages_inactive"
                    :key="advantage.id"
                    :id="advantage.id"
                    :name="advantage.name"
                    :type="advantage.type"
                    :survivor_id="advantage.survivor_id"
                    :inactive="advantage.inactive"
                    :event_earned_id="advantage.event_earned_id"
                    :event_lost_id="advantage.event_lost_id"
                    :notes="advantage.notes"
                    :survivors_names="survivors_names"
                    :css_class="advantage.css_class"
                />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Advantage from "./Advantage.vue";

export default {
    name: "Advantages",
    components: {
        Advantage
    },
    data() {
        return {
            advantages_active: [],
            advantages_inactive: [],
            survivors_names: [],
            loading: true
        };
    },
    methods: {
        async fetchData() {
            console.log("base url: " + axios.defaults.baseURL);
            let season = this.$route.params.season || this.defaultSeason;

            const survivorsRequest = await axios.get(`api/${season}/survivors`);
            let survivors = survivorsRequest.data;
            if (survivors != undefined && survivors.length > 0) {
                this.survivors_names = survivors.map(s => {
                    return { id: s.id, name: s.name };
                });
            }

            const advantagesRequest = await axios.get(`api/${season}/advantages`);
            const advantages = advantagesRequest.data;

            if (advantages != undefined && advantages.length > 0) {
                console.log("advantages: ");

                advantages.forEach(function(adv) {
                    adv.css_class = adv.type.replaceAll(" ", "-").toLowerCase();
                });

                console.log(advantages);

                this.advantages_active = advantages.filter(a => !a.inactive);
                this.advantages_inactive = advantages.filter(a => a.inactive);

                console.log(this.advantages_active);
            }

            this.loading = false;
        }
    },
    async created() {
        await this.fetchData();
    }
};
</script>

<style></style>
