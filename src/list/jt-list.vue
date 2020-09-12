<docs>
List
</docs>

<template>
  <div class="jt-list">
    <div
      v-for="(item, i) in data" :key="i"
      :class="{ selected: i == value }"
      class="jt-list-item"
      @click="$emit('input', i)"
    >
      <template v-if="prop">{{ prop ? item[prop] : item }}</template>
      <slot v-else name="item" :$index="i" :item="item">{{ prop ? item[prop] : item }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JtList',
  props: {
    data: { type: Array, required: true },
    value: { type: Number, default: -1 },
    prop: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.jt-list {
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  font-size: 14px;
  color: var(--jt-text);
  user-select: none;
  background-color: var(--jt-bg-container);
}
.jt-list-item {
  height: 24px;
  padding: 0 6px;
  line-height: 24px;
  -webkit-tap-highlight-color: transparent;
  &:not(:last-child) {
    border-bottom: solid 1px var(--jt-border);
  }

  background-color: var(--jt-bg-menu);
  transition: color var(--jt-duration), background-color var(--jt-duration), border-color var(--jt-duration);
  &:hover {
    @media (hover: hover) {
      background-color: var(--jt-bg-menu-hover);
    }
  }
  &:active {
    background-color: var(--jt-bg-menu-active);
    transition: background-color var(--jt-duration-active), border-color var(--jt-duration-active);
  }

  &.selected {
    background-color: var(--jt-bg-menu-selected);
    &:hover {
      background-color: var(--jt-bg-menu-selected-hover);
    }
    &:active {
      background-color: var(--jt-bg-menu-selected-active);
    }
  }
}
</style>
