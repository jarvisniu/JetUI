<template>
  <div>
    <h1>Checkbox</h1>

    <h2>Features</h2>
    <ul>
      <li>Inline</li>
      <li>Disabled</li>
    </ul>

    <h2>TODO</h2>
    <ul>
      <li>&lt;jt-checkbox-group></li>
      <li>:indeterminate</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <textarea slot="code">
        <jt-checkbox v-model="read" value="Shopping" label="Shopping"></jt-checkbox>
      </textarea>
      <template>
        <jt-checkbox v-model="read" value="Shopping" label="Shopping"></jt-checkbox>
      </template>
    </jt-snippet>

    <h2>Inline & Disabled</h2>
    <jt-snippet>
      <textarea slot="code">
        <jt-checkbox inline v-model="read" label="Shopping"></jt-checkbox>
        <jt-checkbox inline v-model="know" label="I know JavaScript" disabled></jt-checkbox>
      </textarea>
      <template>
        <jt-checkbox inline v-model="read" label="Shopping"></jt-checkbox>
        <jt-checkbox inline v-model="know" label="I know JavaScript" disabled></jt-checkbox>
      </template>
    </jt-snippet>

  </div>
</template>

<script>
export default {
  data () {
    return {
      read: false,
      know: true,
    }
  },
}
</script>
