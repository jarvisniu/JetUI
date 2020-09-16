<docs>
Button
</docs>

<template>
  <button
    class="jt-button jt-inline-component"
    :class="[type, {
      disabled: disabled,
      selected: selected,
    }]"
    :style="{
      width: convertSizeToCSS(width),
    }"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
import { convertSizeToCSS } from '../utils'

export default {
  name: 'JtButton',
  props: {
    type: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    selected: { type: Boolean, default: false },
    width: { type: [Number, String], default: '' },
  },
  methods: {
    convertSizeToCSS,
  },
}
</script>

<style lang="scss" scoped>
.jt-button {
  box-sizing: border-box;
  display: inline-block;
  border: solid 1px var(--jt-border);
  background-color: var(--jt-bg-button);
  height: 24px;
  line-height: 1;
  vertical-align: top;
  text-align: center;
  color: var(--jt-text);
	font-family: inherit;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  transition:
    color var(--jt-duration),
    background-color var(--jt-duration),
    border-color var(--jt-duration);
  &:hover {
    @media (hover: hover) {
      background-color: var(--jt-bg-button-hover);
    }
  }
  &:active {
    color: var(--jt-text);
    background-color: var(--jt-bg-button-active);
    transition:
      background-color var(--jt-duration-active),
      border-color var(--jt-duration-active);
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
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

  &.primary {
    color: white;
    background-color: var(--jt-primary);
    border-color: var(--jt-primary);
    &:hover {
      @media (hover: hover) {
        background-color: var(--jt-primary-hover);
      }
    }
    &:active {
      background-color: var(--jt-primary-active);
      transition: background-color var(--jt-duration-active), border-color var(--jt-duration-active);
    }
  }

  .jt-icon {
    vertical-align: top;
  }
}
</style>
