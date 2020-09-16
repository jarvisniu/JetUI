<template>
  <div
    class="jt-checkbox jt-inline-component"
    :class="{ inline: inline, disabled: disabled }"
    @click="$emit('input', !boundVal)"
  >
    <span class="indicator" :class="{ checked: boundVal }"
    ><svg viewBox="0 0 16 16">
      <path d="M2,7.5 L7,12 L14,3" stroke-width="2.5" ></path>
    </svg
    ></span
    ><span v-if="label"  class="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'JtCheckbox',
  model: {
    prop: 'boundVal'
  },
  props: {
    boundVal: { type: Boolean, required: true },
    label: { type: String, default: '' },
    inline: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>
.jt-checkbox {
  cursor: pointer;
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
  border: solid 1px hsla(0, 0%, 50%, 0.4);
  width: 14px;
  height: 14px;
  margin: 1px;
  vertical-align: top;
  border-radius: 3px;
  background-color: var(--jt-bg-indicator);

  transition: border-color var(--jt-duration);
  &.checked {
    border-color: var(--jt-primary);
  }

  svg {
    width: 100%;
    width: 100%;
    vertical-align: top;
    background-color: var(--jt-primary);
    stroke: white;
    fill: none;
    opacity: 0;
    transition: opacity var(--jt-duration);
  }
  &.checked {
    svg {
      opacity: 1;
    }
  }
}

.label {
  vertical-align: top;
  line-height: 16px;
  margin-left: 8px;
}
</style>
