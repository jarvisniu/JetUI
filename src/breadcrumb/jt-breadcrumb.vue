<template>
  <div class="jt-breadcrumb">
    <div
      class="breadcrumb-item"
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
.jt-breadcrumb {
  display: inline-flex;
  font-size: 14px;
  line-height: 24px;
  user-select: none;

  .breadcrumb-item {
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
      border-left: solid 7px var(--jt-bg-menu);
      vertical-align: top;
      transition: color var(--jt-duration), border-color var(--jt-duration), border-color var(--jt-duration);
      background-color: transparent;
    }

    transition: color var(--jt-duration), background-color var(--jt-duration), border-color var(--jt-duration);
    color: var(--jt-text);
    background-color: var(--jt-bg-menu);
    &:hover {
      background-color: var(--jt-bg-menu-hover);
    }
    &:active {
      background-color: var(--jt-bg-menu-active);
    }
    &.selected {
      background-color: var(--jt-bg-menu-selected);
    }
    &:hover:after {
      border-left-color: var(--jt-bg-menu-hover);
    }
    &:active:after {
      border-left-color: var(--jt-bg-menu-active);
    }
    &.selected:after {
      border-left-color: var(--jt-bg-menu-selected);
    }
  }
}
</style>
