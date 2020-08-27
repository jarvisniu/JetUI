<template>
  <div
    class="jt-panel-button"
    @click="$emit('click')"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JtPanelButton',
}
</script>

<style lang="scss" scoped>
  .jt-panel-button {
    box-sizing: border-box;
    display: inline-block;
    height: 24px;
    line-height: 24px;
    cursor: default;
    user-select: none;
    text-align: center;

    padding: 0 5px;
    .jt-panel-slot-title & {
      padding: 0 8px;
    }

    & + .jt-panel-button {
      border-left: solid 1px var(--jt-border);
    }

    font-size: var(--jt-font-size);
    transition: color var(--jt-duration), background-color var(--jt-duration), border-color var(--jt-duration);
    &:hover {
      background-color: var(--jt-bg-panel-button-hover);
    }
    &:active {
      background-color: var(--jt-bg-panel-button-active);
    }
  }
  .jt-panel-slot-title .jt-panel-button:last-child {
    border-right: solid 1px var(--jt-border);
  }
  .jt-panel-slot-control .jt-panel-button:first-child {
    border-left: solid 1px var(--jt-border);
  }
</style>
