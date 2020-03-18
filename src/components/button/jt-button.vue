<docs>
Button
</docs>

<template>
  <button
    class="jt-button jt-inline-component"
    :class="[type, {
      disabled: disabled,
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
  line-height: 22px;
  vertical-align: top;
  text-align: center;
	color: inherit;
	font-family: inherit;
  font-size: 14px;
  padding: 0 8px;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
  &:hover {
    @media (hover: hover) {
      background-color: var(--jt-bg-button-hover);
    }
  }
  &:active {
    background-color: var(--jt-bg-button-active);
    transition: background-color 0.02s, border-color 0.02s;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
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
      transition: background-color 0.02s, border-color 0.02s;
    }
  }
}
</style>
