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
      {{ prop ? item[prop] : item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'JtList',
  props: {
    data: { type: [Array, Object], required: true },
    value: { type: [Number, String], default: -1 },
    prop: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.jt-list {
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  user-select: none;
  background-color: var(--jt-bg-workspace);
}
.jt-list-item {
  height: 24px;
  padding: 0 6px;
  line-height: 24px;
  -webkit-tap-highlight-color: transparent;
  &:not(:last-child) {
    border-bottom: solid 1px var(--jt-border);
  }

  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
  &:hover {
    @media (hover: hover) {
      background-color: var(--jt-bg-button-hover);
    }
  }
  &:active {
    background-color: var(--jt-bg-button-active);
    transition: background-color 0.02s, border-color 0.02s;
  }

  &.selected {
    color: var(--jt-text-selected);
    background-color: var(--jt-bg-button-selected);
    &:hover {
      background-color: var(--jt-bg-button-selected-hover);
    }
    &:active {
      background-color: var(--jt-bg-button-selected-active);
    }
  }
}
</style>
