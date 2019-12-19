<docs>
Button
</docs>

<template>
  <div
    class="jt-button"
    @click="$emit('click')"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JtButton',
}
</script>

<style lang="scss" scoped>
.jt-button {
  box-sizing: border-box;
  display: inline-block;
  border: solid 1px var(--jt-border);
  background-color: var(--jt-bg-button);
  height: 24px;
  line-height: 22px;
  /* min-width: 40px;
  text-align: center; */
  font-size: 14px;
  padding: 0 8px;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.2s, border-color 0.2s;
  &:hover {
    @media (hover: hover) {
      background-color: var(--jt-bg-button-hover);
    }
  }
  &:active {
    background-color: var(--jt-bg-button-active);
    transition: background-color 0.02s, border-color 0.02s;
  }
}
</style>
