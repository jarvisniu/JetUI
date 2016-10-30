<style>
@import "components/tab-button.css";
</style>

<template>
<div class="tab-button" :class="{selected: model.selected}" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
    <img :src="model.icon">
    <span class="tab-button-label"></span>
    <span class="tab-button-close" @click="onCloseDown"></span>
</div>
</template>

<script>
export default {
    props: [
        'model'
    ],
    data: function() {
        return {
            pixelRatio: window.devicePixelRatio || 1,
            isMouseDown: false,
            lastLeft: 0,
        }
    },
    methods: {
        onMouseDown: function(ev) {
            // move
            this.isMouseDown = true;
            this.mouseDownAtScreenX = ev.screenX / this.pixelRatio - this.lastLeft;

            this.$dispatch("tabClick", this);
        },
        onMouseMove: function(ev) {
            if (this.isMouseDown) {
                this.lastLeft = ev.screenX / this.pixelRatio - this.mouseDownAtScreenX;
                this.$el.style.left = this.lastLeft + 'px';

                if (this.lastLeft < -50 && !this.$parent.isFirst(this)) {
                    this.$parent.swapWithLeft(this);
                    this.returnPosition();
                } else if (this.lastLeft > 50 && !this.$parent.isLast(this)) {
                    this.$parent.swapWithRight(this);
                    this.returnPosition();
                }
            }
        },
        onMouseUp: function(ev) {
            this.returnPosition();
        },
        onCloseDown: function(ev) {
            this.$parent.closeTab(this);
        },
        returnPosition: function() {
            this.isMouseDown = false;
            this.lastLeft = 0;
            this.$el.style.left = this.lastLeft + 'px';
        }
    },
    ready: function() {
        this.$el.querySelector('span').innerText = this.model.label;
        this.$dispatch("childChanged");
    }
}
</script>
