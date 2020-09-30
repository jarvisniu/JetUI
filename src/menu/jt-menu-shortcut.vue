<template>
  <div class="jt-menu-shortcut">
    <jt-icon
      v-for="(icon, index) in icons" :key="index"
      :name="icon"
    ></jt-icon
    ><span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, defualt: '' },
  },
  data() {
    return {
      icons: [],
      label: '',
    }
  },
  mounted() {
    for (let i = 0; i < this.value.length; i++) {
      const c = this.value[i]
      if (c === '⌘') this.icons.push('kbCommand')
      else if (c === '⇧') this.icons.push('kbShift')
      else if (c === '⌥') this.icons.push('kbOption')
      else if (c === '⌃') this.icons.push('kbControl')
      else this.label = c
    }
  },
}
</script>

<style lang="scss" scoped>
.jt-menu-shortcut {
  float: right;

  .jt-icon {
    margin-right: 2px;
  }
}
</style>
