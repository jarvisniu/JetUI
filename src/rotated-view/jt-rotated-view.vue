<docs>
  Rotated View
</docs>

<template>
  <div class="jt-rotated-view">
    <div ref="wrapper" class="rotate-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JtRotatedView',
    props: {
      right: { type: Boolean, default: false },
    },
    mounted () {
      window.addEventListener('resize', this.onResize)
      this.onResize()
    },
    destroyed() {
      window.removeEventListener('resize', this.onResize)
    },
    methods: {
      onResize() {
        let width = this.$el.clientWidth
        let height = this.$el.clientHeight
        this.$refs.wrapper.style.transform = !this.right ?
          `translateY(${ height }px) rotate(-90deg)` :
          `rotate(90deg) translateY(${ -width }px)`
        this.$refs.wrapper.style.width = height + 'px'
      },
    },
  }
</script>

<style lang="scss" scoped>
  .jt-rotated-view {
    display: inline-block;
    height: 100%;
  }
  .rotate-wrapper {
    transform-origin: top left;
  }
</style>
