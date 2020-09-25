<template>
  <div class="jt-drawer"
    :class="{
      open: sideOpen,
      'dock-right': side === 'right',
    }"
    :style="{ '--jt-side-width': convertSizeToCSS(width) }"
  >
    <div class="side" :style="{ 'z-index': +zIndex + 2 }">
      <slot></slot>
    </div>
    <div class="side-mask" :style="{ 'z-index': +zIndex + 1 }" @click="sideOpen = false"/>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import { convertSizeToCSS } from '../utils'

export default {
  name: 'JtDrawer',
  props: {
    width: { type: [Number, String], default: 200 },
    side: { type: String, default: 'left' },
    zIndex: { type: [Number, String], default: 0 },
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
.jt-drawer {
  box-sizing: border-box;
  height: 100vh;
  color: var(--jt-text);
}

.side {
  position: absolute;
  border-right: solid 1px red;
  top: 0;
  height: 100%;
  transform: translateX(0%);
  width: var(--jt-side-width);
  border-right: solid 1px var(--jt-border);
  background-color: var(--jt-bg-container-dark);
  transition: transform var(--jt-duration);

  @media screen and (max-width: 600px) {
    transform: translateX(-100%);
  }

  .jt-drawer.open & {
    transform: translateX(0);
  }

  // Dock right
  .jt-drawer.dock-right & {
    right: 0;
    border-left: solid 1px var(--jt-border);
    border-right: none;

    @media screen and (max-width: 600px) {
      transform: translateX(100%);
    }
  }

  .jt-drawer.dock-right.open & {
    transform: translateX(0);
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
  transition: opacity var(--jt-duration);

  .jt-drawer.open & {
    opacity: 0.5;
    pointer-events: auto;
  }
}

.content {
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto; // wrap inner margin
  transition: margin-left var(--jt-duration);
  margin-left: var(--jt-side-width);

  @media screen and (max-width: 600px) {
    margin-left: 0;
  }

  // Dock right
  .jt-drawer.dock-right & {
    margin-left: 0;
    margin-right: var(--jt-side-width);

    @media screen and (max-width: 600px) {
      margin-right: 0;
    }
  }

}
</style>
