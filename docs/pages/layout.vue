<template>
  <div class="app" :class="`jt-theme-${ selTheme }`">
    <div class="side">
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
    </div><div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import pkg from '../../package.json'

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
          { name: 'Gallery', path: '/gallery' },
          { name: 'Design', path: '/design' },
        ] },
        { name: 'Basic', pages: [
          { name: 'Button', path: '/button' },
          { name: 'Icon', path: '/icon' },
          { name: 'Input', path: '/input' },
          { name: 'Input Number', path: '/input-number' },
          { name: 'Input Search', path: '/input-search' },
          { name: 'Label', path: '/label' },
          { name: 'List', path: '/list' },
        ] },
        { name: 'Container', pages: [
          { name: 'Toolbar', path: '/toolbar' },
          { name: 'Toggle Bar', path: '/toggle-bar' },
          { name: 'Panel', path: '/panel' },
          { name: 'Rotated View', path: '/rotated-view' },
          { name: 'Split View', path: '/split-view' },
          { name: 'Contain View', path: '/contain-view' },
        ] },
        { name: 'Navigation', pages: [
          { name: 'Menu', path: '/menu' },
          { name: 'Breadcrumb', path: '/breadcrumb' },
        ] },
      ],
    }
  },
  watch: {
    selPrimaryHue(val) {
      document.documentElement.style.setProperty('--jt-primary-hue', val)
    },
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

.app {
  height: 100vh;
  overflow: auto;
}
.side,
.content {
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  overflow-y: auto;
  vertical-align: top;
}
.side {
  width: 200px;
  border-right: solid 1px silver;
  padding: 10px;
  font-family: Inconsolata, Monaco, Consolas, STHeiti, DengXian, monospace, 'Segoe UI Emoji';
  overflow-x: hidden;
  overflow-y: scroll;

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
.content {
  width: calc(100% - 200px);
  padding: 10px;
  background-color: var(--jt-bg-body);
}
</style>
