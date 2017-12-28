<docs>
  标签按钮
</docs>
<template>
  <div class="tab-button" :class="{selected: selected}" :style="{left: left + 'px'}"
       @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
    <img :src="icon">
    <span class="tab-button-label"></span>
    <span ref="close" class="tab-button-close" @click="$emit('close')"></span>
  </div>
</template>
<script>
  export default {
    props: {
      selected: Boolean,
      icon: String,
      label: String,
    },
    data: function () {
      return {
        pixelRatio: window.devicePixelRatio || 1,
        isMouseDown: false,
        left: 0
      }
    },
    methods: {
      onMouseDown: function (ev) {
        if (ev.target != this.$refs.close) {
          this.isMouseDown = true;
          this.mouseDownAtScreenX = ev.screenX / this.pixelRatio - this.left;
          this.$emit('select')
        }
      },
      onMouseMove: function (ev) {
        if (this.isMouseDown) {
          this.left = ev.screenX / this.pixelRatio - this.mouseDownAtScreenX;
          this.$emit('move', this);
        }
      },
      onMouseUp: function () {
        this.$parent.reindexTabs(this);
        this.$parent.resetAllTabs();
      },
    },
    mounted: function () {
      this.$el.querySelector('span').innerText = this.label;
      this.$emit("childChanged");
    }
  }
</script>
<style lang="stylus" scoped>
  @require "_theme.styl"

  .tab-button
    display inline-block
    position relative
    white-space nowrap
    font-family "Microsoft YaHei", Arial, sans-serif
    font-size 13px
    box-sizing border-box
    height 26px
    padding-left 2px
    border solid red
    border-width 0 1px 0 1px
    margin-left: -1px
    cursor default
    transition background 0.3s
    &.selected
      z-index 1
      height 27px

    img
      margin 5px
      width 16px
      height 16px

  .tab-button-label
    line-height 26px

  .tab-button-close
    display inline-block
    width 16px
    height 16px
    margin 5px
    box-sizing border-box
    background-size contain
    transition background 0.3s

    background-image url(../src/icons/close-default.png)
    &:hover
      background-image url(../src/icons/close-hover.png)
    &:active
      background-image url(../src/icons/close-down.png)

  .theme-light .tab-button
    color L-text-default
    border-color L-border-default
    background-color L-tab-background-default
    &:hover
      background-color L-tab-background-hover
    &:active
      background-color L-tab-background-active
    &.selected
      background-color L-tab-background-selected-default
      &:hover
        background-color L-tab-background-selected-hover
      &:active
        background-color L-tab-background-selected-active

  .theme-dark .tab-button
    color D-text-default
    border-color D-border-default
    background-color D-tab-background-default
    &:hover
      background-color D-tab-background-hover
    &:active
      background-color D-tab-background-active
    &.selected
      background-color D-tab-background-selected-default
      &:hover
        background-color D-tab-background-selected-hover
      &:active
        background-color D-tab-background-selected-active
</style>
