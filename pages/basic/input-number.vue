<template>
  <div>
    <h1>Input Number</h1>

    <h2>TODO</h2>
    <ul>
      <li>Long press to continually change</li>
      <li>Set max and min value</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-input-number v-model="count"></jt-input-number>
      </template>
      <textarea slot="code">
        <jt-input-number v-model="count"></jt-input-number>
      </textarea>
    </jt-snippet>

    <h2>Set Step (=0.5)</h2>
    <jt-snippet>
      <template>
        <jt-input-number v-model="count" :step="0.5"></jt-input-number>
      </template>
      <textarea slot="code">
        <jt-input-number v-model="count" :step="0.5"></jt-input-number>
      </textarea>
    </jt-snippet>

    <h2>Set Width</h2>
    <jt-snippet>
      <template>
        <jt-input-number style="width: 100px;" v-model="count"></jt-input-number>
      </template>
      <textarea slot="code">
        <jt-input-number style="width: 100px;" v-model="count"></jt-input-number>
      </textarea>
    </jt-snippet>

  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    }
  },
}
</script>
