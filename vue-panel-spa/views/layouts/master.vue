<template>
    <div class="page">
        <header class="navbar navbar-expand-md navbar-light d-print-none">
            <div class="container-xl">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                    <a href="http://tscouting.kremen/panel">
                        <img src="/assets/images/logo_sm.png" height="32" class="navbar-brand-image">
                    </a>
                </h1>
                <div class="navbar-nav flex-row order-md-last">
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                            <span class="avatar avatar-sm" style="background-image: url('/assets/images/user.png')"></span>
                            <div class="d-none d-xl-block ps-2">
                                <div>{{ authUser.fullname }}</div>
                                <div class="mt-1 small text-muted">Administrator</div>
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <a href="/" class="dropdown-item" target="_blank">Go to Website</a>
                            <a href="/auth/logout" class="dropdown-item">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="navbar-expand-md">
            <div class="collapse navbar-collapse" id="navbar-menu">
                <div class="navbar navbar-light">
                    <div class="container-xl">
                        <navmenu></navmenu>
                    </div>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="container-xl">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import Navmenu from '../components/Navmenu/component.vue';

    export default {
        components: {
            Navmenu
        },

        created() {
            // this.$store.dispatch('syncAuthUser');
        },

        computed: {
            authUser() {
                return this.$store.state.user.authUser;
            },
        }
    }
</script>
