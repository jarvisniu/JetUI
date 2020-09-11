<template>
  <div>
    <div
      class="line" :class="{ 'leaf': isLeaf }"
      @click="data.open = !data.open"
    >
      <div class="selection"></div>
      <span v-if="!data.children">
        <svg
          viewBox="0 0 12 12" width="12" height="12"
          class="svg-icon" :class="{ open: data.open }">
          <path d="M1.5,1.5 L10.5,1.5 L10.5,10.5 L1.5,10.5 Z M4,4.5 L8,4.5 M4,7.5 L8,7.5"></path>
        </svg>
      </span>
      <span v-else>
        <svg
          viewBox="0 0 12 12" width="12" height="12"
          class="svg-icon" :class="{ open: data.open }">
          <path d="M3.5,1 L8.5,6.0 L3.5,11"></path>
        </svg>
      </span
      ><span class="label">{{ data.name }}</span>
    </div>
    <div v-if="data.open" class="children">
      <jt-tree-item
        v-for="(item, index) in data.children" :key="index"
        :data="item" class="child"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'JtTreeItem',
  props: {
    data: { type: Object, required: true },
  },
  computed: {
    isLeaf() {
      return this.data.children == null || this.data.children.length === 0
    },
  },
}
</script>

<style lang="scss" scoped>
.tree {
  width: 200px;
  min-height: 200px;
  border: solid 1px silver;
  font-size: 14px;
  user-select: none;
  font-family: consolas, sans-serif;
  overflow-x: hidden;
}
.line {
  cursor: default;
  padding: var(--jt-tree-item-padding);
  position: relative;
  z-index: 0;

  // &.leaf {
    // margin-left: 1em; // Used when have directory icon
  // }

  .selection {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin-left: -9999px;
    transition: background-color 0.2s;
  }
  &:hover .selection {
    background-color: var(--jt-bg-menu-hover);
  }
  &:active .selection {
    transition: background-color 0.02s;
    background-color: var(--jt-bg-menu-active);
  }
}
.child {
  margin-left: calc(0.5em + var(--jt-tree-item-padding) - 0.5px);
  border-left: solid 1px silver;
}
.svg-icon {
  display: inline-block;
  stroke: currentColor;
  fill: none;
  vertical-align: top;
  transition: transform 0.2s;
  width: 12px;
  height: 12px;
  margin: calc((1em - 12px) / 2);
  &.open {
    transform: rotateZ(90deg);
  }
}
.label {
  margin-left: 2px;
}
</style>
