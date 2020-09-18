// Label

<template>
  <div
    class="jt-label jt-inline-component"
    :style="{
      margin: convertSizeToCSS(margin),
      width: convertSizeToCSS(width),
      fontWeight: b || bold ? 'bold' : 'normal',
      fontStyle: i || italic ? 'italic' : 'normal',
      textDecoration:
        (u || underline ? 'underline' : '') + ' ' +
        (s || strikethrough ? 'line-through' : '') + ' ' +
        (o || overline ? 'overline' : ''),
    }">
    <slot></slot>
  </div>
</template>

<script>
import { convertSizeToCSS } from '../utils'

export default {
  name: 'JtLabel',
  props: {
    margin: { type: [Number, String], default: '' },
    width: { type: [Number, String], default: '' },
    b: { type: Boolean, default: false },
    bold: { type: Boolean, default: false },
    i: { type: Boolean, default: false },
    italic: { type: Boolean, default: false },
    u: { type: Boolean, default: false },
    underline: { type: Boolean, default: false },
    s: { type: Boolean, default: false },
    strikethrough: { type: Boolean, default: false },
    o: { type: Boolean, default: false },
    overline: { type: Boolean, default: false },
  },
  methods: {
    convertSizeToCSS,
  },
}
</script>

<style lang="scss" scoped>
.jt-label {
  box-sizing: border-box;
  display: inline-block;
  color: var(--jt-text);
	font-family: inherit;
  font-size: 14px;
  user-select: none;
  height: 24px;
  line-height: 24px;
  padding: 0 6px;
}
</style>
