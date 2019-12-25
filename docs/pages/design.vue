<template>
  <div>
    <h2>Design</h2>

    <h4>Global Styles</h4>
    <ul>
      <li>font-size: 14px;</li>
    </ul>

    <h4>Theme Colors</h4>
    <ul>
      <li>
        <span>Primary: </span>
        <div class="color-cell" style="background-color: var(--jt-primary);"></div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.color-cell {
  box-sizing: border-box;
  display: inline-block;
  width: 24px;
  height: 14px;
  border: solid 1px var(--jt-border);
  vertical-align: top;
}
</style>
