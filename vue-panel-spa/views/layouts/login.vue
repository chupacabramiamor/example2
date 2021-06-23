<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        beforeCreate() {
            let body = document.querySelector('body');

            body.classList.add('antialiased', 'border-top-wide', 'border-primary', 'd-flex', 'flex-column', 'binded-bg');
        }
    }
</script>

<style>
    .binded-bg {
        background: no-repeat center/cover url('/assets/images/panel.jpg') !important;
    }
</style>