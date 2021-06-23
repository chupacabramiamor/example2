<template>
    <span>
        <input type="password" :value="value" @input="$emit('input', $event.target.value)" :placeholder="placeholder" class="form-control" :class="errorClass()">
        <span class="invalid-feedback" v-if="errors.length">{{ errors[0] }}</span>
    </span>
</template>

<script>
    export default {
        props: {
            value: { type: String, default: '' },
            errors: { type: Array, default: () => [] },
            placeholder: { type: String, default: null }
        },

        methods: {
            hasErrors: function() {
                return this.errors.length > 0;
            },

            errorClass: function() {
                return { 'is-invalid': this.hasErrors() };
            }
        }
    }
</script>