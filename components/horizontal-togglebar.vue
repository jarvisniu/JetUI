<style>
@import "components/horizontal-togglebar.css";
</style>

<template>
<div class="horizontal-togglebar">
    <icon-label v-for="item in items" :model="item" @click="childClick"></icon-label>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            items: [
                //          {
                //            icon: './vue/icons/polyline.png',
                //            tip: "Polyline",
                //            key: 'polyline',
                //            selected: false
                //          }
            ]
        }
    },
    methods: {
        childClick: function(child) {
            var buttons = this.$children;
            for (var i in buttons) {
                if (!buttons.hasOwnProperty(i)) continue;
                if (buttons[i] !== child) {
                    buttons[i].model.selected = false;
                } else {
                    buttons[i].model.selected = !buttons[i].model.selected;
                    this.$emit("changed", buttons[i].model.key);
                }
            }
        }
    }
}
</script>
