<template>
  <div>
    <h1>Radio</h1>

    <h2>Features</h2>
    <ul>
      <li>Inline</li>
      <li>Disabled</li>
    </ul>

    <h2>Basic</h2>
    <div style="margin-bottom: 10px;">
      <jt-radio v-model="sex" value="male" label="Male"></jt-radio>
      <jt-radio v-model="sex" value="female" label="Female"></jt-radio>
    </div>

    <h2>Inline & Disabled</h2>
    <div style="margin-bottom: 10px;">
      <jt-label>Major: </jt-label>
      <jt-radio inline v-model="major" value="engineer" label="Engineer"></jt-radio>
      <jt-radio inline v-model="major" value="cs" label="Computer Science"></jt-radio>
      <jt-radio inline v-model="major" value="art" label="Art" disabled></jt-radio>
    </div>

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
