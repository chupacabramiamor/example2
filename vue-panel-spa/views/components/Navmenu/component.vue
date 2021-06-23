<template>
    <ul class="navbar-nav">
        <li class="nav-item" :class="{ active: active == item.name }" v-for="item in items">
            <router-link class="nav-link" :to="item.href">
                <span class="align-middle me-2 fa" :class="item.icon"></span>
                <span class="nav-link-title">{{ item.label }}</span>
            </router-link>
        </li>
    </ul>
</template>
<script>
    export default {
        template: '#navmenu-tpl',

       data() {
            return {
                items: [
                    { name: 'home', label: 'Home', icon: 'fa-home', href: '/' },
                    { name: 'applicants', label: 'Applicants', icon: 'fa-users', href: '/applicants' },
                    { name: 'teams', label: 'Teams', icon: 'fa-bullseye', href: '/teams' },
                ],
            }
        },

        computed: {
            active() {
                return this.$route.meta ? this.$route.meta.nav : 'home';
            }
        }
    }
</script>