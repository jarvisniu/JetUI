<template>
  <div class="jt-toolbar" :class="direction">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'JtToolbar',
    props: {
      vertical: { type: Boolean, default: false },
    },
    data() {
      return {
        selIndex: 0,
      }
    },
    computed: {
      direction() {
        return this.vertical ? 'vertical' : 'horizontal'
      },
    },
  }
</script>

<style lang="scss" scoped>
.jt-toolbar {
  padding: 2px;
  box-sizing: border-box;
  transition: background-color 0.3s;
  overflow-x: auto;
  overflow-y: hidden;

  &.horizontal {
    display: flex;
    height: 32px;
  }
  &.vertical {
    width: 32px;
  }
  // theme
  color: var(--jt-text);
  background-color: var(--jt-bg-container-dark);

  & ::v-deep > .jt-inline-component {
    margin: 2px;
  }
}
</style>
