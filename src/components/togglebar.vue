<docs>
  水平开关栏
</docs>
<template>
  <div class="togglebar">
    <jt-icon-label v-for="item, i in items" :icon="item.icon" :label="item.label" :key="item.key"
                :selected="selIndex == i" @click.native="selIndex = i"></jt-icon-label>
  </div>
</template>
<script>
  export default {
    props: {
      items: Array,
      // {
      //   icon: './vue/icons/polyline.png',
      //   tip: "Polyline",
      //   key: 'polyline',
      //   selected: false
      // }
    },
    data () {
      return {
        selIndex: 0,
      }
    },
    watch: {
      selIndex () {
        console.log(this.items[this.selIndex].key)
        this.$emit('changed', this.items[this.selIndex].key)
      },
    },
  }
</script>
<style lang="stylus" scoped>
  @require "_theme.styl"

  .togglebar
    display inline-flex
    box-sizing border-box
    height 26px
    user-select-none()

  .theme-light .togglebar
    background-color L-background-default

  .theme-dark .togglebar
    background-image D-background-default
</style>
