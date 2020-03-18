<docs>
Toolbar Button
</docs>

<template>
  <div
    class="jt-toolbar-button"
    :class="{selected: selected}"
    :title="tip"
    @click="onClick"
  >
    <img :src="icon">
  </div>
</template>

<script>
export default {
  name: 'JtToolbarButton',
  props: {
    selected: Boolean,
    tip: String,
    icon: String,
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
  border: solid 1px red;
  border-radius: 2px;
  width: 24px;
  height: 24px;
  margin: 2px;

  img {
    margin: 2px;
    width: 18px;
    height: 18px;
    -webkit-user-drag: none;
  }

  // theme
  transition: background-color 0.3s;
  border-color: transparent;
  background-color: transparent;
  &:hover {
    border-color: var(--jt-border);
    background-color: var(--jt-bg-button-hover);
  }
  &:active {
    background-color: var(--jt-bg-button-active);
    transition: background-color 0.02s, border-color 0.02s;
  }
  &.selected {
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
