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

    <h4>Dimensions</h4>
    <h5>14px</h5>
    <ul>
      <li>Font size</li>
      <li>Icon size (default)</li>
    </ul>
    <h5>20px</h5>
    <ul>
      <li>Data: Tree item (default), Menu item</li>
    </ul>
    <h5>24px</h5>
    <ul>
      <li>Basic: Button, Label</li>
      <li>Form: Input, InputSearch, InputNumber, Switch</li>
      <li>Bars: ToggleBar, Panel title, Breadcrumb</li>
      <li>Data: List item, Table row</li>
    </ul>
    <h5>32px</h5>
    <ul>
      <li>Toolbar height, padding:2px and margin:2px on children</li>
      <li>Table row (with controls inside)</li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        { label: 'Primary', var: '--jt-primary' },
        { label: 'Background Container', var: '--jt-bg-container' },
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
