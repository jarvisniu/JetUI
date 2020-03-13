<template>
  <div>
    <h2>Input Number</h2>

    <h4>Basic</h4>
    <jt-input-number v-model="count"></jt-input-number>

    <h4>Step (=5)</h4>
    <jt-input-number v-model="count" :step="5"></jt-input-number>

    <h4>Set Width</h4>
    <jt-input-number style="width: 100px;" v-model="count"></jt-input-number>

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
