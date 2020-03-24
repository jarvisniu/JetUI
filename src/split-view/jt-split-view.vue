<template>
  <div
    class="jt-split-view"
    :class="{
      vertical: vertical,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JtSplitView',
  props: {
    vertical: { type: Boolean, default: false },
  },
  data() {
    return {}
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

  &.vertical .jt-split-view-child {
    width: 100% !important;
  }

}
</style>
