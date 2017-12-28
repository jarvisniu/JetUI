<docs>
  面包屑
</docs>
<template>
  <div class="breadcrumb">
    <div class="breadcrumb-container">
      <template v-for="item in items">
        <jt-icon-label :icon="item.icon" :label="item.label"></jt-icon-label>
        <div class="separator"></div>
      </template>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      items: Array,
    }
  }
</script>
<style lang="stylus" scoped>
  @require "_theme.styl"

  .breadcrumb
    box-sizing content-box
    height 28px
    transition background 0.3s
    user-select-none()

  .breadcrumb-container
    display inline-flex
    height 24px
    margin 2px
    transition background 0.3s

  .breadcrumb-container .separator
    width 8px

  .theme-light
    .breadcrumb
      background-color L-background-default
    .breadcrumb-container
      background-color L-background-default
      .separator
        background-image url('../src/images/breadcrumb-separator-light.png')

  .theme-dark
    .breadcrumb
      background-color D-background-default
    .breadcrumb-container
      background-color D-background-default
      .separator
        background-image url('../src/images/breadcrumb-separator-dark.png')
</style>
