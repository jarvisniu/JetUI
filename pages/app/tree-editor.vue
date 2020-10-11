<template>
  <div class="page-app">
    <div class="row">
      <div class="left">
        <jt-border all style="height: 100%">
          <jt-panel title="Tree Table Editor">
            <div slot="control">
              <jt-panel-button @click="addTopNode">
                <jt-icon name="plus"></jt-icon>
                <span>Add</span>
              </jt-panel-button>
            </div>
            <div style="padding: 10px; height: 100%; overflow-y: scroll;">
              <jt-table tree :data="treeData">
                <!-- Name -->
                <jt-table-column label="Name" width="300">
                  <div slot-scope="scope" style="display: flex; width: 100%">
                  <jt-label style="padding-left: 0; text-align: right">{{ scope.index + 1 }}.</jt-label>
                  <jt-input style="flex: 1" v-model="scope.row.name"></jt-input>
                  </div>
                </jt-table-column>
                <!-- Field1 -->
                <jt-table-column label="Field 1" width="auto">
                  <div slot-scope="scope" style="width: 100%">
                    <jt-input v-model="scope.row.field1" width="100%"></jt-input>
                  </div>
                </jt-table-column>
                <!-- Field2 -->
                <jt-table-column label="Field 2" prop="field2" width="150">
                  <div slot-scope="scope">
                    <jt-input v-model="scope.row.field2"></jt-input>
                  </div>
                </jt-table-column>
                <!-- Field2 -->
                <jt-table-column label="Field 3" prop="field3" width="150">
                  <div slot-scope="scope">
                    <jt-input v-model="scope.row.field3"></jt-input>
                  </div>
                </jt-table-column>
                <!-- Operations -->
                <jt-table-column label="Operations" :width="160" align="center">
                  <div slot-scope="scope">
                    <jt-button icon="plus" @click="addChild(scope.row)"></jt-button>
                    <jt-button icon="close" @click="remove(scope)"></jt-button>
                    <jt-button icon="triangleUp" :disabled="scope.index == 0" @click="moveUp(scope)"></jt-button>
                    <jt-button icon="triangleDown" :disabled="scope.index == scope.parentList.length - 1" @click="moveDown(scope)"></jt-button>
                  </div>
                </jt-table-column>
              </jt-table>
            </div>
          </jt-panel>
        </jt-border>
      </div>
      <div class="right">
        <jt-border top right bottom style="height: 100%">
          <jt-panel title="JSON">
            <div slot="control">
              <jt-panel-button @click="load">Load</jt-panel-button>
            </div>
            <textarea ref="textarea" class="input-area" :value="treeDataValue"></textarea>
          </jt-panel>
        </jt-border>
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
  computed: {
    treeDataValue() {
      return JSON.stringify(this.treeData, null, 2)
    },
  },
  methods: {
    load() {
      this.treeData = JSON.parse(this.$refs.textarea.value)
    },
    // node operations
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
.page-app {
  height: 100%;
}
.row {
  display: flex;
  height: 100%;

  .left {
    flex: 1;
  }
  .right {
    width: 100px;
  }
}
.input-area {
  padding: 5px;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 12px;
  font-family: var(--jt-font-monospace);
  // border: solid 1px var(--jt-border);
  border: none;
  color: var(--jt-text);
  background-color: var(--jt-bg-container);
  resize: none;
  vertical-align: top;
}
</style>
