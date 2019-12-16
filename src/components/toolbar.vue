<docs>
  水平工具栏
</docs>

<template>
  <div class="toolbar" :class="direction">
    <jt-image-button
      v-for="(item, i) in items"
      :key="i"
      :icon="item.icon"
      :tip="item.tip"
      :selected="selIndex == i"
      @click="selIndex = i"
    ></jt-image-button>
  </div>
</template>

<script>
  export default {
    props: {
      items: Array,
      vertical: Boolean,
    },
    data() {
      return {
        selIndex: 0,
      }
    },
    computed: {
      direction() {
        return this.vertical ? 'vertical' : 'horizontal'
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @require "_theme.styl"

  .toolbar
    padding 0 1px
    box-sizing border-box
    transition background 0.3s
    overflow auto
    &.horizontal
      display inline-flex
      height 30px
    &.vertical
      width: 32px

    .image-button
      margin 2px 1px

  .theme-light .toolbar
    background-color L-background-default

  .theme-dark .toolbar
    background-color D-background-default
</style>
