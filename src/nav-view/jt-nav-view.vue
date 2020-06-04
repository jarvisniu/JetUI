<template>
  <div class="jt-nav-view"
    :style="{ '--jt-side-width': convertSizeToCSS(width) }"
  >
    <div class="side"
      :class="{ open: sideOpen }"
    >
      <slot></slot>
    </div>
    <div class="side-mask" @click="sideOpen = false"/>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import { convertSizeToCSS } from '../utils'

export default {
  name: 'JtNavView',
  props: {
    width: { type: [Number, String], default: 200 },
  },
  data() {
    return {
      sideOpen: false,
    }
  },
  methods: {
    convertSizeToCSS,
    open() {
      this.sideOpen = true
    },
    close() {
      this.sideOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
.jt-nav-view {
  box-sizing: border-box;
  height: 100vh;

  .side {
    position: absolute;
    z-index: 2;
    border-right: solid 1px red;
    top: 0;
    height: 100%;
    transform: translateX(0%);
    width: var(--jt-side-width);
    border-right: solid 1px var(--jt-border);
    background-color: var(--jt-bg-container-light);
    transition: transform 0.2s;
    &.open {
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 600px) {
    .side {
      transform: translateX(-100%);
    }
  }

  .side-mask {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: black;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
  }
  .side.open + .side-mask {
    opacity: 0.5;
    pointer-events: auto;
  }

  .content {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto; // wrap inner margin
    transition: margin-left 0.2s;
    margin-left: var(--jt-side-width);
  }
  @media screen and (max-width: 600px) {
    .content {
      margin-left: 0;
    }
  }
}
</style>
