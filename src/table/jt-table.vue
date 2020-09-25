// 表格：类似于el-table。
// 不用el-table是因为prop只能传字符串，不能传function，所以不能对数据进行二次加工。
// 支持：排序
// 不支持(希望支持，但太难，不会)：自定义列模板、展开行。

<template>
  <div class="jt-table jt-util-container">
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
          :class="{ sortable: isColumnSortable(column) }"
          @click="onClickHead(index)"
        >
          <span>{{column.componentOptions.propsData.label}}</span>
          <jt-icon class="sort-icon" size="16" :name="getSortIconName(index)"></jt-icon>
        </th>
      </tr>
      <!-- rows -->
      <template v-for="(row, index) in sortedList">
        <!-- normal row -->
        <tr :key="'row-' + index">
          <!-- expanding button cell -->
          <td v-if="expandColumn">
            <jt-button @click="row.$expanded = !row.$expanded">
              <jt-icon :name="row.$expanded ? 'triangleUp' : 'triangleDown'"></jt-icon>
            </jt-button>
          </td>
          <!-- normal cells -->
          <td v-for="(column, cIndex) in columns" :key="cIndex">
            <jt-table-cell :index="index" :row="row" :column="column"></jt-table-cell>
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
      </template>
    </table>
  </div>
</template>

<script>
import _sortBy from 'lodash/sortBy'
import _findIndex from 'lodash/findIndex'

import JtTableCell from './jt-table-cell.vue'

export default {
  name: 'JtTable',
  components: {
    JtTableCell,
  },
  props: {
    data: { type: Array, required: true },
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
    sortedList () {
      if (this.sortDirection === 0 || this.sortColumnIndex === -1) {
        return this.data
      }

      const sorted = _sortBy(this.data, (row) => this.getCellContentAtColumn(row, this.columns[this.sortColumnIndex]))
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
    this.sortColumnIndex = _findIndex(this.columns, this.isColumnSortable)
    // console.log('sortColumnIndex', this.sortColumnIndex)
    this.data.forEach((item, index) => {
      this.$set(item, '$expanded', false)
    })
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
      let val = column.componentOptions.propsData.sortable
      return val === true || val === ''
    },
    getCellContentAtColumn (row, column) {
      let prop = column.componentOptions.propsData.prop
      if (typeof prop === 'string') {
        return row[prop]
      } else if (typeof prop === 'function') {
        return prop(row)
      } else if (prop == null) {
        let spareChildren = column.componentOptions.children
        return (spareChildren[0] && spareChildren[0].text) || '-'
      }
    },
    getColumnWidth (column) {
      let widthProp = column.componentOptions.propsData.width
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
        return 'triangleDown'
      } else if (this.sortDirection === 1) {
        return 'triangleUp'
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

<style lang="scss" scoped>
.jt-table {
  color: var(--jt-text);
  line-height: 16px;

  table {
    width: 100%;
  }
  table, th, td {
    border-collapse: collapse;
    border: solid 1px var(--jt-border);
  }
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
  }
  th, td {
    padding: 4px 6px;
  }
}

.sort-icon {
  float: right;
}
</style>
