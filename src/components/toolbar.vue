<docs>
  水平工具栏
</docs>
<template>
  <div class="toolbar">
    <jt-image-button v-for="item, i in items" :icon="item.icon" :selected="selIndex == i"
                  @click="selIndex = i"></jt-image-button>
  </div>
</template>
<script>
  export default {
    props: {
      items: Array,
    },
    data () {
      return {
        selIndex: 0,
      }
    },
  }
</script>
<style lang="stylus" scoped>
  @require "_theme.styl"

  .toolbar
    display inline-flex
    padding 0 1px
    box-sizing border-box
    height 30px
    transition background 0.3s

    .image-button
      margin 2px 1px

  .theme-light .toolbar
    background-color L-background-default

  .theme-dark .toolbar
    background-color D-background-default
</style>
