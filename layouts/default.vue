<template>
  <div :class="`jt-theme-${ selTheme }`">
    <jt-button class="btn-show-side" @click="$refs.side.open()">≡</jt-button>
    <jt-nav-view ref="side">
      <jt-scroll-view class="sidebar" style="height: 100%;">
        <div style="padding: 10px;">
          <div class="title">jet-ui docs</div>
          <div class="version">v{{version}}</div>

          <jt-border inline all>
            <jt-toggle-bar>
              <jt-toggle-bar-button
                v-for="theme in themes" :key="theme.value"
                :selected="selTheme === theme.value"
                style="width: 80px;"
                @click="selTheme = theme.value"
              >{{ theme.label }}</jt-toggle-bar-button>
            </jt-toggle-bar>
          </jt-border>

          <jt-border inline all style="margin-top: -1px;">
            <jt-toggle-bar>
              <jt-toggle-bar-button
                v-for="hue in primaryHues" :key="hue.value"
                :selected="selPrimaryHue === hue.value"
                style="width: 32px;"
                @click="selPrimaryHue = hue.value"
              >
              <jt-border all inline style="margin: 5px;">
                <div
                  :style="{ backgroundColor: `hsl(${ hue.value }, 66%, 40%)` }"
                  style="height: 12px; width: 18px;"
                ></div>
              </jt-border>
              </jt-toggle-bar-button>
            </jt-toggle-bar>
          </jt-border>

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
    </jt-nav-view>
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
          { name: 'Input', path: '/basic/input' },
          { name: 'Input Number', path: '/basic/input-number' },
          { name: 'Input Search', path: '/basic/input-search' },
          { name: 'Label', path: '/basic/label' },
        ] },
        { name: 'Form', pages: [
          { name: 'Switch', path: '/form/switch' },
        ] },
        { name: 'Data', pages: [
          { name: 'List', path: '/data/list' },
          { name: 'Table', path: '/data/table' },
          { name: 'Tree', path: '/data/tree' },
          { name: 'Tree Table (WIP)', path: '/data/tree-table' },
        ] },
        { name: 'Container', pages: [
          { name: 'Toolbar', path: '/container/toolbar' },
          { name: 'Toggle Bar', path: '/container/toggle-bar' },
          { name: 'Panel', path: '/container/panel' },
          { name: 'Popover', path: '/container/popover' },
          { name: 'Rotated View', path: '/container/rotated-view' },
          { name: 'Scroll View', path: '/container/scroll-view' },
          { name: 'Split View (WIP)', path: '/container/split-view' },
          { name: 'Contain View', path: '/container/contain-view' },
          { name: 'Nav View', path: '/container/nav-view' },
        ] },
        { name: 'Navigation', pages: [
          { name: 'Menu', path: '/nav/menu' },
          { name: 'Breadcrumb', path: '/nav/breadcrumb' },
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
        color: var(--jt-primary);
      }
      &.selected {
        color: var(--jt-primary);
        text-decoration: underline;
      }
    }
  }
}
</style>
