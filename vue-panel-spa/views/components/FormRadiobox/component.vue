<template>
    <label class="form-check form-check-inline" :class="errorClass()">
        <input class="form-check-input" type="radio" :value="value" @input="$emit('input', $event.target.value)" :id="elementId">
        <span class="form-check-label" :for="elementId"><slot></slot></span>
    </label>
</template>

<script>
export default {
    props: {
        value: { default: false },
        errors: { type: Array, default: () => [] },
    },

    methods: {
        hasErrors: function() {
            return this.errors.length > 0;
        },

        errorClass: function() {
            return { 'has-error': this.hasErrors() };
        }
    },

    computed: {
        elementId: function() {
            return 'checkbox-' + Math.random().toString(16).substr(2, 9);
        }
    }
};
</script>