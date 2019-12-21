<template>
  <div>
    <h2>Input Search</h2>

    <h4>Basic</h4>
    <jt-border inline all style="background-color: hsl(0, 0%, 85%);">
      <jt-input-search v-model="keyword"></jt-input-search>
    </jt-border>

    <h4>Dark Theme</h4>
    <div>TODO</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    }
  },
}
</script>
