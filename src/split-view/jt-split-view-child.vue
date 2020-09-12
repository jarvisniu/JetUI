<template>
  <div
    class="jt-split-view-child"
    :style="{
      'flex-grow': this.size == 0 ? actualWeight : '',
      'width': `${ this.size }px`,
      'height': `${ this.size }px`,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JtSplitViewChild',
  props: {
    vertical: { type: Boolean, default: false },
    weight: { type: [Number, String], default: 1 },
    size: { type: [Number, String], default: 0 },
  },
  computed: {
    actualWeight() {
      if (this.size > 0) return 0
      else return this.weight
    },
  },
}
</script>

<style lang="scss" scoped>
.jt-split-view-child {
  box-sizing: border-box;
  background: lightblue;
  /* flex-basis: 0%; */
  flex-shrink: 1;
  overflow: auto;
  color: var(--jt-text);
}
</style>
