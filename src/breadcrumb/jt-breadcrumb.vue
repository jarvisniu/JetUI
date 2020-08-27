<template>
  <div class="nav-arrow">
    <div
      class="button"
      v-for="(label, index) in labels" :key="index"
      :class="{ selected: value === index }"
      @click="$emit('input', index)"
    >{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'JtBreadcrumb',
  props: {
    value: { type: Number, required: true },
    labels: { type: Array, required: true },
  },
}
</script>

<style lang="scss" scoped>
/* container */
.nav-arrow {
  display: inline-flex;
  font-size: 14px;
  line-height: 24px;
  user-select: none;

  .button {
    cursor: pointer;
    padding-left: 14px;
    padding-right: 4px;
    &:first-child {
      padding-left: 8px;
    }
    &:last-child {
      padding-right: 8px;
    }
    /* arrow */
    &:not(:last-child):after {
      position: absolute;
      content: '';
      margin-left: 4px;
      display: inline-block;
      width: 0px;
      height: 0;
      border-top: solid 12px transparent;
      border-bottom: solid 12px transparent;
      border-left: solid 7px var(--jt-bg-button);
      vertical-align: top;
      transition: color var(--jt-duration), border-color var(--jt-duration), border-color var(--jt-duration);
      background-color: transparent;
    }

    transition: color var(--jt-duration), background-color var(--jt-duration), border-color var(--jt-duration);
    color: var(--jt-text);
    background-color: var(--jt-bg-button);
    &:hover {
      background-color: var(--jt-bg-button-hover);
    }
    &:active {
      background-color: var(--jt-bg-button-active);
    }
    &.selected {
      background-color: var(--jt-bg-button-selected);
    }
    &:hover:after {
      border-left-color: var(--jt-bg-button-hover);
    }
    &:active:after {
      border-left-color: var(--jt-bg-button-active);
    }
    &.selected:after {
      border-left-color: var(--jt-bg-button-selected);
    }
  }
}
</style>
