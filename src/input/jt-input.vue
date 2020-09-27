// Events:
// - `press-enter`: Filter the IME Enter keys.

<template>
  <div
    class="jt-input jt-inline-component"
    :style="{
      width: convertSizeToCSS(width),
    }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div
      class="jt-input-container"
      :class="{
        'not-empty': showNotEmpty && text !== '',
        'rounded': rounded,
      }"
      :style="{
        padding: convertSizeToCSS(padding),
      }"
    >
      <!-- prepend icon -->
      <div v-if="icon" class="icon">
        <jt-icon :name="icon" margin="2"></jt-icon>
      </div>
      <!-- append icon -->
      <div
        v-if="showClear"
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
        :type="type !== 'password' ? 'text' : 'password'"
        :style="{
          'padding-left': icon ? '16px' : rounded ? '4px' : '0',
          'padding-right': showClear ? '16px' : rounded ? '4px' : '0',
        }"
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
  name: 'JtInput',
  props: {
    value: { type: String, default: '' },
    width: { type: [Number, String], default: '' },
    padding: { type: [Number, String], default: '4' },
    icon: { type: String, default: '' },
    type: { type: String, default: '' }, // text, password
    rounded: { type: Boolean, default: false },
    showClear: { type: Boolean, default: false },
    showNotEmpty: { type: Boolean, default: false },
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
.jt-input {
  box-sizing: border-box;
  display: inline-block;
  font-size: 14px;
}
.jt-input-container {
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  border: solid 1px;
  width: 100%;
  // height: 24px;
  padding: 4px;
  line-height: 1em;
  vertical-align: top;

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

  &.rounded {
    border-radius: 999px;
  }

  input[type="text"],
  input[type="password"] {
    box-sizing: border-box;
    vertical-align: top;
    border: none;
    width: 100%;
    height: 1em;
    line-height: 1em;
    padding-left: 20px;
    outline: none;
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
  margin: -2px;
  line-height: 14px;
  text-align: center;

  .jt-input-container.rounded & {
    border-radius: 999px;
  }

  &.clear {
    right: 4px;
    transition: background-color 0.15s, opacity 0.15s;
    &:hover {
      @media (hover: hover) {
        background-color: var(--jt-bg-menu-hover);
      }
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
