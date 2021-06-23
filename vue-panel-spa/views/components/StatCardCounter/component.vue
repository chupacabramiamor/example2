<template>
    <div class="card">
        <uilocker name="card"></uilocker>
        <div class="card-body p-2 text-center">
            <div class="text-end text-green">
                <span v-if="diff > 0" class="text-green d-inline-flex align-items-center lh-1">{{ diff }} {{ diffUnitSign }}<svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="3 17 9 11 13 15 21 7"></polyline><polyline points="14 7 21 7 21 14"></polyline></svg></span>
                <span v-if="diff < 0" class="text-red d-inline-flex align-items-center lh-1">{{ diff }} {{ diffUnitSign }}<svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="3 7 9 13 13 9 21 17"></polyline><polyline points="21 10 21 17 14 17"></polyline></svg></span>
            </div>
            <div class="h1 m-0">{{ value }} <span v-if="valueSign">{{ valueSign }}</span></div>
            <div class="text-muted mb-3">{{ caption }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: { default: 0 },
            valueSign: { type: String, default: null },
            diff: { type: Number, default: 0 },
            diffUnitSign: { type: String, default: '%' },
            caption: { type: String, default: null },
        },
    }
</script>