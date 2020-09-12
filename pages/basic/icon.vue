<template>
  <div>
    <h2>Icon</h2>

    <h4>Basic</h4>
    <jt-icon name="plus"></jt-icon>

    <h4>Color</h4>
    <jt-icon name="minus" color="red"></jt-icon>
    <jt-icon name="plus" style="color: orange;"></jt-icon>

    <h4>Size</h4>
    <jt-icon name="plus" size="32"></jt-icon>

    <h4>Not Square</h4>
    <jt-icon name="plus" width="28" height="14" style="border: dashed 1px silver;"></jt-icon>

    <h4>Custom Path</h4>
    <jt-icon view-box="0 0 40 40" path="M19,4 C27,4 34,10 34,19 C34,22 33,25 31,27 L36,32 L32,37 L26,31 C24,33 21,34 19,34 C10,34 4,27 4,19 C4,10 10,4 19,4 Z M19,10 C14,10 10,14 10,19 C10,23 14,28 19,28 C23,28 28,23 28,19 C28,14 23,10 19,10 Z"></jt-icon>

    <h4>In Button</h4>
    <jt-button>
      <jt-icon name="plus"></jt-icon>
      <span>Open</span>
    </jt-button>


    <h4>All Icons</h4>
    <div v-for="(iconData, name) in allIcons" :key="name" class="icon-card">
      <jt-icon :name="name" size="32"></jt-icon>
      <div>{{ name }}</div>
    </div>

  </div>
</template>

<script>
import allIcons from '../../src/icon/icon-paths'

export default {
  data() {
    return {
      allIcons,
    }
  },
}
</script>

<style lang="scss" scoped>
.icon-card {
  display: inline-block;
  margin: 5px;
  border: solid 1px silver;
  border-radius: 5px;
  text-align: center;
  padding: 2px 4px;
  background-color: var(--jt-bg-container-dark);
}
</style>
