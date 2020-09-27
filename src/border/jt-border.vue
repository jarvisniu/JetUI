<template>
  <div
    class="jt-border"
    :style="{
      'display': inline ? 'inline-block' : 'block',
      'border-left-width': leftBorderWidth,
      'border-top-width': topBorderWidth,
      'border-right-width': rightBorderWidth,
      'border-bottom-width': bottomBorderWidth,
      'padding': convertSizeToCSS(padding),
  }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { convertSizeToCSS } from '../utils'

export default {
  name: 'JtBorder',
  props: {
    inline: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    top: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false },
    horizontal: { type: Boolean, default: false },
    all: { type: Boolean, default: false },
    padding: { type: [Number, String], default: null },
  },
  computed: {
    leftBorderWidth() {
      if (this.left || this.horizontal || this.all) return 1 + 'px'
      return '0'
    },
    topBorderWidth() {
      if (this.top || this.vertical || this.all) return 1 + 'px'
      return '0'
    },
    rightBorderWidth() {
      if (this.right || this.horizontal || this.all) return 1 + 'px'
      return '0'
    },
    bottomBorderWidth() {
      if (this.bottom || this.vertical || this.all) return 1 + 'px'
      return '0'
    },
  },
  methods: {
    convertSizeToCSS,
  },
}
</script>

<style lang="scss" scoped>
.jt-border {
  box-sizing: border-box;
  border: solid 0 var(--jt-border);
}
</style>
