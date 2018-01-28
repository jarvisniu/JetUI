<docs>
  垂直工具栏
</docs>
<template>
  <div class="vertical-toolbar">
    <jt-image-button v-for="item, i in items" :icon="item.icon" :tip="item.tip"
                     :selected="selIndex == i" @click="selIndex = i"></jt-image-button>
  </div>
</template>
<script>
  export default {
    props: {
      items: Array,
    },
    data() {
      return {
        selIndex: 0,
      }
    },
    methods: {}
  }
</script>
<style lang="stylus" scoped>
  @require "_theme.styl"

  .vertical-toolbar
    box-sizing border-box
    width 32px
    border-radius 4px
    transition background 0.3s

  .theme-light .vertical-toolbar
    background-color L-background-default

  .theme-dark .vertical-toolbar
    background-color D-background-default
</style>