<template>
  <div class="page-app">
    <jt-border all style="height: 100%">
      <jt-panel title="Standard Libraries">
        <div slot="control">
          <!-- Panel Buttons -->
          <jt-panel-button @click="load">Load</jt-panel-button>
          <jt-panel-button @click="save">Save</jt-panel-button>
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
                  <jt-input flat width="40%" style="margin-right: 4px" v-model="scope.row.name"></jt-input>
                  <jt-input flat width="60%" style="margin-right: 4px" v-model="scope.row.enName"></jt-input>
                </div>
                <div style="display: flex; padding-top: 4px">
                  <jt-input flat style="flex: 1; margin: 0 4px" v-model="scope.row.desc"></jt-input>
                </div>
              </div>
            </jt-table-column>
            <!-- Package Names -->
            <jt-table-column label="Package Names" width="auto">
              <div slot-scope="scope" style="width: 100%">
                <!-- 第一行：Go, Python, Julia -->
                <div style="display: flex; width: 100%">
                  <img class="lang-icon" :src="iconGo">
                  <jt-input flat v-model="scope.row.go" class="flex-grow"></jt-input>
                  <img class="lang-icon" :src="iconPython">
                  <jt-input flat v-model="scope.row.python" class="flex-grow"></jt-input>
                  <img class="lang-icon" :src="iconJulia">
                  <jt-input flat v-model="scope.row.julia" class="flex-grow"></jt-input>
                  <img class="lang-icon" :src="iconLua">
                  <jt-input flat v-model="scope.row.lua" class="flex-grow"></jt-input>
                  <img class="lang-icon" :src="iconSwift">
                  <jt-input flat v-model="scope.row.swift" class="flex-grow"></jt-input>
                </div>
                <!-- 第二行：Java, .NET -->
                <div style="display: flex; width: 100%; margin-top: 4px">
                  <img class="lang-icon" :src="iconNode">
                  <jt-input flat v-model="scope.row.node" class="flex-grow"></jt-input>
                  <img class="lang-icon" :src="iconNet">
                  <jt-input flat v-model="scope.row.net" class="flex-grow"></jt-input>
                  <img class="lang-icon" :src="iconJava">
                  <jt-input flat v-model="scope.row.java" class="flex-grow"></jt-input>
                  <img class="lang-icon" :src="iconRust">
                  <jt-input flat v-model="scope.row.rust" class="flex-grow"></jt-input>
                  <img class="lang-icon" :src="iconRaku">
                  <jt-input flat v-model="scope.row.raku" class="flex-grow"></jt-input>
                </div>
              </div>
            </jt-table-column>
            <!-- Operations -->
            <jt-table-column label="Delete" :width="80" align="center">
              <div slot-scope="scope">
                <div>
                  <jt-button icon="close" @click="remove(scope)"></jt-button>
                  <jt-button icon="triangleUp"
                    :disabled="scope.index == 0" @click="moveUp(scope)"
                  ></jt-button>
                </div>
                <div style="margin-top: 4px">
                  <jt-button icon="plus" @click="addChild(scope.row)"></jt-button>
                  <jt-button icon="triangleDown"
                    :disabled="scope.index == scope.parentList.length - 1"
                    @click="moveDown(scope)"
                  ></jt-button>
                </div>
              </div>
            </jt-table-column>
          </jt-table>
        </div>
      </jt-panel>
    </jt-border>
</div>
</template>

<script>
import _clone from 'lodash/clone'
import _cloneDeep from 'lodash/cloneDeep'
import treeProcessor from '../../src/tree-processor'
const langs = ['go', 'python', 'julia', 'node', 'net', 'java', 'lua', 'rust', 'raku', 'swift']

export default {
  data() {
    return {
      iconPython: 'http://cdn.niujunwei.com/docs-data/logos/python.png',
      iconJulia: 'http://cdn.niujunwei.com/docs-data/logos/julia.png',
      iconGo: 'http://cdn.niujunwei.com/docs-data/logos/go.png',
      iconNode: 'http://cdn.niujunwei.com/docs-data/logos/node-js.png',
      iconNet: 'http://cdn.niujunwei.com/docs-data/logos/dotnet.png',
      iconJava: 'http://cdn.niujunwei.com/docs-data/logos/java.png',
      iconLua: 'http://cdn.niujunwei.com/docs-data/logos/lua.png',
      iconRust: 'http://cdn.niujunwei.com/docs-data/logos/rust.png',
      iconRaku: 'http://cdn.niujunwei.com/docs-data/logos/raku.svg',
      iconSwift: 'http://cdn.niujunwei.com/docs-data/logos/swift.png',
      treeData: [],
      oldIdNodeMap: {},
    }
  },
  methods: {
    async load() {
      const resp = await fetch('//niujunwei.com/api/standard-libraries')
      const list = await resp.json()
      const rootList = []
      const idNodeMap = {}
      list.forEach((node) => {
        node.children = node.children || []
        node.$expandedChildren = false
        for (let lang of langs) {
          node[lang] = node[lang] || ''
        }
        idNodeMap[node.id] = node
        if (node.parentId == null) {
          rootList.push(node)
        } else if (node.parentId && idNodeMap[node.parentId]) {
          idNodeMap[node.parentId].children.push(node)
        }
      })
      this.treeData = rootList
      this.snapshot()
    },
    snapshot() {
      this.oldIdNodeMap = {}
      treeProcessor.traverse(this.treeData, ({node}) => {
        this.oldIdNodeMap[node.id] = _clone(node)
      })
    },
    async save() {
      await treeProcessor.traverse(this.treeData, async ({node, parent}) => {
        if (node.id == null) {
          // 新建的
          const cloneNode = this.cloneAndWash(node, parent)
          node.id = await this.add(cloneNode)
        } else {
          // 修改的
          if (!this.isNodeSame(node, this.oldIdNodeMap[node.id])) {
            const cloneNode = this.cloneAndWash(node, parent)
            await this.edit(cloneNode)
          }
          delete this.oldIdNodeMap[node.id]
        }
      })
      // 删除的
      for (let id of Object.keys(this.oldIdNodeMap)) {
        await this.delete(id)
      }
      this.snapshot()
    },
    cloneAndWash(node, parent) {
      const cloneNode = _clone(node)
      if (parent) cloneNode.parentId = parent.id
      delete cloneNode['children']
      delete cloneNode['$expandedChildren']
      for (let lang of langs) {
        if (cloneNode[lang] === '') delete cloneNode[lang]
      }
      return _cloneDeep(cloneNode)
    },
    async add(node) {
      const resp = await fetch('//niujunwei.com/api/standard-libraries', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(node),
      })
      const data = await resp.json()
      return data.id
    },
    async edit(node) {
      const resp = await fetch('//niujunwei.com/api/standard-libraries/' + node.id, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(node),
      })
    },
    async delete(id) {
      const resp = await fetch('//niujunwei.com/api/standard-libraries/' + id, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
      })
    },
    isNodeSame(node1, node2) {
      let same = true
      for (let lang of langs) {
        if (node1[lang] !== node2[lang]) {
          same = false
          break
        }
      }
      ;['name', 'enName', 'desc', 'parentId'].forEach(key => {
        if (node1[key] !== node2[key]) same = false
      })
      return same
    },
    loadJson() {
      const treeData = JSON.parse(this.$refs.textarea.value)
      treeProcessor.traverse(treeData, ({node}) => {
        node.children = node.children || []
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
