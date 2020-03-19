<template>
  <div class="jt-button-group jt-inline-component">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JtButtonGroup',
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
      z-index: 1;
    }
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
      border-left-width: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left-width: 0;
    }
  }
}
</style>
