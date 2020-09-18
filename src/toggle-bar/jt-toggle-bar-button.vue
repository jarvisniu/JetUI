<template>
  <div
    class="jt-toggle-bar-button"
    :class="{ selected: selected }"
    :style="{
      paddingLeft: icon ? '4px' : '8px',
    }"
    @click="onClick"
  >
    <img v-if="icon" class="icon" :src="icon">
    <span class="label">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'JtToggleBarButton',
    props: {
      icon: { type: String, default: '' },
      tip: { type: String, default: '' },
      value: { type: String, default: '' },
      selected: { type: Boolean, default: false },
    },
    methods: {
      onClick (ev) {
        this.$emit("click", this)
      }
    },
  }
</script>

<style lang="scss" scoped>
.jt-toggle-bar-button {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  height: 24px;
  padding: 0 8px 0 4px;
  cursor: default;
  user-select: none;

  .icon {
    box-sizing: border-box;
    padding: 4px;
    width: 24px;
    height: 24px;
    -webkit-user-drag: none;
  }
  .label {
    line-height: 24px;
  }

  font-size: var(--jt-font-size);
  transition:
    color var(--jt-duration),
    background-color var(--jt-duration);
  color: var(--jt-text);
  background-color: var(--jt-bg-container-dark);
  &:hover {
    @media (hover: hover) {
      background-color: var(--jt-bg-button-hover);
    }
  }
  &:active {
    background-color: var(--jt-bg-button-active);
  }
  &.selected {
    background-color: var(--jt-bg-button-selected);
    &:hover {
      @media (hover: hover) {
        background-color: var(--jt-bg-button-selected-hover);
      }
    }
    &:active {
      background-color: var(--jt-bg-button-selected-active);
    }
  }
}
</style>
