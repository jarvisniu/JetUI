<template>
  <div class="jt-scroll-view" :class="scroll">
    <div class="jt-scroll-view-container" :class="scroll">
      <jt-border
        :style="{
          height: convertSizeToCSS(height),
        }"
        :bottom="scroll == 'x'"
        :right="scroll == 'y'"
      >
        <slot></slot>
      </jt-border>
    </div>
    <template v-if="scroll == 'both'">
      <div class="right-line"></div>
      <div class="bottom-line"></div>
      <div class="corner-block"></div>
    </template>
  </div>
</template>

<script>
import { convertSizeToCSS } from '../utils'

export default {
  name: 'JtScrollView',
  props: {
    scroll: { type: String, default: 'y' }, // x, both
    height: { type: [Number, String], default: 'y' }, // x, both
  },
  methods: {
    convertSizeToCSS,
  },
}
</script>

<style lang="scss" scoped>

$scrollbar-width: 16px;

.jt-scroll-view {
  &.both {
    position: relative;

    .right-line,
    .bottom-line {
      position: absolute;
      background-color: var(--jt-border);
    }
    .right-line {
      width: 1px;
      right: $scrollbar-width;
      top: 0;
      bottom: $scrollbar-width;
    }
    .bottom-line {
      height: 1px;
      left: 0;
      right: $scrollbar-width;
      bottom: $scrollbar-width;
    }
    .corner-block {
      position: absolute;
      bottom: 0;
      right: 0;
      width: $scrollbar-width;
      height: $scrollbar-width;
      border-top: solid 1px var(--jt-border);
      border-left: solid 1px var(--jt-border);
      background-color: var(--jt-bg-scrollbar-corner);
    }
  }
}

.jt-scroll-view-container {
  width: 100%;
  height: 100%;
  color: var(--jt-text);

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar:vertical {
    width: $scrollbar-width;
  }
  &::-webkit-scrollbar:horizontal {
    height: $scrollbar-width;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--jt-bg-scrollbar-track);
  }
  &::-webkit-scrollbar-thumb {
    border: 2px solid var(--jt-bg-scrollbar-track);
    transition: background-color var(--jt-duration); // Note: not work for now
    background-color: var(--jt-bg-scrollbar-thumb);
    &:hover {
      @media (hover: hover) {
        background-color: var(--jt-bg-scrollbar-thumb-hover);
      }
    }
  }

  // vertical
  &.y {
    overflow-x: hidden;
    overflow-y: scroll;
    .jt-border {
      min-height: 100%;
    }
  }

  // horizontal
  &.x {
    overflow-x: scroll;
    overflow-y: hidden;
    .jt-border {
      width: max-content;
      height: 100%;
    }
  }

  // both
  &.both {
    overflow-x: scroll;
    overflow-y: scroll;
    .jt-border {
      width: max-content;
    }
  }
}
</style>
