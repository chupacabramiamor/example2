<template>
    <div class="flex-fill d-flex flex-column justify-content-center py-4">
        <div class="container-tight py-6">
            <div class="text-center mb-4">
                <a href="/"><img src="/assets/images/logo_sm.png" height="80" alt=""></a>
            </div>

            <login-form url="/auth/login"></login-form>
        </div>
    </div>
</template>

<script>
    import LoginForm from '../components/LoginForm/component.vue';

    export default {
        components: { LoginForm },
    }
</script>