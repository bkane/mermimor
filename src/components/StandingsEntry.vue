<template>
    <thead class="table-dark">
        <tr>
            <th class="h4 text-start">#{{ rank }}</th>
            <th class="h4" colspan="2">{{ name }}</th>
            <th class="h4 text-end">{{ score }} pts</th>
        </tr>
    </thead>
    <tbody class="table-light">
        <tr v-for="pick in picks" :key="pick.id">
            <td></td>
            <td class="py-0 ps-4" :class="{ 'text-decoration-line-through': pick.voted_out }">
                {{ pick.name }}
            </td>
            <td class="p-0 pe-5 text-start">{{ pick.points }}</td>
            <td></td>
        </tr>
        <tr>
            <td colspan="4" class="spacer"></td>
        </tr>
    </tbody>
</template>

<script>
export default {
    name: "StandingsEntry",
    props: ["id", "rank", "name", "score", "picks"]
};
</script>

<style>
.spacer {
    border: none;
}
</style>
