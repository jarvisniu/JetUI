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
    name: 'JtTabButton',
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

    background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC42/Ixj3wAAAOdJREFUWEfFzTEKBDEMQ9G5/1lyxywuBEH5TjwMeIvXCMl+5px/hWEnDDth2AnDThjKGGMGz6sqewyDxpUjpLrH0MfivQxtg/fCFgQai3cdbcS7YQuEDoh3hbriXcFQ6JB86a4wXNFBedPJYOjocIXfIRgSenDi+wyGGXpEfHeC4Qk9XHn/BsMTerry/g2GGXpIfHeCIaFHJ77PYOjoQYXfIRiu6LC86WQwFDooX7orDAMdEu8KdcW7giEdEO862oh3wxYEGgfvZWgbvBe2QCrjk+oeQ7mNbyp7DDth2AnDThh2wrDPfH7k0fp2j3ZOgwAAAABJRU5ErkJggg==")
    &:hover
      background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADcSURBVFhH7ZfRCcMwDETdLJnZMkLWywBpUbHAJJJ8p1KcDz8oKTSne7gKpa9j295lIEu9DmMKPFvgXNfvKwuSdwXaYEYCzZsCVoCRYPLUDiASjKhgCiz7Xt/diQqiz7yZ7gmwEplyIfwKUIlsuQD9FkQFEb1yAVpCZNAVNAM/BYwEdW+9QkBHSp4WJfAPKAFkGdmFhQWYwcy9kEDmMUQzXYFokCxctHSIRCjQK1d+kXAF0HIlK2EKsOVKRgJaQiUqUJB7WkwBawgzmMm7J9AGmHIFzc+/ZlNgsEApH/P6bVeFrckCAAAAAElFTkSuQmCC")
    &:active
      background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADfSURBVFhH7ZdRCoNADETXnstLeIZeppfwDB5RSTGwaJKdiZTtxz4oLdTJPLaR4vSZ57105HW+d2MI/LfAe9u+ryxI3hWogxkJNG8KWAFGgslTO4BIMKKCKbAuy/npTlQQfefNdE+AlciUC+FPgEpkywXovyAqiGiVC9ASIoOuoBn4LmAkmGthAQEZzJ4WJfALKAFkGdmFhQWYwcy1kEDmNkQzTYFokCxctHSIRCjQKleeSLgCaLmSlTAF2HIlIwEtoRIVKMg1NaaANYQZzOTdE6gDTLmC5sej2RDoLFDKATY0aj/EK3qoAAAAAElFTkSuQmCC")

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

  .jt-theme-dark .tab-button
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
