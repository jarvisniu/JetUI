<template>
  <div>
    <h2>Table</h2>

    <h3>Features</h3>
    <ul>
      <li>ElementUI like API.</li>
      <li>Column `prop` prop as a function.</li>
      <li>Column sortable.</li>
      <li>Column width .</li>
    </ul>

    <h3>TODO</h3>
    <ul>
      <li>Customize Columns</li>
      <li>Sort arrow icons</li>
    </ul>

    <h3>Basic</h3>
    <jt-table :data="data">
      <jt-table-column label="Nickname" prop="nickname" :width="150"></jt-table-column>
      <jt-table-column label="FullName" prop="fullName" :width="200" sortable></jt-table-column>
      <jt-table-column label="Born" prop="born" :width="60" sortable></jt-table-column>
      <jt-table-column label="GitHub" prop="github" :width="100"></jt-table-column>
      <jt-table-column label="Twitter" prop="twitter" :width="120"></jt-table-column>
      <jt-table-column label="Works" :prop="item => item.works.join(', ')"></jt-table-column>
    </jt-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        { nickname: 'yyx', fullName: 'Evan You', github: 'yyx990803', twitter: '', works: ['Vue'], born: 2000 },
        { nickname: 'tj', fullName: 'TJ Holowaychuk', github: 'tj', twitter: '', works: ['Express', 'Pug', 'Stylus'], born: 2010 },
        { nickname: 'mrdoob', fullName: 'Ricardo Cabello', github: 'mrdoob', twitter: '', works: ['Three.js'], born: 2002 },
        { nickname: '-', fullName: 'John Resig', github: 'jeresig', twitter: 'jeresig', works: ['jQuery'], born: 2007 },
      ],
    }
  },
}
</script>
