<template>
    <div class="mb-2">
        <label class="form-label">{{ label }}</label>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        required: { type: Boolean, default: false },
        errors: { type: Array, default: () => [] },
        label: { type: String, default: null },
        maxLength: { type: Number, default: null },
        currentLength: { type: Number, default: 0 }
    },

    methods: {
        hasErrors: function() {
            return this.errors && this.errors.length > 0;
        }
    }
}
</script>