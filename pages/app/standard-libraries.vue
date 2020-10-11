<template>
  <div class="page-app">
    <div class="row">
      <div class="left">
        <jt-border all style="height: 100%">
          <jt-panel title="Standard Libraries">
            <div slot="control">
              <!-- Panel Buttons -->
              <jt-panel-button @click="expandAll">Expand All</jt-panel-button>
              <jt-panel-button @click="foldAll">Fold All</jt-panel-button>
              <jt-panel-button @click="addTopNode">
                <jt-icon name="plus"></jt-icon>
                <span>Add</span>
              </jt-panel-button>
            </div>
            <div style="padding: 10px; height: 100%; overflow-y: scroll;">
              <jt-table tree :data="treeData">
                <!-- Name -->
                <jt-table-column label="Name" :width="350">
                  <div slot-scope="scope" style="width: 100%">
                    <div style="display: flex;">
                      <jt-input width="40%" style="margin-right: 4px" v-model="scope.row.name"></jt-input>
                      <jt-input width="60%" style="margin-right: 4px" v-model="scope.row.enName"></jt-input>
                      <jt-button icon="triangleUp" :disabled="scope.index == 0" @click="moveUp(scope)"></jt-button>
                    </div>
                    <div style="display: flex; padding-top: 4px">
                      <jt-button icon="plus" @click="addChild(scope.row)"></jt-button>
                      <jt-input style="flex: 1; margin: 0 4px" v-model="scope.row.desc"></jt-input>
                      <jt-button icon="triangleDown" :disabled="scope.index == scope.parentList.length - 1" @click="moveDown(scope)"></jt-button>
                    </div>
                  </div>
                </jt-table-column>
                <!-- Package Names -->
                <jt-table-column label="Package Names" width="auto">
                  <div slot-scope="scope" style="width: 100%">
                    <!-- 第一行：Go, Python, Julia -->
                    <div style="display: flex; width: 100%">
                      <img class="lang-icon" :src="iconGo">
                      <jt-input v-model="scope.row.go" style="flex: 1"></jt-input>
                      <img class="lang-icon" :src="iconPython">
                      <jt-input v-model="scope.row.python" style="flex: 1"></jt-input>
                      <img class="lang-icon" :src="iconJulia">
                      <jt-input v-model="scope.row.julia" style="flex: 1"></jt-input>
                      <img class="lang-icon" :src="iconLua">
                      <jt-input v-model="scope.row.lua" style="flex: 1"></jt-input>
                      <img class="lang-icon" :src="iconSwift">
                      <jt-input v-model="scope.row.swift" style="flex: 1"></jt-input>
                    </div>
                    <!-- 第二行：Java, .NET -->
                    <div style="display: flex; width: 100%; margin-top: 4px">
                      <img class="lang-icon" :src="iconNode">
                      <jt-input v-model="scope.row.node" style="flex: 1"></jt-input>
                      <img class="lang-icon" :src="iconNet">
                      <jt-input v-model="scope.row.net" style="flex: 1"></jt-input>
                      <img class="lang-icon" :src="iconJava">
                      <jt-input v-model="scope.row.java" style="flex: 1"></jt-input>
                      <img class="lang-icon" :src="iconRust">
                      <jt-input v-model="scope.row.rust" style="flex: 1"></jt-input>
                      <img class="lang-icon" :src="iconRaku">
                      <jt-input v-model="scope.row.raku" style="flex: 1"></jt-input>
                    </div>
                  </div>
                </jt-table-column>
                <!-- Operations -->
                <jt-table-column label="Delete" :width="50" align="center">
                  <div slot-scope="scope">
                    <jt-button icon="close" @click="remove(scope)"></jt-button>
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
import treeProcessor from '../../src/tree-processor'
const langs = ['go', 'python', 'julia', 'node', 'net', 'java', 'lua', 'rust', 'raku', 'swift']

export default {
  data() {
    return {
      iconPython: 'http://cdn.niujunwei.com/docs-data/logos/python.png',
      iconJulia: 'http://cdn.niujunwei.com/docs-data/logos/julia.png',
      iconGo: 'http://cdn.niujunwei.com/docs-data/logos/go.png',
      iconNode: 'http://cdn.niujunwei.com/docs-data/logos/node-js.png',
      iconNet: 'http://cdn.niujunwei.com/docs-data/logos/dot-net.png',
      iconJava: 'http://cdn.niujunwei.com/docs-data/logos/java.png',
      iconLua: 'http://cdn.niujunwei.com/docs-data/logos/lua.png',
      iconRust: 'http://cdn.niujunwei.com/docs-data/logos/rust.png',
      iconRaku: 'http://cdn.niujunwei.com/docs-data/logos/raku.svg',
      iconSwift: 'http://cdn.niujunwei.com/docs-data/logos/swift.png',
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
      const treeData = JSON.parse(this.$refs.textarea.value)
      treeProcessor.traverse(treeData, ({node}) => {
        for (let lang of langs) {
          treeData[lang] = treeData[lang] || ''
        }
      })
      this.treeData = treeData
    },
    // node operations
    newTreeNode() {
      const node = {
        $expandedChildren: false,
        name: '',
        enName: '',
        desc: '',
      }
      for (let lang of langs) {
        node[lang] = ''
      }
      return node
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
    expandAll() {
      treeProcessor.traverse(this.treeData, ({node}) => {
        node.$expandedChildren = true
      })
    },
    foldAll() {
      treeProcessor.traverse(this.treeData, ({node}) => {
        node.$expandedChildren = false
      })
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
.lang-icon {
  width: 16px;
  height: 16px;
  margin: 4px;
}
</style>
