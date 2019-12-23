<template>
  <div>
    <h2>Input Search</h2>

    <h4>Basic <span v-if="keyword">: {{ keyword }}</span></h4>
    <jt-border inline all style="background-color: var(--jt-bg-container-dark);">
      <jt-input-search v-model="keyword"></jt-input-search>
    </jt-border>

    <h4>Dark Theme</h4>
    <div>TODO Icon Color</div>

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
