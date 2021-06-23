<template>
    <transition name="lock-appearing"><div class="spinner" :class="{'spinner-light': bg == 'light', 'spinner-dark': (bg == 'dark' || !bg) }" v-if="isAppear"></div></transition>
</template>

<style scoped>
@-webkit-keyframes loader {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@keyframes loader {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

.spinner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index:9999;
}

.spinner-light {
    background-color: rgba(255,255,255,0.75);
}

.spinner-light:before {
    border: 4px solid rgb(0,42,70);
}

.spinner-dark {
    background-color: rgba(0,42,70,0.75);
}

.spinner-dark:before {
    border: 10px solid #ffffff;
}

.spinner:before {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 32px;
    height: 32px;
    margin: auto;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: loader 1200ms infinite linear;
    animation: loader 1200ms infinite linear
}

.lock-appearing-enter-active, .lock-appearing-leave-active {
    transition: opacity .3s ease;
}

.lock-appearing-enter, .lock-appearing-leave-to {
    opacity: 0;
}
</style>

<script>
export default {
    props: {
        name: { type: String, default: 'here' },
        bg: { type: String, default: 'light' }
    },

    computed: {
        isAppear: function() {
            return this.$parent.lockElements[this.name] || false;
        }
    }
};
</script>