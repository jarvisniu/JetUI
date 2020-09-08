<docs>
  表格：类似于el-table。
  不用el-table是因为prop只能传字符串，不能传function，所以不能对数据进行二次加工。
  支持：排序
  不支持(希望支持，但太难，不会)：自定义列模板、展开行。
</docs>

<template>
  <div class="jt-table">
    <slot></slot>
    <table>
      <tr>
        <th
          v-for="(column, index) in columns"
          :class="{ sortable: isSortablePropTrue(column) }"
          :style="{ width: getColumnWidth(column)}"
          @click="onClickHead(index)"
        >
          <span>{{column.componentOptions.propsData.label}}</span>
          <span>{{ getSortIconUrl(index) }}</span>
        </th>
      </tr>
      <tr v-for="item in sortedList">
        <td v-for="column in columns">{{getItemColumn(item, column)}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import _sortBy from 'lodash.sortby'
import _findIndex from 'lodash.findindex'

export default {
  name: 'JtTable',
  props: {
    data: { type: Array, required: true },
  },
  data () {
    return {
      columns: [],
      sortColumnIndex: -1,
      sortDirection: -1,
    }
  },
  computed: {
    sortedList () {
      if (this.sortDirection === 0 || this.sortColumnIndex === -1) {
        return this.data
      }

      const sorted = _sortBy(this.data, item => this.getItemColumn(item, this.columns[this.sortColumnIndex]))
      if (this.sortDirection === -1) {
        return sorted
      } else if (this.sortDirection === 1) {
        return sorted.reverse()
      }
    },
  },
  mounted () {
    this.columns = this.$slots.default.filter(item => {
      let opts = item.componentOptions
      return opts && opts.tag === 'jt-table-column'
    })
    this.sortColumnIndex = _findIndex(this.columns, this.isSortablePropTrue)
    // console.log('sortColumnIndex', this.sortColumnIndex)
  },
  methods: {
    onClickHead (index) {
      if (this.sortColumnIndex === index) {
        this.toggleSortDirection()
      } else {
        if (this.isSortablePropTrue(this.columns[index])) {
          this.sortColumnIndex = index
          this.sortDirection = -1
        }
      }
    },
    isSortablePropTrue (column) {
      let val = column.componentOptions.propsData.sortable
      return val === true || val === ''
    },
    getItemColumn (item, column) {
      let prop = column.componentOptions.propsData.prop
      if (typeof prop === 'string') {
        return item[prop]
      } else if (typeof prop === 'function') {
        return prop(item)
      } else if (typeof prop === 'undefined') {
        let spareChildren = column.componentOptions.children
        return (spareChildren[0] && spareChildren[0].text) || '-'
      }
    },
    getColumnWidth (column) {
      let widthProp = column.componentOptions.propsData.width
      if (widthProp > -1) {
        return widthProp + 'px'
      } else {
        return ''
      }
    },
    getSortIconUrl (index) {
      if (this.sortColumnIndex !== index || this.sortDirection === 0) {
        return ''
      } else if (this.sortDirection === -1) {
        return '↓'
      } else if (this.sortDirection === 1) {
        return '↑'
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
  table {
    width: 100%;
  }
  table, th, td {
    border-collapse: collapse;
    border: solid 1px var(--jt-border);
  }
  th {
    background-color: var(--jt-bg-container-dark);
    text-align: left;
    user-select: none;

    &.sortable {
      cursor: pointer;
    }
  }
  th, td {
    padding: 3px 6px;
  }
}
</style>
