<docs>
  图像按钮
</docs>

<template>
  <div class="image-button" :class="{selected: selected}" :title="tip" @click="onClick">
    <img :src="icon">
  </div>
</template>

<script>
  export default {
    name: 'JtImageButton',
    props: {
      selected: Boolean,
      tip: String,
      icon: String,
    },
    methods: {
      onClick: function () {
        this.$emit("click", this);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @require "_theme.styl"

  .image-button
    display flex
    border solid 1px red
    border-radius 2px
    box-sizing border-box
    width 26px
    height 26px
    margin 2px
    transition background 0.3s
    // default-theme: light
    border-color L-background-default // hide border
    background-color L-background-default
    &:hover
      border-color L-border-default
      background-color L-background-hover
    &:active
      background-color L-background-active
      transition: background-color 0.02s, border-color 0.02s;
    &.selected
      border-color L-border-default
      background-color L-background-selected-default
      &:hover
        background-color L-background-selected-hover
      &:active
        background-color L-background-selected-active

    img
      margin 2px
      width 20px
      height 20px

  .jt-theme-dark .image-button
    border-color D-background-default // hide border
    background-color D-background-default
    &:hover
      border-color D-border-default
      background-color D-background-hover
    &:active
      border-color D-border-default
      background-color D-background-active
    &.selected
      border-color D-border-selected-default
      background-color D-background-selected-default
      &:hover
        background-color D-background-selected-hover
      &:active
        background-color D-background-selected-active
</style>
