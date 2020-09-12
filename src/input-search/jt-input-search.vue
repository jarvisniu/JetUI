<docs>
Events:
- `press-enter`: Filter the IME Enter keys.
</docs>

<template>
  <div
    class="jt-input-search jt-inline-component"
    :style="{
      width: convertSizeToCSS(width),
    }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div
      class="search-box"
      :class="{ 'not-empty': text !== '' }"
    >
      <div class="icon">
        <jt-icon name="search" margin="2"></jt-icon>
      </div>
      <div
        :class="{
          hide: text === '' || (!hovered && !focused),
        }"
        class="icon clear"
        @click="text = ''"
      >
        <jt-icon name="cross" margin="2"></jt-icon>
      </div>
      <input
        ref="input"
        v-model="text"
        type="text"
        @focus="focused = true"
        @blur="focused = false"
        @keydown.enter="onKeyDownEnter"
        @keydown.esc="text = ''"
        @compositionend="onCompositionEnd"
      >
    </div>
  </div>
</template>

<script>
import { convertSizeToCSS } from '../utils'

export default {
  name: 'JtInputSearch',
  props: {
    value: { type: String, default: '' },
    width: { type: [Number, String], default: '' },
  },
  data () {
    return {
      text: this.value,
      hovered: false,
      focused: false,
      lastCompositionTime: Date.now(),
    }
  },
  watch: {
    value (val) {
      this.text = val
    },
    text (val) {
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
.jt-input-search {
  box-sizing: border-box;
  display: inline-block;
  margin: 4px;
  min-width: 100px;
  vertical-align: top;
}
.search-box {
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  border: solid 1px;
  border-radius: 100px;
  width: 100%;
  height: 24px;

  transition:
    color var(--jt-duration),
    border-color var(--jt-duration),
    background-color var(--jt-duration);
  color: var(--jt-text);
  background-color: var(--jt-bg-input);
  border-color: var(--jt-bg-input-border);
  &.not-empty {
    background-color: var(--jt-bg-input-warning);
  }
  &:focus {
    transition: background-color 0.1s;
    background-color: hsl(0, 0%, 100%);
  }
  &:focus-within {
    border-color: var(--jt-primary);
  }

  input[type="text"] {
    box-sizing: border-box;
    vertical-align: top;
    border: none;
    width: 100%;
    height: 22px;
    line-height: 22px;
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
    border-radius: 10px;
    font-size: 14px;
    color: inherit;
    background-color: transparent;
  }
}

.icon {
  box-sizing: border-box;
  position: absolute;
  width: 18px;
  height: 18px;
  background-size: 12px 12px;
  background-position: 3px 3px;
  background-repeat: no-repeat;
  margin: 2px;
  border-radius: 9999px;
  line-height: 14px;
  text-align: center;

  &.clear {
    right: 0;
    transition: background-color 0.15s, opacity 0.15s;
    &:hover {
      background-color: var(--jt-bg-menu-hover);
    }
    &:active {
      background-color: var(--jt-bg-menu-active);
    }

    &.hide {
      opacity: 0;
      pointer-events: none;
    }
  }
}

</style>
