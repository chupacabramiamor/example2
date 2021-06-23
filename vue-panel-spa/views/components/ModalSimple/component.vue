<template>
<div class="modal modal-blur fade" :id="elementId" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" :class="{'modal-xl': this.type == 'lg'}" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ title }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <slot></slot>
            </div>
            <div class="modal-footer" style="display: block">
                <slot name="footer">
                    <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                </slot>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        props: {
            type: { type: String, default: 'simple' },
            title: { type: String, default: 'Untitled' }
        },

        mounted: function() {
            let el = document.getElementById(this.elementId);
            this.$options.$m = new bootstrap.Modal(el);

            el.addEventListener('hidden.bs.modal', () => {
                this.$emit('hidden');
            });
        },

        methods: {
            show: function() {
                this.$options.$m.show();
            }
        },

        computed: {
            elementId: function() {
                return 'modal-simple-' + Math.random().toString(16).substr(2, 9);
            }
        }
    }
</script>