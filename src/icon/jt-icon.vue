<template>
  <div
    class="jt-icon"
    :class="{ clickable: clickable }"
    :style="{
      margin: convertSizeToCSS(margin),
      transform: myTransform,
    }"
    @click="$emit('click', $event)"
  >
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
      :viewBox="myViewBox"
      :style="{
        fill: color,
        width: width ? convertSizeToCSS(width) : convertSizeToCSS(size),
        height: height ? convertSizeToCSS(height) : convertSizeToCSS(size),
      }"
    >
      <path :d="myPathData"></path>
    </svg>
  </div>
</template>

<script>
import { convertSizeToCSS } from '../utils'
import iconPaths from './icon-paths.js'

export default {
  name: 'JtIcon',
  props: {
    name: { type: String, default: '' },
    path: { type: String, default: '' },
    color: { type: String, default: '' },
    viewBox: { type: String, default: '0 0 16 16' },
    size: { type: [Number, String], default: 14 },
    rotate: { type: [Number, String], default: 0 },
    margin: { type: [Number, String], default: '' },
    width: { type: [Number, String], default: 0 },
    height: { type: [Number, String], default: 0 },
    clickable: { type: Boolean, default: false },
  },
  computed: {
    myTransform() {
      return `rotate(${this.rotate}deg)`
    },
    myPathData() {
      if (this.name && iconPaths[this.name]) {
        return iconPaths[this.name].d
      } else {
        return this.path
      }
    },
    myViewBox() {
      if (this.name && iconPaths[this.name]) {
        return iconPaths[this.name].viewBox
      } else {
        return this.viewBox
      }
    },
  },
  methods: {
    convertSizeToCSS,
  },
  mounted () {
    if (this.name) {
      if (iconPaths[this.name] == null) {
        console.error(`[jet-ui] <jt-icon>: Icon "${ this.name }" doesn't exists.`)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.jt-icon {
  box-sizing: border-box;
  display: inline-block;
  line-height: 1;
  user-select: none;
  // color: var(--jt-icon); // TODO Not suitable for button primary
  transition: transform var(--jt-duration);

  &.clickable {
    cursor: pointer;
    transition: background-color var(--jt-duration);
    &:hover {
      @media screen and (hover: hover) {
        background-color: var(--jt-bg-menu-hover);
      }
    }
    &:active {
      background-color: var(--jt-bg-menu-active);
    }
  }

  svg {
    vertical-align: top;
    transition: fill var(--jt-duration);
    fill: currentColor;
  }
}
</style>
