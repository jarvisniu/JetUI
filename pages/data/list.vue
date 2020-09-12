<template>
  <div>

    <h2>List</h2>

    <h4>Features</h4>
    <ul>
      <li>Two-way bind selected index.</li>
      <li>Specify prop.</li>
      <li>Item template.</li>
    </ul>

    <h4>Basic</h4>
    <jt-border inline all>
      <jt-list style="width: 200px;" :data="list" v-model="selIndex"></jt-list>
    </jt-border>

    <h4>Prop</h4>
    <jt-border inline all>
      <jt-list style="width: 200px;" :data="students" v-model="selStudentIndex" prop="name"></jt-list>
    </jt-border>

    <h4>Item template</h4>
    <jt-border inline all>
      <jt-list style="width: 200px;" :data="students" v-model="selStudentIndex">
        <template v-slot:item="scope">
          {{ scope.$index + 1 }}, {{ scope.item.name }} - {{ scope.item.score }}
        </template>
      </jt-list>
    </jt-border>

  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['Bill', 'Jack', 'Tom'],
      selIndex: 0,
      selKey: 'google',
      students: [
        { name: 'Zhang', score: 93 },
        { name: 'Lee', score: 81 },
        { name: 'Wong', score: 100 },
      ],
      selStudentIndex: 0,
    }
  },
}
</script>
