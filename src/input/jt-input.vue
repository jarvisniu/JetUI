<template>
  <div
    class="jt-input jt-inline-component"
    :style="{
      width: convertSizeToCSS(width),
    }"
  >
    <input type="text" v-model="text">
  </div>
</template>

<script>
import { convertSizeToCSS } from '../utils'

export default {
  name: 'JtInput',
  props: {
    value: { type: [String, Number], default: '' },
    width: { type: [Number, String], default: '' },
  },
  data() {
    return {
      text: this.value,
    }
  },
  watch: {
    value(val) {
      this.text = val
    },
    text(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    convertSizeToCSS,
  },
}
</script>

<style lang="scss" scoped>
.jt-input {
  box-sizing: border-box;
  display: inline-block;
  border: solid 1px;
  vertical-align: top;

  input[type="text"] {
    box-sizing: border-box;
    display: block;
    width: 100%;
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
</style>