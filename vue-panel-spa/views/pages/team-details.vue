<template>
    <teams>
        <team-details :uid="$route.params.id"></team-details>
    </teams>
</template>

<script>
    import Teams from './teams.vue';
    import TeamDetails from '../components/TeamDetails/component.vue';

    export default {
        components: { Teams, TeamDetails },

        mounted() {
            console.log(this.$refs, this.$route);
        }
    }
</script>