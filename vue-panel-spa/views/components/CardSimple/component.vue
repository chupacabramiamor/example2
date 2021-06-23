<template>
    <div class="card card-sm">
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-auto">
                    <span class="text-white avatar" :class="'bg-' + color">
                        <slot></slot>
                    </span>
                </div>
                <div class="col">
                    <div class="font-weight-medium">
                        {{ primary }}
                    </div>
                    <div class="text-muted" v-show="supporting">
                        {{ supporting }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            color: { type: String, default: 'blue' },
            primary: { type: String },
            supporting: { type: String, default: null },
        }
    }
</script>