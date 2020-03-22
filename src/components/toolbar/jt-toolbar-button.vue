<docs>
Toolbar Button
</docs>

<template>
  <div
    class="jt-toolbar-button"
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
  margin: 2px;

  img {
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
  }

  // theme
  transition: border-color 0.3s, background-color 0.3s;
  border-color: transparent;
  background-color: transparent;
  &:hover {
    border-color: var(--jt-border);
    background-color: var(--jt-bg-button-hover-reverse);
  }
  &:active {
    background-color: var(--jt-bg-button-active);
    transition: background-color 0.02s, border-color 0.02s;
  }
  &.selected {
    color: var(--jt-text-selected);
    border-color: var(--jt-border);
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
