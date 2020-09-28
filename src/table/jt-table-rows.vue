<template>
  <div class="jt-table-rows">
    <template v-for="(row, index) in list">
      <!-- normal row -->
      <tr :key="'row-' + index" :class="{ striped: striped && (index % 2 == 1) }">
        <!-- expanding button cell -->
        <td v-if="expandColumn">
          <jt-button type="flat" squared @click="row.$expanded = !row.$expanded">
            <jt-icon :name="row.$expanded ? 'triangleDown' : 'triangleRight'"></jt-icon>
          </jt-button>
        </td>
        <!-- normal cells -->
        <td v-for="(column, cIndex) in columns" :key="cIndex" :style="{
          paddingLeft: 6 + (cIndex == 0 ? level * 16 : 0) + 'px',
        }">
          <jt-icon clickable class="icon-expand-children"
            v-if="isTreeTable && row[treeChildrenKey] && cIndex == 0"
            :name="row.$expandedChildren ? 'minus' : 'plus'"
            @click="row.$expandedChildren = !row.$expandedChildren"
          ></jt-icon
          ><jt-table-cell :index="index" :row="row" :column="column"></jt-table-cell>
        </td>
      </tr>
      <!-- expandable row -->
      <!-- <jt-fold-transition :key="'expandable-' + index"> -->
      <tr v-if="expandColumn && row.$expanded" :key="'expandable-' + index">
        <td :colspan="columns.length + 1">
          <jt-table-cell :index="index" :row="row" :column="expandColumn"></jt-table-cell>
        </td>
      </tr>
      <!-- </jt-fold-transition> -->
      <!-- children rows -->
      <jt-table-rows
        v-if="isTreeTable && row[treeChildrenKey] && row.$expandedChildren" :key="'children-' + index"
        :list="row[treeChildrenKey]" :level="level + 1"
        :columns="columns" :expandColumn="expandColumn"
        :striped="striped" :is-tree-table="isTreeTable" :tree-children-key="treeChildrenKey"
      ></jt-table-rows>
    </template>
  </div>
</template>

<script>
import JtTableRows from './jt-table-rows.vue'
import JtTableCell from './jt-table-cell.vue'

export default {
  name: 'JtTableRows',
  components: {
    JtTableRows,
    JtTableCell,
  },
  props: {
    level: { type: Number, default: 0 },
    list: { type: Array, required: true },
    columns: { type: Array, default: [] },
    expandColumn: { type: Object, default: null },
    striped: { type: Boolean, default: false },
    isTreeTable: { type: Boolean, default: false, },
    treeChildrenKey: { type: String, default: 'children' },
  },
}
</script>

<style lang="scss" scoped>
.jt-table-rows {
  display: contents;
}
.icon-expand-children {
  margin-right: 2px;
}
</style>
