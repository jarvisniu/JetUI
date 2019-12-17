<docs>
  PanelTitle：面板标题。
</docs>

<template>
  <div class="panel-title" :class="{selected: selected}">
    <span>{{title}}</span>
    <!--<span class="splitter"></span>-->
    <div class="buttons">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JtPannelTitle',
    props: {
      title: String,
      selected: Boolean,
    },
  }
</script>

<style lang="stylus" scoped>
  @require "_theme.styl"

  .panel-title
    box-sizing border-box
    height: 24px
    font-size: 12px
    padding: 0 0 0 6px
    line-height: 23px
    cursor: default
    user-select: none

    .splitter
      display: inline-block
      width: 1px
      height: calc(100% - 0px)
      margin: 0 4px
      background-color: #999
      vertical-align: top

  .buttons
    float: right

    & > *
      display block
      float: left
      // padding: 0 8px
      min-width: 26px
      height: 100%
      text-align: center
      transition: background 0.1s
      border-left: solid 1px silver
      &:hover
        background-color: hsla(0, 0%, 100%, 0.5)
      &:active
        background-color: hsla(0, 0%, 70%, 0.5)

  .theme-light .panel-title
    background: linear-gradient(to top, rgb(220, 220, 220), rgb(230, 230, 230))

    &.selected
      background: linear-gradient(to top, rgb(194, 203, 219), rgb(202, 211, 227))

  .jt-theme-dark .panel-title
    background: linear-gradient(to top, rgb(58, 60, 62), rgb(66, 68, 70))

    &.selected
      background: linear-gradient(to top, rgb(94, 103, 119), rgb(102, 111, 127))
</style>
<style lang="stylus">
  .panel-body
    height: calc(100% - 24px)
</style>
