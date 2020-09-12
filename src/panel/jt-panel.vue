<docs>
Panel
</docs>

<template>
  <div class="jt-panel" tabindex="0"
    :style="{
      height: height == 0 ? '' : (fold ? '' : convertSizeToCSS(height)),
    }">
    <div class="jt-panel-title">
      <div class="jt-panel-slot-title">
        <slot name="title">
          <span class="default-title-label">{{ title }}</span>
        </slot>
      </div>
      <div class="jt-panel-slot-control">
        <slot name="control">
        </slot>
      </div>
    </div>
    <div class="jt-panel-body jt-util-container" :class="{fold: fold}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { convertSizeToCSS } from '../utils'

export default {
  name: 'JtPanel',
  props: {
    title: { type: String, default: '' },
    fold: { type: Boolean, default: false },
    height: { type: [Number, String], default: 0 },
  },
  methods: {
    convertSizeToCSS,
  },
}
</script>

<style lang="scss" scoped>
.jt-panel {
  width: 100%;
  height: 100%;
  min-width: 10px;
  min-height: 1px;
  outline: none;
  color: var(--jt-text);
  background-color: var(--jt-bg-container);
}
.jt-panel-title {
  box-sizing: border-box;
  display: flex;
  height: 24px;
  line-height: 24px;
  user-select: none;

  transition:
    color var(--jt-duration),
    background-color var(--jt-duration),
    border-color var(--jt-duration);
  color: var(--jt-text);
  background: var(--jt-bg-panel-title);

  .jt-panel:focus-within & {
    filter: sepia(25%) hue-rotate(10deg);
  }
  .default-title-label {
    padding: 0 6px;
    font-size: var(--jt-font-size);
  }
}
.jt-panel-body {
  height: calc(100% - 25px);
  overflow: auto;
  border-top: solid 1px var(--jt-border);

  &.fold {
    display: none;
  }
}
.jt-panel-slot-title {
  flex: 1;
  white-space: nowrap;
  font-size: 0; // remove the inline gap
}
.jt-panel-slot-control {
  flex: 0;
  white-space: nowrap;
  font-size: 0; // remove the inline gap
}
</style>
