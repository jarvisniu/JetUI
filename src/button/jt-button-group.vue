<template>
  <div
    class="jt-button-group jt-inline-component"
    :class="{
      'sharp': sharp || dock,
      'dock-left': dock == 'left',
      'dock-right': dock == 'right',
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JtButtonGroup',
  props: {
    sharp: { type: Boolean, default: false },
    dock: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.jt-button-group {
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  font-size: 0;

  & > .jt-button {
    position: relative;
    border-color: var(--jt-border);

    &:hover {
      @media (hover: hover) {
        z-index: 1;
      }
    }
    &:first-child:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
      border-left-width: 0;
    }
    &:last-child:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left-width: 0;
    }
  }

  // sharp
  &.sharp > .jt-button {
    border-radius: 0;
  }

  // dock
  &.dock-left > .jt-button,
  &.dock-right > .jt-button {
      border-top-width: 0;
      border-bottom-width: 0;
  }
  &.dock-left > .jt-button {
    &:first-child:not(:last-child) {
      border-left-width: 0;
    }
    // only one
    &:first-child:last-child {
      border-left-width: 0;
    }
  }
  &.dock-right > .jt-button {
    &:last-child:not(:first-child) {
      border-right-width: 0;
    }
    // only one
    &:first-child:last-child {
      border-right-width: 0;
    }
  }
}
</style>
