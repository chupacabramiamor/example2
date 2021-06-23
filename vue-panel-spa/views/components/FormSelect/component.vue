<template>
    <select @change="$emit('input', $event.target.value)" class="form-select">
        <option value="" selected="selected">No filter</option>
        <option v-for="(item, key) in mapping" :value="key">{{ item }}</option>
    </select>
</template>

<script>
export default {
    props: {
        value: { default: null },
        mapping: { type: Object, default: () => {} }
    },

    computed: {
        elementId: function() {
            return 'checkbox-' + Math.random().toString(16).substr(2, 9);
        }
    }
};
</script>

<style scoped>

span > select {
    width: 100%;
    height: 50px;
    color: #787878;
    background: transparent;
    border: 0;
    appearance: none;
    position: relative;
    z-index: 2;
    font-size: 16px;
    margin: 0;
    padding: 12px;
    box-sizing: border-box;
}

span > div {
    height: 50px;
    border: 1px solid #c4c4c4;
    border-radius: 0;
    box-shadow: none;
    color: #787878;
    transition: all .5s;
    font-size: 16px;
    margin: 0;
    padding: 12px;
    background: #fff!important;
    border-color: #919191!important;
    display: block;
    position: absolute;
    line-height: 16px;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
}

span > div:after {
    content: "\f078";
    font-family: FontAwesome;
    font-size: 20px;
    position: absolute;
    right: 10px;
    bottom: 0;
    height: 50px;
    line-height: 50px;
    color: #787878;
    transition: all .5s;
    box-sizing: border-box;
}
</style>