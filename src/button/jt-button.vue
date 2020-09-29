<template>
  <button
    class="jt-button jt-inline-component"
    :class="[type, {
      disabled: disabled,
      selected: selected,
      squared: squared,
    }]"
    :style="{
      width: convertSizeToCSS(width),
    }"
    @click="$emit('click')"
  >
    <template v-if="icon">
      <jt-icon v-if="!isIconImage" :name="icon"></jt-icon>
      <img v-else :src="icon" class="image-icon" alt="button icon">
    </template>
    <slot></slot>
  </button>
</template>

<script>
import { convertSizeToCSS } from '../utils'

export default {
  name: 'JtButton',
  props: {
    type: { type: String, default: '' }, // primary, flat
    icon: { type: String, default: null },
    disabled: { type: Boolean, default: false },
    selected: { type: Boolean, default: false },
    squared: { type: Boolean, default: false },
    width: { type: [Number, String], default: '' },
  },
  computed: {
    isIconImage() {
      return this.icon && /[\/\\\.]/.test(this.icon)
    },
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
  padding: 4px 6px;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  // interactions
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

  // disabled
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  // selected
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

  // squared
  &.squared {
    padding: 4px;
  }

  // type: primary
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

  // type: flat
  &.flat {
    background-color: transparent;
    border-color: transparent;
    &:hover {
      @media (hover: hover) {
        background-color: var(--jt-bg-menu-hover);
      }
    }
    &:active {
      transition: background-color var(--jt-duration-active), border-color var(--jt-duration-active);
      background-color: var(--jt-bg-menu-active);
    }
  }

  // inner
  .jt-icon {
    vertical-align: top;
  }
}

.image-icon {
  width: 14px;
  height: 14px;
  object-fit: contain;
    vertical-align: top;
}

// Gap between multiple buttons
.jt-button + .jt-button {
  margin-left: 4px;

  .jt-button-group & {
    margin-left: 0;
  }
}
</style>
