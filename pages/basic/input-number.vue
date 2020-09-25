<template>
  <div>
    <h1>Input Number</h1>

    <h2>Features</h2>
    <ul>
      <li>Stepper</li>
      <li>Set min and max value</li>
    </ul>

    <h2>TODO</h2>
    <ul>
      <li>Long press to continually change</li>
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

    <h2>Set Min & Max</h2>
    <jt-snippet>
      <template>
        <jt-label>Water Temperature: </jt-label>
        <jt-input-number :max="100" :min="0" :step="15" v-model="waterTemp"></jt-input-number>
      </template>
      <textarea slot="code">
        <jt-label>Water Temperature: </jt-label>
        <jt-input-number :max="100" :min="0" :step="15" v-model="waterTemp"></jt-input-number>
      </textarea>
    </jt-snippet>

    <h2>Set Width</h2>
    <jt-snippet>
      <template>
        <jt-label>Deposit: </jt-label>
        <jt-input-number style="width: 100px" :step="1e6" v-model="widthVal"></jt-input-number>
      </template>
      <textarea slot="code">
        <jt-label>Deposit: </jt-label>
        <jt-input-number style="width: 100px" :step="1e6" v-model="widthVal"></jt-input-number>
      </textarea>
    </jt-snippet>

  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      waterTemp: 0,
      widthVal: 1e6,
    }
  },
}
</script>
