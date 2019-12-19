<docs>
Toggle Bar Button
</docs>

<template>
  <div
    class="toggle-bar-button"
    :class="{selected: selected}"
    @click="onClick"
  >
    <img class="icon" :src="icon">
    <span class="label">{{ label }}</span>
  </div>
</template>

<script>
  export default {
    name: 'JtToggleBarButton',
    props: {
      icon: { type: String, default: '' },
      label: { type: String, default: '' },
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
.toggle-bar-button {
  box-sizing: border-box;
  display: inline-flex;
  height: 24px;
  padding: 0 6px 0 2px;
  cursor: default;
  user-select: none;

  transition: background-color 0.2s;
  background-color: var(--jt-bg-container-dark);
  &:hover {
    background-color: var(--jt-bg-button-hover-dark);
  }
  &:active {
    background-color: var(--jt-bg-button-active);
  }
  &.selected {
    background-color: var(--jt-bg-button-selected);
    &:hover {
      background-color: var(--jt-bg-button-selected-hover);
    }
    &:active {
      background-color: var(--jt-bg-button-selected-active);
    }
  }
}
.icon {
  padding: 4px;
  width: 16px;
  height: 16px;
}
.label {
  line-height: 24px;
}
</style>
