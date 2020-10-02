<template>
  <div>
    <h2>Tree Table Editor</h2>
    <div class="row">
      <div class="left">
        <jt-border left top right>
          <jt-toolbar>
            <jt-button icon="plus" style="float: right" @click="addTopNode()"></jt-button>
          </jt-toolbar>
        </jt-border>
        <jt-table tree :data="treeData">
          <!-- Name -->
          <jt-table-column label="WebAPI" width="auto">
            <jt-input slot-scope="scope" width="100%" v-model="scope.row.name"></jt-input>
          </jt-table-column>
          <!-- Field1 -->
          <jt-table-column label="Field1" :width="100">
            <div slot-scope="scope">
              <jt-input v-model="scope.row.field1"></jt-input>
            </div>
          </jt-table-column>
          <!-- Field2 -->
          <jt-table-column label="Field2" prop="field2" :width="100">
            <div slot-scope="scope">
              <jt-input v-model="scope.row.field2"></jt-input>
            </div>
          </jt-table-column>
          <!-- Field2 -->
          <jt-table-column label="Field3" prop="field3" :width="100">
            <div slot-scope="scope">
              <jt-input v-model="scope.row.field3"></jt-input>
            </div>
          </jt-table-column>
          <!-- Operations -->
          <jt-table-column label="Op" :width="160" align="center">
            <div slot-scope="scope">
              <jt-button icon="plus" @click="addChild(scope.row)"></jt-button>
              <jt-button icon="close" @click="remove(scope)"></jt-button>
              <jt-button icon="triangleUp" :disabled="scope.index == 0" @click="moveUp(scope)"></jt-button>
              <jt-button icon="triangleDown" :disabled="scope.index == scope.parentList.length - 1" @click="moveDown(scope)"></jt-button>
            </div>
          </jt-table-column>
        </jt-table>
      </div>
      <div class="right">
        <textarea class="input-area" v-text="treeData"></textarea>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      treeData: [],
    }
  },
  methods: {
    newTreeNode() {
      return {
        $expandedRow: false,
        $expandedChildren: false,
        name: '',
        field1: '',
        field2: '',
        field3: '',
      }
    },
    addChild(node) {
      if (node.children == null) this.$set(node, 'children', [])
      node.children.push(this.newTreeNode())
      this.$set(node, '$expandedChildren', true)
    },
    remove({ parentList, index }) {
      parentList.splice(index, 1)
    },
    moveUp({ row, parentList, index }) {
      parentList.splice(index, 1)
      parentList.splice(index - 1, 0, row)
    },
    moveDown({ row, parentList, index }) {
      parentList.splice(index, 1)
      parentList.splice(index + 1, 0, row)
    },
    addTopNode() {
      this.treeData.push(this.newTreeNode())
    },
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  padding: 5px;

  .left {
    margin: 5px;
    width: 70%;
  }
  .right {
    margin: 5px;
    width: 30%;
  }
}
.input-area {
  padding: 5px;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 12px;
  font-family: var(--jt-font-monospace);
  border: solid 1px var(--jt-border);
  color: var(--jt-text);
  background-color: var(--jt-bg-container);
  resize: none;
}
</style>
