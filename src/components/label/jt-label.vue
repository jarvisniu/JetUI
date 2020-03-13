<docs>
Label
</docs>

<template>
  <div
    class="jt-label"
    :style="{
      margin: convertSizeToCSS(margin),
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
	color: inherit;
	font-family: inherit;
  font-size: 14px;
  user-select: none;
  height: 24px;
  line-height: 24px;
  padding: 0 6px;
}
</style>
