<docs>
  标签栏
  方法：
    open(label, icon, meta)
  事件：
    change
    close
    sort
</docs>
<template>
  <div class="tab-bar">
    <div class="tab-bar-container">
      <jt-tab-button v-for="(tab, i) in tabs" :index="tab.label"
                     :label="tab.label" :icon="tab.icon"
                     :selected="selIndex== i" @select="selIndex = i"
                     @close="closeTab(i)" @move="onButtonMove(i)"></jt-tab-button>
      <div class="tabbar-filler"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tabs: [],
        selIndex: 0,
      }
    },
    computed: {
      childrenDoms () {
        return this.$el.children[0].children
      },
    },
    watch: {
      selIndex () {
        this.$emit("changed", this.tabs[this.selIndex].meta);
      },
    },
    methods: {
      open: function (tab) {
        this.tabs.push(tab)
      },
      getTabButtonIndex: function (button) {
        return Array.prototype.indexOf.call(this.childrenDoms, button.$el);
      },
      isFirst: function (button) {
        return this.getTabButtonIndex(button) === 0;
      },
      isLast: function (button) {
        return this.getTabButtonIndex(button) === this.tabs.length - 1;
      },
      closeTab: function (index) {
        console.log('on close', index, this.tabs[index].label)
        if (index === this.tabs.length && this.selIndex === index) this.selIndex -= 1
        this.tabs.splice(index, 1)
        console.log(this.tabs)
      },
      getDesIndex: function (button) {
        let index = this.getTabButtonIndex(button);

        let delta = 0;
        let cIndex = index;
        if (button.left < 0) {
          for (let i = index - 1; i > -1; i--) {
            let widthI = parseInt(window.getComputedStyle(this.childrenDoms[i]).width);
            if (button.left < delta - widthI / 2) cIndex = i;
            delta -= widthI;
          }
        } else {
          for (let i = index + 1; i < this.tabs.length; i++) {
            let widthI = parseInt(window.getComputedStyle(this.childrenDoms[i]).width);
            if (button.left > delta + widthI / 2) cIndex = i;
            delta += widthI;
          }
        }
        return cIndex;
      },
      onButtonMove: function (index) {
//        let button = this.childrenDoms[index]
//        let desIndex = this.getDesIndex(button);
//        let width = parseFloat(window.getComputedStyle(button).width);
//        for (let i = 0; i < this.tabs.length; i++) {
//          if (i !== index) {
//            if ((index - i) * (desIndex - i) <= 0)
//              this.$children[i].left = width * Math.sign(index - i);
//            else
//              this.$children[i].left = 0;
//          }
//        }
      },
      resetAllTabs: function (button) {
        for (let i = 0; i < this.tabs.length; i++) {
          this.$children[i].left = 0;
          this.$children[i].isMouseDown = false;
        }
      },
      reindexTabs: function (button) {
//        let index = this.getTabButtonIndex(button);
//        let desIndex = this.getDesIndex(button);
//
//        let tabs = [];
//        for (let i = 0; i < this.tabs.length; i++) tabs[i] = this.tabs[i];
//
//        let tmp = tabs.splice(index, 1)[0];
//        tabs.splice(desIndex, 0, tmp);
//
//        tmp = this.$children.splice(index, 1)[0];
//        this.$children.splice(desIndex, 0, tmp);
//
//        this.tabs = tabs;
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @require "_theme.styl"

  .tab-bar
    box-sizing border-box
    transition background 0.3s
    user-select-none()

  .tab-bar-container
    display inline-flex
    height 26px
    width 100%
    overflow visible
    margin-bottom 3px
    border-bottom solid 1px red
    transition background 0.3s

    .tabbar-filler
      min-width 16px
      flex 1

  .theme-light
    .tab-bar
      background-color L-tab-background-selected-default
    .tab-bar-container
      border-color L-border-default
      background-color L-border-default

      .tabbar-filler
        background-color L-tab-background-default

  .theme-dark
    .tab-bar
      background-color D-tab-background-selected-default
    .tab-bar-container
      border-color D-border-default
      background-color D-border-default

      .tabbar-filler
        background-color D-tab-background-default
</style>