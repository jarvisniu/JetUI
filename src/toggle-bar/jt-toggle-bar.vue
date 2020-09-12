<docs>
Toggle Bar
</docs>

<template>
  <div class="jt-toggle-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'JtToggleBar',
  }
</script>

<style lang="scss" scoped>
.jt-toggle-bar {
  box-sizing: border-box;
  display: inline-flex;
  height: 24px;
  user-select: none;
  vertical-align: top;

  transition:
    color var(--jt-duration),
    background-color var(--jt-duration);
  color: var(--jt-text);
  background-color: var(--jt-bg-container-dark);
}
</style>
