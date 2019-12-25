<template>
  <div>
    <h2>Input</h2>

    <h4>Basic</h4>
    <jt-input v-model="name"></jt-input>
    <div style="margin-top: 10px;">
      <span v-if="!name">Enter your name please.</span>
      <span v-else>Hello {{ name }}.</span>
    </div>

    <h4>Clearable</h4>
    <!-- <jt-input v-model="name" clearable></jt-input> -->
    <div>TODO</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
}
</script>
