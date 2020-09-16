<docs>
Toolbar Button
</docs>

<template>
  <div
    class="jt-toolbar-button jt-inline-component"
    :class="{selected: selected}"
    :title="tip"
    :style="{
      padding: padding + 'px',
    }"
    @click="onClick"
  >
    <img :src="icon">
  </div>
</template>

<script>
export default {
  name: 'JtToolbarButton',
  props: {
    selected: { type: Boolean, default: false },
    tip: { type: String, default: '' },
    icon: { type: String, default: '' },
    padding: { type: [String, Number], default: 3 },
  },
  methods: {
    onClick: function () {
      this.$emit("click", this);
    }
  }
}
</script>

<style lang="scss" scoped>
.jt-toolbar-button {
  box-sizing: border-box;
  user-select: none;
  display: flex;
  border: solid 1px var(--jt-border);
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
  }

  // theme
  transition: border-color var(--jt-duration), background-color var(--jt-duration);
  border-color: transparent;
  background-color: transparent;
  &:hover {
    @media (hover: hover) {
      border-color: var(--jt-border);
      background-color: var(--jt-bg-button-hover);
    }
  }
  &:active {
    background-color: var(--jt-bg-button-active);
    transition:
      background-color var(--jt-duration-active),
      border-color var(--jt-duration-active);
  }
  &.selected {
    border-color: var(--jt-border);
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
