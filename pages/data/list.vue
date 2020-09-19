<template>
  <div>
    <h1>List</h1>

    <h2>Features</h2>
    <ul>
      <li>Two-way bind selected index.</li>
      <li>Specify prop.</li>
      <li>Item template.</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-border inline all>
          <jt-list style="width: 200px;" :data="list" v-model="selIndex"></jt-list>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border inline all>
          <jt-list style="width: 200px;" :data="list" v-model="selIndex"></jt-list>
        </jt-border>
      </textarea>
    </jt-snippet>

    <h2>Prop</h2>
    <jt-snippet>
      <template>
        <jt-border inline all>
          <jt-list style="width: 200px;" :data="students" v-model="selStudentIndex" prop="name"></jt-list>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border inline all>
          <jt-list style="width: 200px;" :data="students" v-model="selStudentIndex" prop="name"></jt-list>
        </jt-border>
      </textarea>
    </jt-snippet>

    <h2>Item template</h2>
    <jt-snippet>
      <template>
        <jt-border inline all>
          <jt-list style="width: 200px;" :data="students" v-model="selStudentIndex">
            <template v-slot:item="scope">
              {{ scope.$index + 1 }}, {{ scope.item.name }} - {{ scope.item.score }}
            </template>
          </jt-list>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border inline all>
          <jt-list style="width: 200px;" :data="students" v-model="selStudentIndex">
            <template v-slot:item="scope">
              {${ scope.$index + 1 }}, {${ scope.item.name }} - {${ scope.item.score }}
            </template>
          </jt-list>
        </jt-border>
      </textarea>
    </jt-snippet>

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
