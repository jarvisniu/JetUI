// 水平分割器
// - 子元素 slot="a|b"
// - 初始值 按比例(:size<=1)，某个固定(:size>1)；
// - 竖向 vertical
// - 最小值 :min="300"（如果容器特别小，两个都设置了min，而最小值加起来都比容器大则自动锁住，并按比例分配 ）
// - 最大值 :max="600" （如果容器特别大，两个都设置了max，而加起来都不够则自动锁住，并按比例分配 ）
// - 折叠（max-size + 锁住，grow不变，所以还能恢复）
// - 锁住 :disabled=false
// - 读取 getSize => { a: 120, b: 200 }，要比例自己算。

// 属性 :a="200" :b="2" :max-a="200" :max-b="300"
//   <jv-split-pane verticla disabled>
//     <div slot="a" :init="200" :max="500" :min="100">A</div>
//     <div slot="b">B</div>
//   </jv-split-pane>

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
    name: 'JtSplitter',
    data () {
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
    overflow hidden

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
