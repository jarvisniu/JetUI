<template>
  <div
    class="jt-input-number jt-inline-component"
    :style="{
      width: convertSizeToCSS(width),
    }"
  >
    <input
      type="text" size="3"
      v-model.number="num"
    ><div class="stepper">
      <div class="button" :class="{ disabled: num >= max }" @click="num += step">
        <jt-icon width="18" height="10" view-box="0 0 18 10" path="M5.5,5 L9,2 L12.5,5 Z"></jt-icon>
      </div>
      <div class="button" :class="{ disabled: num <= min }" @click="num -= step">
        <jt-icon width="18" height="10" view-box="0 0 18 10" path="M5.5,3 L9,6 L12.5,3 Z"></jt-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { convertSizeToCSS } from '../utils'

export default {
  name: 'JtInputNumber',
  props: {
    value: { type: Number, default: '' },
    step: { type: Number, default: 1 },
    width: { type: [Number, String], default: '' },
    min: { type: Number, default: -Infinity },
    max: { type: Number, default: Infinity },
  },
  data() {
    return {
      num: this.value,
    }
  },
  watch: {
    value(val) {
      this.num = val
    },
    num(val) {
      if (val > this.max) val = this.max
      else if (val < this.min) val = this.min
      this.$emit('input', val)
    },
  },
  methods: {
    convertSizeToCSS,
  },
}
</script>

<style lang="scss" scoped>
.jt-input-number {
  box-sizing: border-box;
  display: inline-block;
  border: solid 1px;
  vertical-align: top;
  line-height: 1;
  height: 24px;

  input[type="text"] {
    box-sizing: border-box;
    display: inline-block;
    width: calc(100% - 19px);
    line-height: 22px;
    padding: 0 5px;
    font-size: var(--jt-font-size);
    border: none;
    outline: none;
    color: inherit;
    background-color: inherit;
  }

  transition:
    color var(--jt-duration),
    background-color var(--jt-duration),
    border-color var(--jt-duration);
  color: var(--jt-text);
  background-color: var(--jt-bg-input);
  border-color: var(--jt-bg-input-border);
  &:focus-within {
    background-color: var(--jt-bg-input-hover);
    border-color: var(--jt-primary);
  }
}
.stepper {
  box-sizing: border-box;
  display: inline-block;
  width: 19px;
  height: 100%;;
  border-left: solid 1px var(--jt-bg-input-border);
  vertical-align: top;
  user-select: none; /* prevent double click to select */

  .button {
    box-sizing: border-box;
    position: relative;
    z-index: 2;
    overflow: hidden; /* icon will extend */

    &:first-child {
      height: 12px;
      padding-top: 2px;
      border-bottom: solid 1px var(--jt-bg-input-border);
      margin-bottom: -1px;
    }
    &:last-child {
      height: 11px;
      padding-top: 1px;
      border-top: solid 1px var(--jt-bg-input-border);
    }

    transition:
      color var(--jt-duration),
      background-color var(--jt-duration),
      border-color var(--jt-duration);
    background-color: var(--jt-bg-button);
    &:hover {
      @media (hover: hover) {
        background-color: var(--jt-bg-button-hover);
      }
    }
    &:active {
      background-color: var(--jt-bg-button-active);
      transition:
        background-color var(--jt-duration-active),
        border-color var(--jt-duration-active);
    }

    &.disabled {
      opacity: 0.5;
      pointer-events: none;
      z-index: 1;
    }
  }
}
</style>
