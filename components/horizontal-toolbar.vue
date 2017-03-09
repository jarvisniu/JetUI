<style>
@import "components/horizontal-toolbar.css";
</style>

<template>
<div class="horizontal-toolbar">
    <image-button v-for="item in items" :model="item" @click="childClick"></image-button>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            items: []
        }
    },
    methods: {
        childClick: function(child) {
            var buttons = this.$children;
            for (var i in buttons) {
                if (!buttons.hasOwnProperty(i)) continue;
                if (buttons[i] !== child) {
                    buttons[i].model.selected = false
                } else {
                    buttons[i].model.selected = true;
                    this.$emit("toolChanged", buttons[i].model.key);
                }
            }
        }
    }
}
</script>
