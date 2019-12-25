<docs>
Toggle Bar Button
</docs>

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
    padding: 4px;
    width: 16px;
    height: 16px;
    -webkit-user-drag: none;
  }
  .label {
    line-height: 24px;
  }

  transition: color 0.2s, background-color 0.2s;
  color: var(--jt-text);
  background-color: var(--jt-bg-container-dark);
  &:hover {
    background-color: var(--jt-bg-button-hover);
  }
  &:active {
    background-color: var(--jt-bg-button-active);
  }
  &.selected {
    color: var(--jt-text-selected);
    background-color: var(--jt-bg-button-selected);
    &:hover {
      background-color: var(--jt-bg-button-selected-hover);
    }
    &:active {
      background-color: var(--jt-bg-button-selected-active);
    }
  }
}
</style>
