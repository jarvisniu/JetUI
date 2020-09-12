<template>
  <div class="jt-tree-table jt-util-container">
    <table>
      <tr>
        <th style="width: 200px;">Full Name</th>
        <th style="width: 80px;">Nickname</th>
        <th style="width: 100px;">GitHub</th>
        <th style="width: 100px;">Twitter</th>
        <th>Works</th>
      </tr>
      <!-- Level 1 -->
      <template v-for="(item, index0) in data">
        <tr :key="index0" class="level-0">
          <td>
            <jt-icon
              :name="item.expanded ? 'minus' : 'plus'"
              style="cursor: pointer; margin-right: 4px;"
              @click.native="item.expanded = !item.expanded"
            ></jt-icon
            ><span>{{ item.fullName }}</span>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <!-- Level 2 -->
        <template v-if="item.children && item.expanded">
          <template v-for="(item, index1) in item.children">
            <tr :key="index0 + '-' + index1" class="level-1">
              <td>{{ item.fullName }}</td>
              <td>{{ item.nickname }}</td>
              <td>
                <a :href="`https://github.com/${item.github}`" target="_blank">
                  {{ item.github }}
                </a>
              </td>
              <td>
                <a :href="`https://twitter.com/${item.twitter}`" target="_blank">
                  {{ item.twitter }}
                </a>
              </td>
              <td>{{ item.works.join(', ') }}</td>
            </tr>
          </template>
        </template>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  name: 'JtTreeTable',
  props: {
    data: { type: Array, required: true },
  },
  mounted() {
    for(let i = 0; i < this.data.length; i++) {
      this.$set(this.data[i], 'expanded',  true)
    }
  },
}
</script>

<style lang="scss" scoped>
.jt-tree-table {
  line-height: 16px;
  color: var(--jt-text);

  table {
    width: 100%;
  }
  table, th, td {
    border-collapse: collapse;
    border: solid 1px var(--jt-border);
  }
  tr.level-0 {
    background-color: var(--jt-bg-container);
  }
  th {
    background-color: var(--jt-bg-container-dark);
    text-align: left;
  }
  th, td {
    padding: 4px 6px;
  }
  tr.level-0 td {
    font-weight: bold;
  }
  tr.level-1 td:first-child {
    padding-left: 24px;
  }
}
</style>
