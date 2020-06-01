<template>
  <div
    :class="{ active: active }"
    class="jt-menu"
    @click.stop="active = !active">
    <div
      v-for="(menu1, index1) in data"
      :key="index1"
      class="menu-item"
      @click="trigger(menu1)"
    >
      <span class="button">{{ menu1.label }}</span>
      <ul
        v-if="menu1.subs"
        class="menu-down">
        <template v-for="(menu2, index2) in menu1.subs">
          <li
            v-if="menu2.label !== '-'"
            :key="index2"
            @click="trigger(menu2)">
            <div class="button">
              <span>{{ menu2.label }}</span>
              <span
                v-if="menu2.subs"
                class="float-right">►</span>
              <span
                v-else-if="menu2.shortcut"
                class="float-right">{{ menu2.shortcut }}</span>
            </div>
            <ul
              v-if="menu2.subs"
              class="menu-right">
              <template v-for="(menu3, index3) in menu2.subs">
                <li
                  v-if="menu3.label !== '-'"
                  :key="index3"
                  class="button"
                  @click="trigger(menu3)"
                >{{ menu3.label }}</li>
                <li
                  v-else
                  :key="index3"
                  class="menu-split-line"/>
              </template>
            </ul>
          </li>
          <li
            v-else
            :key="index2"
            class="menu-split-line"/>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JtMenu',
  props: {
    data: { type: Array, required: true },
  },
  data () {
    return {
      active: false,
    }
  },
  mounted () {
    document.body.addEventListener('click', this.deactive)
  },
  beforeDestroy () {
    document.body.removeEventListener('click', this.deactive)
  },
  methods: {
    deactive () {
      this.active = false
    },
    trigger (menu) {
      if (menu.action) {
        menu.action()
      }
    },
  },
}
</script>

<style lang="scss" scoped>

$font-size: 14px;
$vertical-gap: 4px;

.float-right {
  float: right;
}
.jt-menu {
  font-size: $font-size;
  display: flex;
  padding-left: 8px;
  user-select: none;
  border-bottom: solid 1px var(--jt-border);
  background-color: var(--jt-bg-menu);
  z-index: 1;
}
.menu-item {
  cursor: default;

  & > .button {
    display: inline-block;
    padding: 0 6px;
    line-height: 20px;
    transition: background-color 0.15s;
    &:hover{
      background-color: var(--jt-bg-menu-hover);
    }
    &:active {
      background-color: var(--jt-bg-menu-active);
    }
  }
  li {
    list-style: none;
    white-space: nowrap;
    max-width: 200px;
    line-height: 1;
  }
  ul {
    min-width: 120px;
  }
}
/* menu level 1 */
.menu-down {
  border: solid 1px var(--jt-border);
  position: absolute;
  padding-left: 0;
  visibility: collapse;
  margin: 0;
  background-color: var(--jt-bg-menu);
  padding: $vertical-gap 0;

  li {
    position: relative;
  }
}
.jt-menu.active .menu-item:hover > .menu-down {
  visibility: visible;
}

/* menu button */
.menu-down li:not(.menu-split-line) {
  transition: background-color 0.15s;
  &:hover {
    background-color: var(--jt-bg-menu-hover);
  }
}
.menu-down .button {
  padding: 0 6px;
  line-height: 20px;
  &:active {
    background-color: var(--jt-bg-menu-active);
  }
}
.menu-right .button {
  padding: 0 6px;
  line-height: 20px;
  transition: background-color 0.15s;
  &:hover {
    background-color: var(--jt-bg-menu-hover);
  }
  &:active {
    background-color: var(--jt-bg-menu-active) !important;
  }
}
.menu-split-line {
  padding: 0;
  height: 0.9px;
  margin: $vertical-gap 0;
  background-color: var(--jt-border);
}
/* menu level 2+ */
.menu-right {
  border: solid 1px var(--jt-border);
  position: absolute;
  left: 100%;
  top: -5px;
  padding-left: 0;
  visibility: collapse;
  background-color: var(--jt-bg-menu);
  padding: $vertical-gap 0;
}
.jt-menu.active li:hover > .menu-right {
  visibility: visible;
}

</style>
