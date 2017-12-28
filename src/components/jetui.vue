<style lang="stylus">
  /* global JetUI style */

  @require "_theme.styl"

  // Border color

  .border
    border solid 1px red

  .theme-light .border
    border-color L-border-default

  .theme-dark .border
    border-color D-border-default

  // Border style

  .border-only-top
    border-width 1px 0 0 0

  .border-only-right
    border-width 0 1px 0 0

  .border-only-bottom
    border-width 0 0 1px 0

  .border-only-left
    border-width 0 0 0 1px

  .border-no-top
    border-width 0 1px 1px 1px

  .border-no-right
    border-width 1px 0 1px 1px

  .border-no-bottom
    border-width 1px 1px 0 1px

  .border-no-left
    border-width 1px 1px 1px 0

  // Fill parent

  .full-height
    height 100%

  .full-width
    width 100%

  .full-size
    width 100%
    height 100%

  .inline-block
    display inline-block

  .pull-left
    float: left

  // Flex

  .flex1
    flex 1

  // Margin 8px

  .p-a-8
    padding 8px

  .m-a-8
    margin 8px

  // Align

  .align-to-right
    flex-direction row-reverse

  .align-to-top
    flex-direction column

  .align-to-bottom
    flex-direction column-reverse
</style>
