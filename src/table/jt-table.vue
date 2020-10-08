// 表格：类似于el-table。
// 不用el-table是因为prop只能传字符串，不能传function，所以不能对数据进行二次加工。
// 支持：排序
// 不支持(希望支持，但太难，不会)：自定义列模板、展开行。

<template>
  <div class="jt-table" :class="{ striped: striped }">
    <slot></slot>
    <table>
      <!-- column width -->
      <colgroup>
        <col v-if="expandColumn" :width="getColumnWidth(expandColumn)"/>
        <col
          v-for="(column, index) in columns"
          :key="index"
          :width="getColumnWidth(column)"
        />
      </colgroup>
      <!-- header -->
      <tr>
        <th v-if="expandColumn"></th>
        <th
          v-for="(column, index) in columns"
          :key="index"
          :class="{
            sortable: isColumnSortable(column),
          }"
          @click="onClickHead(index)"
        >
          <div
            class="jt-table-th-wrapper"
            :class="`align-${column.componentInstance.align}`"
          >
            <div class="jt-table-th-cell">{{column.componentInstance.label}}</div>
            <jt-icon
              v-show="getSortIconName(index)"
              class="sort-icon"
              :name="getSortIconName(index)"
            ></jt-icon>
          </div>
        </th>
      </tr>
      <!-- rows -->
      <jt-table-rows
        :is-tree-table="!!tree"
        :tree-children-key="myTreeChildrenKey"
        :list="sortedList"
        :columns="columns"
        :expand-column="expandColumn"
        :striped="striped"
      ></jt-table-rows>
    </table>
  </div>
</template>

<script>
import _sortBy from 'lodash/sortBy'
import _findIndex from 'lodash/findIndex'

import treeProcessor from '../tree-processor.js'

import JtTableRows from './jt-table-rows.vue'

export default {
  name: 'JtTable',
  components: {
    JtTableRows,
  },
  props: {
    data: { type: Array, required: true },
    tree: { type: [Boolean, String], default: false },
    striped: { type: Boolean, default: false },
  },
  data () {
    return {
      columns: [],
      expandColumn: null,
      sortColumnIndex: -1,
      sortDirection: -1,
    }
  },
  computed: {
    myTreeChildrenKey() {
      return typeof this.tree == 'string' ? this.tree : 'children'
    },
    sortedList () {
      if (this.sortDirection === 0 || this.sortColumnIndex === -1) {
        return this.data
      }

      const sorted = _sortBy(this.data, (row) => {
        return this.getCellContentAtColumn(row, this.columns[this.sortColumnIndex])
      })
      if (this.sortDirection === -1) {
        return sorted
      } else if (this.sortDirection === 1) {
        return sorted.reverse()
      }
    },
  },
  mounted () {
    this.columns = this.$slots.default.filter(item => {
      const opts = item.componentOptions
      const inst = item.componentInstance
      const isTableColumn = opts && opts.tag === 'jt-table-column'
      if (isTableColumn) {
        if (inst && inst.$attrs.type === 'expandable') {
          this.expandColumn = item
          return false
        } else {
          return true
        }
      }
    })
    // console.log('table columns', this.columns)
    this.sortColumnIndex = _findIndex(this.columns, this.isColumnSortable)
    // console.log('sortColumnIndex', this.sortColumnIndex)
    treeProcessor.traverse(this.data, ({ node }) => {
      this.$set(node, '$expandedRow', false)
      if (this.tree) this.$set(node, '$expandedChildren', false)
    }, this.myTreeChildrenKey)
  },
  methods: {
    onClickHead (index) {
      if (this.sortColumnIndex === index) {
        this.toggleSortDirection()
      } else {
        if (this.isColumnSortable(this.columns[index])) {
          this.sortColumnIndex = index
          this.sortDirection = -1
        }
      }
    },
    isColumnSortable (column) {
      let val = column.componentInstance.sortable
      return val === true || val === ''
    },
    getCellContentAtColumn (row, column) {
      let prop = column.componentInstance.prop
      if (typeof prop === 'string') {
        return row[prop]
      } else if (typeof prop === 'function') {
        return prop({row: row})
      } else if (prop == null) {
        let spareChildren = column.componentOptions.children
        return (spareChildren[0] && spareChildren[0].text) || '-'
      }
    },
    getColumnWidth (column) {
      let widthProp = column.componentInstance.width
      if (widthProp > -1) {
        return widthProp
      } else {
        return 0
      }
    },
    getSortIconName (index) {
      if (this.sortColumnIndex !== index || this.sortDirection === 0) {
        return ''
      } else if (this.sortDirection === -1) {
        return 'triangleUp'
      } else if (this.sortDirection === 1) {
        return 'triangleDown'
      }
    },
    toggleSortDirection () {
      if (this.sortDirection === -1) {
        this.sortDirection = 1
      } else if (this.sortDirection === 1) {
        this.sortDirection = 0
      } else {
        this.sortDirection = -1
      }
    },
  },
}
</script>

<style lang="scss">
.jt-table {
  color: var(--jt-text);
  line-height: 1;

  table {
    width: 100%;
  }
  table, th, td {
    border-collapse: collapse;
    border: solid 1px var(--jt-border);
  }
  th, td {
    padding: 4px 6px;
    // In <td></td>, use height as min-height
    height: 23px; // 33px with controls in
    vertical-align: middle;
    & > * {
      vertical-align: middle;
    }
  }
  // tr
  tr {
    transition: background-color var(--jt-duration);
    &:hover {
      background-color: var(--jt-bg-container-dark);
    }
    &.striped {
      background-color: var(--jt-bg-container-dark);
      &:hover {
        background-color: var(--jt-bg-container-darker);
      }
    }
  }
  // th
  th {
    text-align: left;
    user-select: none;

    transition: background-color var(--jt-duration);
    background-color: var(--jt-bg-container-dark);

    &.sortable {
      cursor: pointer;

      &:hover {
        @media (hover: hover) {
          background-color: var(--jt-bg-menu-hover);
        }
      }
      &:active {
        transition: background-color var(--jt-duration-active);
        background-color: var(--jt-bg-menu-active);
      }
    }

    .sort-icon {
      font-size: 1em;
    }
  }
  // td
  td {
    &.align-right {
      .jt-table-cell {
        justify-content: flex-end;
      }
    }
    &.align-center {
      .jt-table-cell {
        justify-content: center;
      }
    }
  }
}

// th-wrapper
.jt-table-th-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }

  .jt-table-th-cell {
    flex: 1;
  }
}
</style>
