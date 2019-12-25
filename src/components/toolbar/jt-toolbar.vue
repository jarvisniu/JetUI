<docs>
  Toolbar
</docs>

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
  padding: 1px;
  box-sizing: border-box;
  transition: background-color 0.3s;
  overflow: auto;
  &.horizontal {
    display: inline-flex;
    height: 30px;
  }
  &.vertical {
    width: 30px;
  }
  // theme
  background-color: var(--jt-bg-button);
}
</style>
