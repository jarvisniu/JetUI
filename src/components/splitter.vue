<docs>
  水平分割器
</docs>
<template>
  <div class="splitter" @mousedown="onMouseDown" @mousemove="onMouseMove"
       @mouseup="onMouseUp">
    <div class="panel" :style="aStyle">
      <slot name="a"></slot>
    </div>
    <div class="splitter-handle">
      <div class="splitter-line"></div>
    </div>
    <div class="panel" :style="bStyle">
      <slot name="b"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        pixelRatio: window.devicePixelRatio || 1,
        downOnSplitter: false,
        domHandle: null,
        domLeftPanel: null,
        domRightPanel: null
      }
    },
    props: ['theme'],
    computed: {
      aStyle () {
        return {
          flex: '1',
          minWidth: '100px',
          height: '100%',
        }
      },
      bStyle() {
        return {
          flex: '1',
          minWidth: '100px',
          height: '100%',
        }
      },
    },
    methods: {
      onMouseDown: function (ev) {
        if (this.isDomOn(ev.target, this.domHandle)) {
          this.downOnSplitter = true;
        }
      },
      onMouseMove: function (ev) {
        if (this.downOnSplitter) this.moveSplitter(ev.movementX / this.pixelRatio);
      },
      onMouseUp: function (ev) {
        this.downOnSplitter = false;
      },
      isDomOn: function (child, parent) {
        if (child == parent) return true;

        var p = child.parentNode;
        while (!(p instanceof HTMLBodyElement)) {
          if (p == parent) return true;
          p = p.parentNode;
        }
        return false;
      },
      getPxStyle: function (dom, style) {
        return parseFloat(getComputedStyle(dom)[style]);
      },
      moveSplitter: function (delta) {
        var widthLeft = this.getPxStyle(this.domLeftPanel, "width");
        var widthRight = this.getPxStyle(this.domRightPanel, "width");

        widthLeft += delta;
        widthRight -= delta;

        this.domLeftPanel.style.flexGrow = widthLeft / (widthLeft + widthRight);
        this.domRightPanel.style.flexGrow = widthRight / (widthLeft + widthRight);
      }
    },
    mounted: function () {
      this.domHandle = this.$el.querySelector(".splitter-handle");
      this.domLeftPanel = this.$el.querySelectorAll(".panel")[0];
      this.domRightPanel = this.$el.querySelectorAll(".panel")[1];
    }
  }
</script>
<style lang="stylus" scoped>
  @require "_theme.styl"

  .splitter
    display flex
    box-sizing border-box
    height 100%
    user-select-none()

  .splitter > .panel
    height 100%
    user-select-none()

  .splitter > .panel > *
    height 100%

  .splitter-handle
    position relative
    left 0
    width 9px
    height 100%
    margin 0 -4px
    cursor w-resize
    z-index 10

  .splitter-line
    height 100%
    width 1px
    margin-left 4px
    background-color silver
</style>
