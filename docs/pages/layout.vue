<template>
  <div class="app" :class="`jt-theme-${ theme }`">
    <div class="side">
      <div class="title">jet-ui docs</div>
      <jt-border inline all>
        <jt-toggle-bar>
          <jt-toggle-bar-button
            :selected="theme === 'light'"
            style="width: 89px;"
            @click="theme = 'light'"
          >Light</jt-toggle-bar-button>
          <jt-toggle-bar-button
            :selected="theme === 'dark'"
            style="width: 89px;"
            @click="theme = 'dark'"
          >Dark</jt-toggle-bar-button>
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
export default {
  data() {
    return {
      theme: 'light',
      pageGroups: [
        { name: 'Basic', pages: [
          { name: 'Button', path: '/button' },
          { name: 'Input', path: '/input' },
          { name: 'Image Button', path: '/image-button' },
        ] },
        { name: 'Container', pages: [
          { name: 'Toolbar', path: '/toolbar' },
          { name: 'Toggle Bar', path: '/toggle-bar' },
        ] },
        { name: 'Navigation', pages: [
          { name: 'Breadcrumb', path: '/breadcrumb' },
        ] },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.app {
  background-color: #fefefe;
  height: 100vh;
  overflow: auto;

  &.jt-theme-dark {
    color: white;
    background-color: #222;
  }
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
  background-color: #f8f8f8;
  padding: 10px;
  font-family: Inconsolata, Monaco, Consolas, STHeiti, DengXian, monospace, 'Segoe UI Emoji';

  .title {
    font-size: 24px;
    padding-bottom: 10px;
  }
  .section-title {
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0 5px 2px;
    color: hsl(180, 5%, 40%);
    padding-left: 6px;
    border-left: solid 2px hsl(180, 50%, 50%);
  }
  .page-link {
    font-size: 15px;
    line-height: 24px;
    /* padding-left: 4px; */
    a {
      text-decoration: none;
      color: hsl(180, 10%, 20%);
      transition: color 0.05s;
      &:hover {
        color: hsl(180, 50%, 50%);
      }
      &.selected {
        color: hsl(180, 50%, 50%);
        text-decoration: underline;
      }
    }
  }
}
.jt-theme-dark {
  .side {
    .section-title {
      color: hsl(180, 5%, 80%);
    }
    color: white;
    background-color: #111;
    a {
      color: white;
    }
  }
}
.content {
  width: calc(100% - 200px);
  padding: 10px;
  background-color: var(--jt-bg-body);
}
</style>
