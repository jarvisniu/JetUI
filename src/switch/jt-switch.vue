<template>
  <label
    class="jt-switch"
    :class="{
      selected: on,
      disabled: disabled,
      'align-left': align == 'left',
      'align-right': align == 'right',
    }"
    :style="{display: inline ? 'inline-block' : 'block'}"
  >
    <input type="checkbox" v-model="on"
    ><span class="indicator">
      <div class="inner-label" :class="{hide: !on}">
        {{ onLabel }}
      </div>
      <div class="inner-label" :class="{hide: on}">
        {{ offLabel }}
      </div>
    </span
    ><span class="label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'JtSwitch',
  props: {
    value: { type: Boolean, required: true },
    label: { type: String, required: true },
    inline: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    align: { type: String, default: 'left' }, // valid: right
    onLabel: { type: String, default: '' },
    offLabel: { type: String, default: '' },
  },
  data() {
    return {
      on: this.value,
    }
  },
  watch: {
    value(val) {
      this.on = val
    },
    on(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="scss" scoped>
.jt-switch {
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;

  input[type="checkbox"] {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    z-index: -1;
    width: 16px;
    height: 16px;
  }

  .indicator {
    position: relative;
    display: inline-block;
    background-color: var(--jt-bg-button);
    margin-left: -30px;
    height: 18px;
    vertical-align: top;
    min-width: 30px;
    width: auto;
    border-radius: 999px;
    user-select: none;
    transition: background-color var(--jt-duration);

    &:before {
      position: absolute;
      display: block;
      content: '';
      width: 14px;
      height: 14px;
      margin: 2px;
      background-color: var(--jt-bg-container);
      border-radius: 999px;
      border: solid 1px var(--jt-border);
      left: 0;
      transition: left var(--jt-duration);
    }
  }

  .inner-label {
    font-size: 12px;
    line-height: 18px;
    margin-left: 19px;
    margin-right: 6px;

    &.hide {
      line-height: 0;
      visibility: hidden;
    }
  }

  .label {
    vertical-align: top;
    line-height: 18px;
    margin-left: 10px;
  }

  // interactive
  // TODO: Why is this not working
  // & {
    .jt-indicator:hover {
      background-color: var(--jt-bg-button-hover);
    }
  // }
  &:active {
    .jt-indicator {
      background-color: var(--jt-bg-button-active);
    }
  }

  // disabled
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  // selected
  &.selected {
    .indicator {
      background-color: var(--jt-primary);
      &:before {
        left: calc(100% - 18px);
      }
    }
    .inner-label {
      margin-left: 6px;
      margin-right: 19px;
    }
  }

  // align
  &.align-right {
    padding-right: 30px;
    padding-left: 0;

    .label {
      margin-right: 10px;
      margin-left: 0;
    }

    .indicator {
      float: right;
      margin-right: -30px;
      margin-left: 0;
    }
  }
}
</style>
