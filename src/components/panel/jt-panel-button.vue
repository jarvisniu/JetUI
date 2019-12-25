<template>
  <div class="jt-panel-button">
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
    padding: 0 8px;
    min-width: 26px;
    text-align: center;

    & + .jt-panel-button {
      border-left: solid 1px var(--jt-border);
    }

    font-size: var(--jt-font-size);
    transition: color 0.2s, background-color 0.2s, border-color 0.2s;
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
