<template>
  <div :class="`jt-theme-${ selTheme }`">
    <jt-button class="btn-show-side" @click="$refs.side.open()">
      <jt-icon name="menu" size="100%"></jt-icon>
    </jt-button>
    <jt-drawer ref="side" z-index="10">
      <jt-scroll-view class="sidebar" style="height: 100%;">
        <div style="padding: 10px;">
          <div class="title">jet-ui docs</div>
          <div class="version">v{{version}}</div>

          <jt-button-group sharp>
            <jt-button
              v-for="theme in themes" :key="theme.value"
              :selected="selTheme === theme.value"
              width="80"
              @click="selTheme = theme.value"
            >{{ theme.label }}</jt-button>
          </jt-button-group>

          <jt-button-group sharp style="margin-top: -1px;">
            <jt-button
              v-for="hue in primaryHues" :key="hue.value"
              :selected="selPrimaryHue === hue.value"
              squared width="32"
              @click="selPrimaryHue = hue.value"
            >
            <jt-border all inline style="width: 100%; height: 100%">
              <div
                style="height: 100%"
                :style="{ backgroundColor: `hsl(${ hue.value }, 66%, 40%)` }"
              ></div>
            </jt-border>
            </jt-button>
          </jt-button-group>

          <div v-for="(pageGroup, groupIndex) in pageGroups" :key="groupIndex">
            <div class="section-title">{{ pageGroup.name }}</div>
            <div
              class="page-link"
              v-for="(page, pageIndex) in pageGroup.pages"
              :key="pageIndex"
            >
              <span style="padding-right: 4px;">·</span><router-link
                :to="page.path"
                :class="{selected: $route.path == page.path}"
              >
                <span>{{ page.name }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </jt-scroll-view>
      <jt-scroll-view slot="content" style="height: 100%;">
        <div style="padding: 10px; overflow-x: auto;">
          <router-view></router-view>
        </div>
      </jt-scroll-view>
    </jt-drawer>
  </div>
</template>

<script>
import pkg from '../package.json'

export default {
  data() {
    return {
      version: pkg.version,
      themes: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
      ],
      selTheme: 'light',
      primaryHues: [
        { label: 'Red', value: 0 },
        { label: 'Green', value: 120 },
        { label: 'Default (Cyan)', value: 180 },
        { label: 'Blue', value: 210 },
        { label: 'Purple', value: 285 },
      ],
      selPrimaryHue: 180,
      pageGroups: [
        { name: 'Intro', pages: [
          { name: 'Gallery', path: '/intro/gallery' },
          { name: 'Design', path: '/intro/design' },
        ] },
        { name: 'Basic', pages: [
          { name: 'Button', path: '/basic/button' },
          { name: 'Icon', path: '/basic/icon' },
          { name: 'Link', path: '/basic/link' },
        ] },
        { name: 'Form', pages: [
          { name: 'Input', path: '/form/input' },
          { name: 'Input Number', path: '/form/input-number' },
          { name: 'Radio', path: '/form/radio' },
          { name: 'Checkbox', path: '/form/checkbox' },
          { name: 'Switch', path: '/form/switch' },
          { name: 'Label', path: '/form/label' },
        ] },
        { name: 'Data', pages: [
          { name: 'List', path: '/data/list' },
          { name: 'Table', path: '/data/table' },
          { name: 'Tree', path: '/data/tree' },
        ] },
        { name: 'Container', pages: [
          { name: 'Popover', path: '/container/popover' },
          { name: 'Toolbar', path: '/container/toolbar' },
          { name: 'Panel', path: '/container/panel' },
          { name: 'Drawer', path: '/container/drawer' },
          { name: 'Rotated View', path: '/container/rotated-view' },
          { name: 'Scroll View', path: '/container/scroll-view' },
          { name: 'Split View (WIP)', path: '/container/split-view' },
          { name: 'Contain View', path: '/container/contain-view' },
        ] },
        { name: 'Navigation', pages: [
          { name: 'Menu', path: '/nav/menu' },
          { name: 'Breadcrumb', path: '/nav/breadcrumb' },
        ] },
        { name: 'App', pages: [
          { name: 'Tree Editor', path: '/app/tree-editor' },
        ] },
      ],
    }
  },
  watch: {
    '$route.path' () {
      this.$refs.side.close()
    },
    selPrimaryHue(val) {
      document.documentElement.style.setProperty('--jt-primary-hue', val)
    },
  },
  mounted() {
    // enable css :active on some mobile browser
    document.addEventListener("touchstart", function() {}, false);
  },
}
</script>

<style lang="scss" scoped>
:root {
  --jt-docs-section-title-color: #616b6b;
  --jt-docs-side-link: hsl(180, 10%, 20%);
}
.jt-theme-dark {
  --jt-docs-section-title-color: hsl(180, 5%, 80%);
  --jt-docs-side-link: white;
}

.btn-show-side {
  position: absolute;
  z-index: 1;
  margin: 5px;
  width: 40px;
  height: 40px;
  opacity: 0.85;
  @media screen and (min-width: 600px) {
    display: none;
  }
}

.sidebar {
  font-family: Inconsolata, Monaco, Consolas, STHeiti, DengXian, monospace, 'Segoe UI Emoji';
  background-color: var(--jt-bg-container-dark);

  .title {
    font-size: 24px;
  }
  .version {
    font-size: 14px;
    color: var(--jt-text-sub);
    padding: 5px 0 10px 0;
  }
  .section-title {
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0 5px 2px;
    color: var(--jt-docs-section-title-color);
    padding-left: 6px;
    border-left: solid 2px var(--jt-primary);
  }
  .page-link {
    font-size: 15px;
    line-height: 24px;
    a {
      text-decoration: none;
      color: var(--jt-docs-side-link);
      transition: color 0.05s;
      &:hover {
        @media (hover: hover) {
          color: var(--jt-primary);
        }
      }
      &.selected {
        color: var(--jt-primary);
        text-decoration: underline;
      }
    }
  }
}
</style>
