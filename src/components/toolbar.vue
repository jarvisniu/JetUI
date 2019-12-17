<docs>
  水平工具栏
</docs>

<template lang="pug">
  .toolbar(:class="direction")
    slot
</template>

<script>
  export default {
    name: 'JtToolbar',
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
  // box-sizing border-box
  transition background 0.3s
  overflow auto
  &.horizontal
    display inline-flex
    height 30px
  &.vertical
    width: 32px

  // default-theme: light
  background-color L-background-default

.jt-theme-dark .toolbar
  background-color D-background-default

.image-button
  margin 2px 1px
</style>
