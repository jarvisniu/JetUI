<docs>
Events:
- `press-enter`: Filter the IME Enter keys.
</docs>

<template>
  <div
    class="jt-input jt-inline-component"
    :style="{
      width: convertSizeToCSS(width),
    }"
  >
    <input type="text" v-model="text"
      @keydown.enter="onKeyDownEnter"
      @compositionend="onCompositionEnd"
    >
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
      lastCompositionTime: Date.now(),
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
    // public
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
    // private
    convertSizeToCSS,
    onKeyDownEnter(e) {
      setTimeout(() => {
        if (Date.now() - this.lastCompositionTime > 10) {
          this.$emit('press-enter')
        }
      }, 0)
    },
    onCompositionEnd() {
      this.lastCompositionTime = Date.now()
    },
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
</style>
