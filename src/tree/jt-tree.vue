<template>
  <div class="jt-tree" :style="{
    '--jt-tree-item-padding': itemPadding + 'px',
  }">
    <jt-tree-item v-for="(item, index) in data" :key="index" :data="item" />
  </div>
</template>

<script>
import JtTreeItem from './jt-tree-item.vue'

export default {
  name: 'JtTree',
  components: {
    JtTreeItem,
  },
  props: {
    data: { type: Array, required: true },
    itemPadding: { type: [Number, String], default: 3 },
  },
}
</script>

<style lang="scss" scoped>
.jt-tree {
  width: 200px;
  min-height: 200px;
  border: solid 1px var(--jt-border);
  background-color: var(--jt-bg-container);
  line-height: 1;
  user-select: none;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
