<template>
    <component :is="currentLayout">
        <router-view></router-view>
    </component>
</template>

<script>
    import Master from './layouts/master.vue';
    import Login from './layouts/login.vue';

    export default {
        components: { Master, Login },

        computed: {
            currentLayout() {
                return (this.$route.meta && this.$route.meta.layout) || 'Master';
            }
        }
    };
</script>