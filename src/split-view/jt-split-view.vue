<template>
  <div
    class="jt-split-view"
    :class="{
      'vertical': vertical,
      'dragging': draggingLineIndex > -1,
    }"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
  >
    <slot></slot>
  </div>
</template>

<script>
import _filter from 'lodash/filter'

export default {
  name: 'JtSplitView',
  props: {
    vertical: { type: Boolean, default: false },
  },
  data() {
    return {
      childPaneElements: [],
      splitHandleElements: [],
      draggingLineIndex: -1,
    }
  },
  mounted() {
    this.childPaneElements = _filter(this.$el.children, el => {
      return el.classList.contains('jt-split-view-child')
    })
    for (let i = 1; i < this.childPaneElements.length; i++) {
      let el = document.createElement('div')
      el.classList.add('jt-split-view-handle')
      el.addEventListener('mousedown', this.onMouseDown)
      let line = document.createElement('div')
      line.classList.add('jt-split-view-line')
      el.appendChild(line)
      this.splitHandleElements.push(el)
      this.$el.insertBefore(el, this.childPaneElements[i])
    }
  },
  methods: {
    onMouseDown(e) {
      let index = this.splitHandleElements.indexOf(e.target)
      this.draggingLineIndex = index
    },
    onMouseMove(e) {
      if (this.draggingLineIndex > -1) {
        console.log('onMouseMove', this.draggingLineIndex)
      }
    },
    onMouseUp(e) {
      this.draggingLineIndex = -1
    },
  },
}
</script>

<style lang="scss" scoped>
.jt-split-view {
  box-sizing: border-box;
  display: flex;
  &.vertical {
    flex-direction: column;
  }
  &:not(.vertical) .jt-split-view-child {
    height: 100% !important;
  }
  &.vertical .jt-split-view-child  {
    width: 100% !important;
  }
}
</style>

<style lang="scss">
.jt-split-view {
  &.dragging {
    user-select: none;
  }
  .jt-split-view-handle {
    position: relative;
    z-index: 10;
  }
  .jt-split-view-line {
    background-color: var(--jt-border);
  }
  &:not(.vertical) .jt-split-view-handle {
    height: 100%;
    width: 9px;
    margin: 0 -4px;
    cursor: w-resize;
  }
  &:not(.vertical) .jt-split-view-line {
    height: 100%;
    width: 1px;
    margin-left: 4px;
  }

  &.vertical .jt-split-view-handle  {
    width: 100%;
    height: 9px;
    margin: -4px 0;
    cursor: n-resize;
  }
  &.vertical .jt-split-view-line  {
    width: 100%;
    height: 1px;
    margin-top: 4px;
  }
}
</style>
