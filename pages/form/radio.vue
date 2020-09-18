<template>
  <div>
    <h1>Radio</h1>

    <h2>Features</h2>
    <ul>
      <li>Inline</li>
      <li>Disabled</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <textarea slot="code">
        <jt-radio v-model="sex" value="male" label="Male"></jt-radio>
        <jt-radio v-model="sex" value="female" label="Female"></jt-radio>
      </textarea>
      <template>
        <jt-radio v-model="sex" value="male" label="Male"></jt-radio>
        <jt-radio v-model="sex" value="female" label="Female"></jt-radio>
      </template>
    </jt-snippet>

    <h2>Inline & Disabled</h2>
    <jt-snippet>
      <textarea slot="code">
        <jt-label>Major: </jt-label>
        <jt-radio inline v-model="major" value="engineer" label="Engineer"></jt-radio>
        <jt-radio inline v-model="major" value="cs" label="Computer Science"></jt-radio>
        <jt-radio inline v-model="major" value="art" label="Art" disabled></jt-radio>
      </textarea>
      <template>
        <jt-label>Major: </jt-label>
        <jt-radio inline v-model="major" value="engineer" label="Engineer"></jt-radio>
        <jt-radio inline v-model="major" value="cs" label="Computer Science"></jt-radio>
        <jt-radio inline v-model="major" value="art" label="Art" disabled></jt-radio>
      </template>
    </jt-snippet>

  </div>
</template>

<script>
export default {
  data () {
    return {
      sex: 'male',
      major: 'cs',
    }
  },
}
</script>
