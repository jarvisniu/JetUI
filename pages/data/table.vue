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
    </ul>

    <h2>TODO</h2>
    <ul>
      <li>Default sort prop</li>
    </ul>

    <h2>(Data)</h2>
    <jt-snippet>
      <template>
        See the codes
      </template>
      <textarea slot="code">
        <script>
        export default {
          data () {
            return {
              data: [
                { nickname: 'yyx', fullName: 'Evan You', github: 'yyx990803', twitter: 'youyuxi', works: ['Vue'], followers: 62800 },
                { nickname: 'tj', fullName: 'TJ Holowaychuk', github: 'tj', twitter: 'tjholowaychuk', works: ['Express', 'Pug', 'Stylus'], followers: 43700 },
                { nickname: 'mrdoob', fullName: 'Ricardo Cabello', github: 'mrdoob', twitter: 'mrdoob', works: ['Three.js'], followers: 14300 },
                { nickname: '-', fullName: 'John Resig', github: 'jeresig', twitter: 'jeresig', works: ['jQuery'], followers: 16000 },
              ],
            }
          },
        }
        </script>
      </textarea>
    </jt-snippet>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-table striped :data="data">
          <jt-table-column label="Full Name" prop="fullName" :width="200" sortable></jt-table-column>
          <jt-table-column label="Nickname" prop="nickname" :width="150"></jt-table-column>
          <jt-table-column label="Followers" prop="followers" :width="100" sortable></jt-table-column>
          <jt-table-column label="GitHub" :width="100">
            <a
              slot-scope="scope" target="_blank"
              :href="`https://github.com/${scope.row.github}`"
            >{{ scope.row.github }}</a>
          </jt-table-column>
          <jt-table-column label="Twitter" :width="120">
            <a
              slot-scope="scope" target="_blank"
              :href="`https://twitter.com/${scope.row.twitter}`"
            >{{ scope.row.twitter }}</a>
          </jt-table-column>
          <jt-table-column label="Works" :prop="scope => scope.row.works.join(', ')"></jt-table-column>
        </jt-table>
      </template>
      <textarea slot="code">
        <jt-table striped :data="data">
          <jt-table-column label="Full Name" prop="fullName" :width="200" sortable></jt-table-column>
          <jt-table-column label="Nickname" prop="nickname" :width="150"></jt-table-column>
          <jt-table-column label="Followers" prop="followers" :width="100" sortable></jt-table-column>
          <jt-table-column label="GitHub" :width="100">
            <a
              slot-scope="scope" target="_blank"
              :href="`https://github.com/${scope.row.github}`"
            >{${ scope.row.github }}</a>
          </jt-table-column>
          <jt-table-column label="Twitter" :width="120">
            <a
              slot-scope="scope" target="_blank"
              :href="`https://twitter.com/${scope.row.twitter}`"
            >{${ scope.row.twitter }}</a>
          </jt-table-column>
          <jt-table-column label="Works" :prop="scope => scope.row.works.join(', ')"></jt-table-column>
        </jt-table>
      </textarea>
    </jt-snippet>

    <h2>Expandable row</h2>
    <jt-snippet>
      <template>
        <jt-table :data="data">
          <jt-table-column label="Full Name" prop="fullName" :width="200" sortable></jt-table-column>
          <jt-table-column label="Nickname" prop="nickname" :width="150"></jt-table-column>
          <jt-table-column label="Followers" prop="followers" :width="900" sortable></jt-table-column>
          <!-- expandable -->
          <jt-table-column :width="25" type="expandable">
            <div slot-scope="scope">
              <jt-label>
                <b>Full Name: </b>
                <span>{{ scope.row.fullName }}</span>
              </jt-label>
              <jt-label>
                <b>GitHub: </b>
                <a
                  target="_blank"
                  :href="`https://github.com/${scope.row.github}`"
                >{{ scope.row.github }}</a>
              </jt-label>
              <jt-label>
                <b>Twitter: </b>
                <a
                  target="_blank"
                  :href="`https://twitter.com/${scope.row.twitter}`"
                >{{ scope.row.twitter }}</a>
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
        <jt-table :data="data">
          <jt-table-column label="Full Name" prop="fullName" :width="200" sortable></jt-table-column>
          <jt-table-column label="Nickname" prop="nickname" :width="150"></jt-table-column>
          <jt-table-column label="Followers" prop="followers" :width="900" sortable></jt-table-column>
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

  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        { nickname: 'yyx', fullName: 'Evan You', github: 'yyx990803', twitter: 'youyuxi', works: ['Vue'], followers: 62800 },
        { nickname: 'tj', fullName: 'TJ Holowaychuk', github: 'tj', twitter: 'tjholowaychuk', works: ['Express', 'Pug', 'Stylus'], followers: 43700 },
        { nickname: 'mrdoob', fullName: 'Ricardo Cabello', github: 'mrdoob', twitter: 'mrdoob', works: ['Three.js'], followers: 14300 },
        { nickname: '-', fullName: 'John Resig', github: 'jeresig', twitter: 'jeresig', works: ['jQuery'], followers: 16000 },
      ],
    }
  },
}
</script>
