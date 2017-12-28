<docs>
  带图标标签
</docs>
<template>
  <div class="icon-label" :class="{selected: selected}" @click="onClick">
    <img :src="icon">
  </div>
</template>
<script>
  export default {
    props: {
      selected: Boolean,
      icon: String,
      label: String,
    },
    methods: {
      onClick: function (ev) {
        this.$emit("click", this)
      }
    },
    mounted: function () {
      var span = this.$el
      var text = this.label
      if (!text) return

      var idxL = text.indexOf('(')
      var idxR = text.indexOf(')')
      if (idxL > -1 && idxR > 1 && idxR > idxL) {
        if (idxL > 0) {
          span.innerHTML += '<span>' + text.substring(0, idxL) + '</span>'
        }
        span.innerHTML += '<span style="text-decoration: underline">' +
          text.substring(idxL + 1, idxR) +
          '</span><span>' +
          text.substring(idxR + 1) +
          '</span>'
      } else {
        span.innerHTML += '<span>' + text + '</span>'
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @require "_theme.styl"

  .icon-label
    display flex
    font-family "Microsoft YaHei", Arial, sans-serif
    font-size 13px
    height 100%
    cursor default
    transition background 0.3s
    padding 0 6px 0 2px

    img
      padding 4px
      width 16px
      height 16px

    & /deep/ span
      line-height 24px

  .theme-light .icon-label
    background-color L-background-default
    &:hover
      background-color L-background-hover
    &:active
      background-color L-background-active
    &.selected
      background-color L-background-selected-default
      &:hover
        background-color L-background-selected-hover
      &:active
        background-color L-background-selected-active

  .theme-dark .icon-label
    background-color D-background-default
    &:hover
      background-color D-background-hover
    &:active
      background-color D-background-active
    &.selected
      background-color D-background-selected-default
      &:hover
        background-color D-background-selected-hover
      &:active
        background-color D-background-selected-active
</style>
