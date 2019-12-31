<template>
  <div
    class="jt-input-number"
    :style="{
      margin: convertSizeToCSS(margin),
      width: convertSizeToCSS(width),
    }"
  >
    <input
      type="text"
      v-model.number="num"
    ><div class="stepper">
      <div class="button" style="padding-top: 1px;" @click="num += step">
        <svg version="1.1" viewBox="0 0 18 10"><path d="M6,6 L9,3 L12,6 Z"></path></svg>
      </div>
      <div class="button" @click="num -= step">
        <svg version="1.1" viewBox="0 0 18 10"><path d="M6,3 L9,6 L12,3 Z"></path></svg>
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
    margin: { type: [Number, String], default: '' },
    width: { type: [Number, String], default: '' },
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
  width: 60px;
  height: 24px;

  input[type="text"] {
    box-sizing: border-box;
    display: inline-block;
    width: calc(100% - 20px);
    line-height: 22px;
    padding: 0 5px;
    font-size: var(--jt-font-size);
    border: none;
    outline: none;
    color: inherit;
    background-color: inherit;
  }

  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
  color: var(--jt-text);
  background-color: var(--jt-bg-input);
  border-color: var(--jt-bg-input-border);
  &:hover {
    background-color: var(--jt-bg-input-hover);
    border-color: var(--jt-bg-input-border-hover);
  }
  &:focus-within {
    background-color: var(--jt-bg-input-hover);
    border-color: var(--jt-primary);
  }
}
.stepper {
  box-sizing: border-box;
  display: inline-block;
  width: 20px;
  height: 100%;;
  border-left: solid 1px var(--jt-bg-input-border);
  vertical-align: top;

  .button {
    box-sizing: border-box;
    height: 11px;
    user-select: none; /* prevent double click to select */
    fill: var(--jt-text);  /* svg icon color */

    &:last-child {
      border-top: solid 1px var(--jt-bg-input-border);
    }

    svg {
      vertical-align: top;
    }

    transition: color 0.2s, background-color 0.2s, border-color 0.2s;
    background-color: var(--jt-bg-button);
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
  }
}
</style>
