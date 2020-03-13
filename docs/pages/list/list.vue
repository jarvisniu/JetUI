<template>
  <div>

    <h2>List</h2>

    <h4>Features</h4>
    <ul>
      <li>Two-way bind selected index.</li>
      <li>List data can be Object.</li>
      <li>Specify prop.</li>
      <li>TODO: Item template.</li>
    </ul>

    <h4>Basic</h4>
    <jt-border inline all>
      <jt-list style="width: 200px;" :data="list" v-model="selIndex"></jt-list>
    </jt-border>

    <h4>Object</h4>
    <jt-border inline all>
      <jt-list style="width: 200px;" :data="engines" v-model="selKey"></jt-list>
    </jt-border>

    <h4>Prop</h4>
    <jt-border inline all>
      <jt-list style="width: 200px;" :data="students" v-model="selStudentIndex" prop="name"></jt-list>
    </jt-border>

  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['Bill', 'Jack', 'Tom'],
      selIndex: 0,
      engines: {
        'google': '谷歌',
        'bing': '必应',
        'duck': 'DuckDuckGo',
      },
      selKey: 'google',
      students: [
        { name: '张三', score: 93 },
        { name: '李四', score: 81 },
        { name: '王五', score: 100 },
      ],
      selStudentIndex: 0,
    }
  },
}
</script>
