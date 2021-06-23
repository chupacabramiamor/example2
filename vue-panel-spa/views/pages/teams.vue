<template>
<div>
    <div class="row">
        <div class="col-md-12 mb-3">
            <team-filter></team-filter>
        </div>
    </div>

    <div class="row row-cards">
        <div class="col-md-12">
            <team-list url="/rest/panel/teams"></team-list>
        </div>
    </div>

    <slot></slot>
</div>
</template>

<script>
    import TeamList from '../components/TeamList/component.vue';
    import TeamFilter from '../components/TeamFilter/component.vue';

    export default {
        components: { TeamList, TeamFilter }
    }
</script>
