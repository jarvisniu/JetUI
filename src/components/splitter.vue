<docs>
  水平分割器
</docs>
<template>
  <div class="splitter" :class="direction"
       @mousedown="onMouseDown" @mousemove="onMouseMove"
       @mouseup="onMouseUp">
    <div class="panel" :class="direction" :style="panelStyle">
      <slot name="a"></slot>
    </div>
    <div class="splitter-handle" :class="direction">
      <div class="splitter-line" :class="direction"></div>
    </div>
    <div class="panel" :class="direction" :style="panelStyle">
      <slot name="b"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        downOnSplitter: false,
        domHandle: null,
        domLeftPanel: null,
        domRightPanel: null
      }
    },
    props: {
      theme: String,
      vertical: Boolean,
    },
    computed: {
      direction() {
        return this.vertical ? 'vertical' : 'horizontal'
      },
      panelStyle() {
        let style = {
          flex: '1',
        }
        if (this.direction === 'horizontal') {
          style.minWidth = '100px'
          style.height = '100%'
        } else {
          style.minHeight = '100px'
          style.width = '100%'
        }
        return style
      },
    },
    methods: {
      onMouseDown: function (ev) {
        if (this.isDomOn(ev.target, this.domHandle)) {
          this.downOnSplitter = true;
        }
      },
      onMouseMove: function (ev) {
        if (this.downOnSplitter) {
          this.moveSplitter(this.direction === 'horizontal' ? ev.movementX : ev.movementY);
        }
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
        return parseFloat(window.getComputedStyle(dom)[style]);
      },
      moveSplitter: function (delta) {
        let attr = this.direction === 'horizontal' ? 'width' : 'height'
        var widthLeft = this.getPxStyle(this.domLeftPanel, attr);
        var widthRight = this.getPxStyle(this.domRightPanel, attr);

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
    user-select-none()
    &.horizontal
      height: 100%
    &.vertical
      width: 100%
      flex-direction column

  .splitter > .panel
    user-select-none()

  .splitter > .panel > *
    height 100%

  .splitter-handle
    position relative
    z-index 10
    &.horizontal
      left 0
      width 9px
      height 100%
      margin 0 -4px
      cursor w-resize
    &.vertical
      top 0
      height 9px
      width 100%
      margin -4px 0
      cursor n-resize

  .splitter-line
    background-color silver
    &.horizontal
      height 100%
      width 1px
      margin-left 4px
    &.vertical
      width 100%
      height 1px
      margin-top 4px
</style>
