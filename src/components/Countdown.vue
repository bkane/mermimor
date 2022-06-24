<template>
    <div class="container">
        <div class="alert alert-primary col-md-8 col-lg-6 mx-auto text-center">
            <p v-if="timeRemaining > 0" class="mb-0 h3">{{ days }} day(s), {{ hours }} hour(s), {{ minutes }} minute(s)</p>
            <p class="mb-0 small">{{ targetName }} begins {{ targetDate.toLocaleString() }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Countdown",
    props: ["targetDate", "targetName"],
    data() {
        return {
            timeRemaining: 0,
            days: 0,
            hours: 0,
            minutes: 0
        };
    },
    mounted: function() {
        console.log(this.targetDate);
        this.timeRemaining = this.targetDate - Date.now();

        const tick = () => {
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            this.timeRemaining = this.timeRemaining - 1000;

            this.days = Math.trunc(this.timeRemaining / day);
            this.hours = Math.trunc((this.timeRemaining % day) / hour);
            this.minutes = Math.trunc((this.timeRemaining % hour) / minute);
        };

        tick();

        setInterval(tick, 1000);
    }
};
</script>

<style></style>
