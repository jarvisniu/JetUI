<template>
  <div class="jt-table-rows">
    <template v-for="(row, index) in list">
      <!-- normal row -->
      <tr :key="'row-' + index" :class="{ striped: striped && (index % 2 == 1) }">
        <!-- expanding button cell -->
        <td v-if="expandColumn">
          <jt-button type="flat" squared @click="row.$expandedRow = !row.$expandedRow">
            <jt-icon :name="row.$expandedRow ? 'triangleDown' : 'triangleRight'"></jt-icon>
          </jt-button>
        </td>
        <!-- normal cells -->
        <td
          v-for="(column, cIndex) in columns" :key="cIndex"
          :class="`align-${column.componentInstance.align}`"
          :style="{
            paddingLeft: 6 + (cIndex == 0 ? level * 28 : 0) + 'px',
          }"
        >
          <div class="jt-table-cell-wrapper">
            <template v-if="isTreeTable && cIndex == 0">
              <jt-button squared type="flat" padding="0" class="expand-children-button"
                v-if="row[treeChildrenKey] && row[treeChildrenKey].length > 0"
                :icon="row.$expandedChildren ? 'minus' : 'plus'"
                @click="row.$expandedChildren = !row.$expandedChildren"
              ></jt-button>
              <jt-button disabled squared type="flat" padding="0"
                v-else
                class="expand-children-button" icon="dot"
              ></jt-button>
            </template
            ><jt-table-cell
              :index="index"
              :row="row"
              :column="column"
              :parent-list="list"
            ></jt-table-cell>
          </div>
        </td>
      </tr>
      <!-- expandable row -->
      <!-- <jt-fold-transition :key="'expandable-' + index"> -->
      <tr v-if="expandColumn && row.$expandedRow" :key="'expandable-' + index">
        <td :colspan="columns.length + 1">
          <jt-table-cell
            :index="index"
            :row="row"
            :column="expandColumn"
            :parent-list="list"
          ></jt-table-cell>
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
  methods: {
    getExpandChildrenIcon(row) {
      if (row[this.treeChildrenKey] && row[this.treeChildrenKey].length > 0) {
        return row.$expandedChildren ? 'minus' : 'plus'
      } else {
        return 'dot'
      }
    },
  },
}
</script>

<style lang="scss">
.jt-table-rows {
  display: contents;
}
.expand-children-button {
  margin-right: 4px;
}
.jt-table-cell-wrapper {
  display: flex;
  height: auto;

  * {
    vertical-align: middle;
  }
  .jt-table-cell {
    flex: 1;
  }
}
</style>
