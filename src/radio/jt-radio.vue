<template>
  <div
    class="jt-radio jt-inline-component"
    :class="{ inline: inline, disabled: disabled }"
    @click="$emit('input', value)"
  >
    <span class="indicator" :class="{ checked: boundVal == value }"></span
    ><span v-if="label"  class="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'JtRadio',
  model: {
    prop: 'boundVal'
  },
  props: {
    boundVal: { type: String, required: true },
    value: { type: String, required: true },
    label: { type: String, default: '' },
    inline: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>
.jt-radio {
  cursor: pointer;
  line-height: 1;
  user-select: none;
  padding: 4px;

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

.indicator {
  position: relative;
  display: inline-block;
  color: var(--jt-text);
  background-color: var(--jt-bg-indicator);
  border: solid 1px hsla(0, 0%, 50%, 0.4);
  width: 16px;
  height: 16px;
  vertical-align: top;
  border-radius: 999px;

  transition: border-color var(--jt-duration);
  &.checked {
    border-color: var(--jt-primary);

    &:before {
      background-color: var(--jt-primary);
      transform: scale(1);
    }
  }

  &:before {
    position: absolute;
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    margin: 2px;
    background-color: var(--jt-bg-container);
    border-radius: 999px;
    left: 0;
    transition: background-color var(--jt-duration), transform var(--jt-duration);
    transform: scale(0);
  }
}

.label {
  vertical-align: top;
  line-height: 16px;
  margin-left: 8px;
}
</style>
