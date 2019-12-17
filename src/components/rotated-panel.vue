<docs>
  旋转面板？
</docs>

<template>
  <div class="rotated-panel">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'JtRotatedPanel',
    data: function () {
      return {
        childDom: null
      }
    },
    methods: {
      setTranslate: function (height) {
        this.$el.style.width = getComputedStyle(this.childDom).height;
        this.childDom.style.transform = "translateY(" + height + ") rotateZ(-90deg)";
        this.childDom.style.width = height;
      }
    },
    mounted: function () {
      this.childDom = this.$el.children[0];
      var vm = this;
      var onResize = function (ev) {
        var h = getComputedStyle(vm.$el).height;
        vm.setTranslate(h);
      };
      window.addEventListener('resize', onResize);
      setInterval(onResize, 1);
    }
  }
</script>

<style lang="stylus" scoped>
  @require "_theme.styl"

  .rotated-panel
    display inline-block
    height 100%
    transition background 0.3s

  .rotated-panel > *
    transform-origin top left

  .theme-light .rotated-panel
    background-color L-background-default

  .jt-theme-dark .rotated-panel
    background-image D-background-default
</style>
