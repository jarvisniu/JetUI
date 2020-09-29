<template>
  <div
    class="jt-switch jt-inline-component"
    :class="{ inline: inline, disabled: disabled }"
    @click="checked = !checked"
  >
    <div
      class="wrapper"
      :class="{
        checked: checked,
        'align-left': align == 'left',
        'align-right': align == 'right',
      }"
    >
      <span class="indicator">
        <div class="indicator-label" :class="{hide: !checked}">
          {{ onLabel }}
        </div>
        <div class="indicator-label" :class="{hide: checked}">
          {{ offLabel }}
        </div>
      </span
      ><span v-if="label"  class="label">{{ label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JtSwitch',
  props: {
    value: { type: Boolean, required: true },
    label: { type: String, default: '' },
    inline: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    align: { type: String, default: 'left' }, // valid: right
    onLabel: { type: String, default: '' },
    offLabel: { type: String, default: '' },
  },
  data() {
    return {
      checked: this.value,
    }
  },
  watch: {
    value(val) {
      this.checked = val
    },
    checked(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="scss" scoped>
.jt-switch {
  cursor: pointer;
  user-select: none;
  padding: 3px;
  line-height: 1;

  transition: background-color var(--jt-duration);
  // background-color: var(--jt-bg-menu);
  &:hover {
    @media (hover: hover) {
      background-color: var(--jt-bg-menu-hover);
    }
  }
  &:active {
    transition: background-color var(--jt-duration-active);
    background-color: var(--jt-bg-menu-active);
  }

  // disabled
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  // inline
  &.inline {
    display: inline-block;
  }
}

.wrapper {
  display: block;
  position: relative;
  cursor: pointer;
  padding-left: 30px;

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

.indicator {
  position: relative;
  display: inline-block;
  color: var(--jt-text);
  background-color: var(--jt-bg-button);
  box-shadow: 0 0 0 1px hsla(0, 0%, 50%, 0.4);
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
.wrapper.checked {
  .indicator {
    background-color: var(--jt-primary);
    &:before {
      left: calc(100% - 18px);
    }
  }
}
.indicator-label {
  font-size: 12px;
  line-height: 18px;
  margin-left: 19px;
  margin-right: 6px;

  transition: color var(--jt-duration);

  &.hide {
    line-height: 0;
    visibility: hidden;
  }
}
.wrapper.checked {
  .indicator-label {
    color: white;
    margin-left: 6px;
    margin-right: 19px;
  }
}

.label {
  vertical-align: top;
  line-height: 18px;
  margin-left: 8px;
}
</style>
