<template>
  <div>
    <h2>Design</h2>

    <h4>Global Styles</h4>
    <ul>
      <li>font-size: 14px;</li>
    </ul>

    <h4>Theme Colors</h4>
    <ul>
      <li v-for="(color, index) in colors" :key="index">
        <span>{{ color.label }}: </span>
        <div class="color-cell" :style="{ backgroundColor: `var(${ color.var })` }"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        { label: 'Primary', var: '--jt-primary' },
        { label: 'Background Body', var: '--jt-bg-body' },
        { label: 'Background workspace', var: '--jt-bg-workspace' },
        { label: 'Background Container Light', var: '--jt-bg-container-light' },
        { label: 'Background Container Dark', var: '--jt-bg-container-dark' },
        { label: 'Background Container Darker', var: '--jt-bg-container-darker' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.color-cell {
  box-sizing: border-box;
  display: inline-block;
  width: 24px;
  height: 14px;
  border: solid 1px var(--jt-border);
  vertical-align: middle;
}
</style>
