<template>
  <div>
    <h1>Table</h1>

    <h2>Features</h2>
    <ul>
      <li>ElementUI like API</li>
      <li>Column `prop` prop as a function</li>
      <li>Column sortable</li>
      <li>Column width</li>
      <li>Customize columns</li>
      <li>Sort arrow icons</li>
      <li>Expandable rows</li>
      <li>Striped rows</li>
      <li>Tree table</li>
      <li>Column alignment</li>
    </ul>

    <h2>TODO</h2>
    <ul>
      <li>Default sort prop (sortable="default")</li>
      <li>Default descendent sort (sortable="desc")</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-table striped :data="basicTableData">
          <jt-table-column label="姓名" prop="name" :width="120" sortable></jt-table-column>
          <jt-table-column label="语文" prop="chinese" :width="80"  align="right" sortable></jt-table-column>
          <jt-table-column label="数学" prop="math" :width="80"  align="right" sortable></jt-table-column>
          <jt-table-column label="英语" prop="english" :width="80"  align="right" sortable></jt-table-column>
          <jt-table-column label="总分" :prop="scope => scope.row.chinese + scope.row.math + scope.row.english" sortable></jt-table-column>
        </jt-table>
      </template>
      <textarea slot="code">
        <script>
          basicTableData = [
            { name: '张三', chinese: 88, math: 98, english: 66 },
            { name: '李四', chinese: 62, math: 79, english: 61 },
            { name: '王五', chinese: 72, math: 105, english: 90 },
            { name: '赵六', chinese: 100, math: 34, english: 77 },
          ]
        </script>

        <jt-table striped :data="basicTableData">
          <jt-table-column label="姓名" prop="name" :width="120" sortable></jt-table-column>
          <jt-table-column label="语文" prop="chinese" :width="80"  align="right" sortable></jt-table-column>
          <jt-table-column label="数学" prop="math" :width="80"  align="right" sortable></jt-table-column>
          <jt-table-column label="英语" prop="english" :width="80"  align="right" sortable></jt-table-column>
          <jt-table-column label="总分" :prop="scope => scope.row.chinese + scope.row.math + scope.row.english" sortable></jt-table-column>
        </jt-table>
      </textarea>
    </jt-snippet>

    <h2>Expandable row</h2>
    <jt-snippet>
      <template>
        <jt-table :data="expandableTableData">
          <jt-table-column label="Full Name" prop="fullName" :width="200" sortable></jt-table-column>
          <jt-table-column label="Nickname" prop="nickname" :width="150"></jt-table-column>
          <jt-table-column label="Followers" prop="followers" sortable></jt-table-column>
          <!-- expandable -->
          <jt-table-column :width="25" type="expandable">
            <div slot-scope="scope">
              <jt-label>
                <b>Full Name: </b>
                <span>{{ scope.row.fullName }}</span>
              </jt-label>
              <jt-label>
                <b>GitHub: </b>
                <jt-link
                  :url="`https://github.com/${scope.row.github}`"
                >{{ scope.row.github }}</jt-link>
              </jt-label>
              <jt-label>
                <b>Twitter: </b>
                <jt-link
                  :url="`https://twitter.com/${scope.row.twitter}`"
                >{{ scope.row.twitter }}</jt-link>
              </jt-label>
              <jt-label>
                <b>Works: </b>
                <jt-button v-for="(work, index) in scope.row.works" :key="index">
                  {{ work }}
                </jt-button>
              </jt-label>
            </div>
          </jt-table-column>
        </jt-table>
      </template>
      <textarea slot="code">
        <script>
          expandableTableData = [
            { nickname: 'yyx', fullName: 'Evan You', github: 'yyx990803', twitter: 'youyuxi', works: ['Vue'], followers: 62800 },
            { nickname: 'tj', fullName: 'TJ Holowaychuk', github: 'tj', twitter: 'tjholowaychuk', works: ['Express', 'Pug', 'Stylus'], followers: 43700 },
            { nickname: 'mrdoob', fullName: 'Ricardo Cabello', github: 'mrdoob', twitter: 'mrdoob', works: ['Three.js'], followers: 14300 },
            { nickname: '-', fullName: 'John Resig', github: 'jeresig', twitter: 'jeresig', works: ['jQuery'], followers: 16000 },
          ]
        </script>

        <jt-table :data="expandableTableData">
          <jt-table-column label="Full Name" prop="fullName" :width="200" sortable></jt-table-column>
          <jt-table-column label="Nickname" prop="nickname" :width="150"></jt-table-column>
          <jt-table-column label="Followers" prop="followers" sortable></jt-table-column>
          <!-- expandable -->
          <jt-table-column :width="25" type="expandable">
            <div slot-scope="scope">
              <jt-label>
                <b>Full Name: </b>
                <span>{${ scope.row.fullName }}</span>
              </jt-label>
              <jt-label>
                <b>GitHub: </b>
                <a
                  target="_blank"
                  :href="`https://github.com/${scope.row.github}`"
                >{${ scope.row.github }}</a>
              </jt-label>
              <jt-label>
                <b>Twitter: </b>
                <a
                  target="_blank"
                  :href="`https://twitter.com/${scope.row.twitter}`"
                >{${ scope.row.twitter }}</a>
              </jt-label>
              <jt-label>
                <b>Works: </b>
                <jt-button v-for="(work, index) in scope.row.works" :key="index">
                  {${ work }}
                </jt-button>
              </jt-label>
            </div>
          </jt-table-column>
        </jt-table>
      </textarea>
    </jt-snippet>

    <h2>Tree Table</h2>
    <jt-snippet>
      <template>
        <jt-table tree :data="treeData">
          <jt-table-column label="WebAPI" prop="name"></jt-table-column>
          <jt-table-column label="Chrome" prop="chrome" :width="150"></jt-table-column>
          <jt-table-column label="Firefox" prop="firefox" :width="150"></jt-table-column>
        </jt-table>
      </template>
      <textarea slot="code">
        <script>
        export default {
          data () {
            return {
              treeData: [
                { name: 'CSS', chrome: '-', firefox: '-', children: [
                  { name: 'CSS variables', chrome: '49 @2016', firefox: '31 @2014' },
                  { name: 'CSS pointer-events', chrome: '4 @2010', firefox: '3.6 @2010' },
                  { name: 'CSS3 Media Queries', chrome: '4 @2010', firefox: '3.5 @2009', children: [
                    { name: 'Media Queries: resolution feature', chrome: '29 @2013', firefox: '16 @2012' },
                    { name: 'Media Queries: interaction media features', chrome: '41 @2015', firefox: '64 @2018' },
                  ] },
                ] },
                { name: 'JavaScript (JS)', chrome: '-', firefox: '-', children: [
                  { name: 'Strings', chrome: '-', firefox: '-', children: [
                    { name: 'String.prototype.includes', chrome: '41 @2015', firefox: '40 @2015' },
                  ] },
                  { name: 'ECMAScript 2015 (ES6)', chrome: '21 @2012', firefox: '6 @2011', children: [
                    { name: 'ES6 Number', chrome: '34 @2014', firefox: '32 @2014' },
                    { name: 'ES6 Classes', chrome: '49 @2016', firefox: '45 @2016' },
                    { name: 'ES6 Generators', chrome: '39 @2014', firefox: '26 @2013' },
                    { name: 'ES6 Template Literals', chrome: '41 @2015', firefox: '34 @2014' },
                  ] },
                  { name: 'JavaScript Modules(via script tag)', chrome: '61 @2017', firefox: '60 @2018', children: [
                    { name: 'JavaScript modules: dynamic import()', chrome: '63 @2017', firefox: '67 @2019' },
                  ] },
                ] },
                { name: 'SVG', chrome: '4 @2010', firefox: '2 @2006' },
                { name: 'Web Sockets (WS)', chrome: '16 @2011', firefox: '11 @2012' },
                { name: 'WebGL', chrome: '8 @2010', firefox: '4 @2011', children: [
                  { name: 'WebGL 2.0', chrome: '56 @2017', firefox: '51 @2017' },
                ] },
                { name: 'Fetch', chrome: '42 @2015', firefox: '39 @2015' },
                { name: 'WebAssembly (WA)', chrome: '57 @2017', firefox: '52 @2017' },
              ],
            }
          },
        }
        </script>

        <jt-table tree :data="treeData">
          <jt-table-column label="WebAPI" prop="name"></jt-table-column>
          <jt-table-column label="Chrome" prop="chrome" :width="150"></jt-table-column>
          <jt-table-column label="Firefox" prop="firefox" :width="150"></jt-table-column>
        </jt-table>
      </textarea>
    </jt-snippet>

    <h2>Tree Table Editor</h2>
    <jt-snippet>
      <template>
        <jt-table tree :data="treeData">
          <!-- Name -->
          <jt-table-column label="WebAPI" width="auto">
            <jt-input slot-scope="scope" width="250" v-model="scope.row.name"></jt-input>
          </jt-table-column>
          <!-- Chrome -->
          <jt-table-column label="Chrome" :width="150">
            <div slot-scope="scope">
              <jt-input v-model="scope.row.chrome"></jt-input>
            </div>
          </jt-table-column>
          <!-- Firefox -->
          <jt-table-column label="Firefox" prop="firefox" :width="150">
            <div slot-scope="scope">
              <jt-input v-model="scope.row.firefox"></jt-input>
            </div>
          </jt-table-column>
          <!-- Operations -->
          <jt-table-column label="Operations" :width="160" align="center">
            <div slot-scope="scope">
              <jt-button icon="plus" @click="addTreeChildNode(scope.row)">Child</jt-button>
              <jt-button icon="plus" @click="addTreeNodeAt(scope.index)">Sibling</jt-button>
            </div>
          </jt-table-column>
        </jt-table>
        <div style="margin-top: 10px">JSON Output:</div>
        <textarea class="input-area" v-text="treeData"></textarea>
      </template>
      <textarea slot="code">
        <jt-table tree :data="treeData">
          <!-- Name -->
          <jt-table-column label="WebAPI" width="auto">
            <jt-input slot-scope="scope" width="250" v-model="scope.row.name"></jt-input>
          </jt-table-column>
          <!-- Chrome -->
          <jt-table-column label="Chrome" :width="150">
            <div slot-scope="scope">
              <jt-input v-model="scope.row.chrome"></jt-input>
            </div>
          </jt-table-column>
          <!-- Firefox -->
          <jt-table-column label="Firefox" prop="firefox" :width="150">
            <div slot-scope="scope">
              <jt-input v-model="scope.row.firefox"></jt-input>
            </div>
          </jt-table-column>
          <!-- Operations -->
          <jt-table-column label="Firefox" prop="firefox" :width="160" align="center">
            <div slot-scope="scope">
              <jt-button icon="plus" @click="addTreeChildNode(scope.row)">Child</jt-button>
              <jt-button icon="plus" @click="addTreeNodeAt(scope.index)">Sibling</jt-button>
            </div>
          </jt-table-column>
        </jt-table>
      </textarea>
    </jt-snippet>

  </div>
</template>

<script>
export default {
  data () {
    return {
      basicTableData: [
        { name: '张三', chinese: 88, math: 98, english: 66 },
        { name: '李四', chinese: 62, math: 79, english: 61 },
        { name: '王五', chinese: 72, math: 105, english: 90 },
        { name: '赵六', chinese: 100, math: 34, english: 77 },
      ],
      expandableTableData: [
        { nickname: 'yyx', fullName: 'Evan You', github: 'yyx990803', twitter: 'youyuxi', works: ['Vue'], followers: 62800 },
        { nickname: 'tj', fullName: 'TJ Holowaychuk', github: 'tj', twitter: 'tjholowaychuk', works: ['Express', 'Pug', 'Stylus'], followers: 43700 },
        { nickname: 'mrdoob', fullName: 'Ricardo Cabello', github: 'mrdoob', twitter: 'mrdoob', works: ['Three.js'], followers: 14300 },
        { nickname: '-', fullName: 'John Resig', github: 'jeresig', twitter: 'jeresig', works: ['jQuery'], followers: 16000 },
      ],
      treeData: [
        { name: 'CSS', chrome: '-', firefox: '-', children: [
          { name: 'CSS variables', chrome: '49 @2016', firefox: '31 @2014' },
          { name: 'CSS pointer-events', chrome: '4 @2010', firefox: '3.6 @2010' },
          { name: 'CSS3 Media Queries', chrome: '4 @2010', firefox: '3.5 @2009', children: [
            { name: 'Media Queries: resolution feature', chrome: '29 @2013', firefox: '16 @2012' },
            { name: 'Media Queries: interaction media features', chrome: '41 @2015', firefox: '64 @2018' },
          ] },
        ] },
        { name: 'JavaScript (JS)', chrome: '-', firefox: '-', children: [
          { name: 'Strings', chrome: '-', firefox: '-', children: [
            { name: 'String.prototype.includes', chrome: '41 @2015', firefox: '40 @2015' },
          ] },
          { name: 'ECMAScript 2015 (ES6)', chrome: '21 @2012', firefox: '6 @2011', children: [
            { name: 'ES6 Number', chrome: '34 @2014', firefox: '32 @2014' },
            { name: 'ES6 Classes', chrome: '49 @2016', firefox: '45 @2016' },
            { name: 'ES6 Generators', chrome: '39 @2014', firefox: '26 @2013' },
            { name: 'ES6 Template Literals', chrome: '41 @2015', firefox: '34 @2014' },
          ] },
          { name: 'JavaScript Modules(via script tag)', chrome: '61 @2017', firefox: '60 @2018', children: [
            { name: 'JavaScript modules: dynamic import()', chrome: '63 @2017', firefox: '67 @2019' },
          ] },
        ] },
        { name: 'SVG', chrome: '4 @2010', firefox: '2 @2006' },
        { name: 'Web Sockets (WS)', chrome: '16 @2011', firefox: '11 @2012' },
        { name: 'WebGL', chrome: '8 @2010', firefox: '4 @2011', children: [
          { name: 'WebGL 2.0', chrome: '56 @2017', firefox: '51 @2017' },
        ] },
        { name: 'Fetch', chrome: '42 @2015', firefox: '39 @2015' },
        { name: 'WebAssembly (WA)', chrome: '57 @2017', firefox: '52 @2017' },
      ],
    }
  },
  methods: {
    newTreeNode() {
      return {
        $expandedRow: false,
        $expandedChildren: false,
        name: '',
        chrome: '',
        firefox: '',
      }
    },
    addTreeChildNode(node) {
      if (node.children == null) this.$set(node, 'children', [])
      node.children.push(this.newTreeNode())
      this.$set(node, '$expandedChildren', true)
    },
    addTreeNodeAt(index) {
      this.treeData.splice(index, 0, this.newTreeNode())
    },
  },
}
</script>

<style lang="scss" scoped>
.input-area {
  margin-top: 10px;
  padding: 5px;
  outline: none;
  width: 100%;
  height: 200px;
  font-size: 12px;
  font-family: var(--jt-font-monospace);
  border: solid 1px var(--jt-border);
  color: var(--jt-text);
  background-color: var(--jt-bg-container);
  resize: none;
}
</style>
