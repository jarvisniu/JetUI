<docs>
  侧边栏？
</docs>

<template>
  <div class="side-panel">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'JtSidePanel',
  }
</script>

<style lang="stylus" scoped>
  @require "_theme.styl"

  .side-panel
    box-sizing border-box
    display inline-block
    padding 4px
    height 100%
    transition background 0.3s

  .theme-light .side-panel
    background-image L-panel-default

  .theme-dark .side-panel
    background-image D-panel-default
</style>
