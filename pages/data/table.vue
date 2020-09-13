<template>
  <div>
    <h1>Table</h1>

    <h2>Features</h2>
    <ul>
      <li>ElementUI like API</li>
      <li>Column `prop` prop as a function</li>
      <li>Column sortable</li>
      <li>Column width</li>
      <li>Customize Columns</li>
    </ul>

    <h2>TODO</h2>
    <ul>
      <li>Sort arrow icons</li>
      <li>Expand row</li>
      <li>Default sort prop</li>
    </ul>

    <h2>Basic</h2>
    <jt-table :data="data">
      <jt-table-column label="Nickname" prop="nickname" :width="150"></jt-table-column>
      <jt-table-column label="FullName" prop="fullName" :width="200" sortable></jt-table-column>
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
