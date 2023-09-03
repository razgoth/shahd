<template lang="">
    <div class="giver">
        <GiverSelectTable @giverDetails="giverDetails" />
    </div>
</template>

<script>
import GiverSelectTable from '../components/GiverSelectTable.vue';

export default {
    name: 'Giver',
    components: {
        GiverSelectTable,
    },
    methods: {
        giverDetails(name) {
            this.$router.push({ name: 'Details', params: { name } })
        }
    }
}
</script>

<style>
    .giver {
        margin: 100px;
        margin-top: auto;
    }
</style>