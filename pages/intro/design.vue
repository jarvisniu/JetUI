<template>
  <div>
    <h1>Design</h1>

    <h2>Global</h2>
    <ul>
      <li>font-size: 14px;</li>
      <li>Icons: Drawing by Sketch, and minified by <a href="https://vecta.io/nano" target="_blank">vecta.io/nano</a></li>
    </ul>

    <h2>Theme Colors</h2>
    <ul>
      <li v-for="(color, index) in colors" :key="index">
        <span>{{ color.label }}: </span>
        <div class="color-cell" :style="{ backgroundColor: `var(${ color.var })` }"></div>
      </li>
    </ul>

    <h2>Dimensions</h2>
    <h3>14px</h3>
    <ul>
      <li>Font size</li>
      <li>Icon size (default)</li>
    </ul>
    <h3>16px</h3>
    <ul>
      <li>Link height</li>
    </ul>
    <h3>20px</h3>
    <ul>
      <li>Data: Tree item (default), Menu item</li>
    </ul>
    <h3>24px</h3>
    <ul>
      <li>Basic: Button, Label</li>
      <li>Form: Input, InputSearch, InputNumber, Switch</li>
      <li>Bars: ToggleBar, Panel title, Breadcrumb</li>
      <li>Data: List item, Table row</li>
    </ul>
    <h3>32px</h3>
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
