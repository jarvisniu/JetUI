<template>
  <div>
    <h1>Drawer</h1>

    <h2>Features</h2>
    <ul>
      <li>Set width</li>
      <li>Dock side: left or right</li>
      <li>Side z-index</li>
      <li>Two modes: static or reactive</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <div class="jt-docs-sim-window">
          <jt-button class="btn-show-side" @click="$refs.side1.open()">
            <jt-icon name="menu" size="20"></jt-icon>
          </jt-button>
          <jt-drawer ref="side1" :width="150" style="height: 150px;">
            <div style="padding: 10px;">
              <b>Drawer</b>
              <ul>
                <li>One</li>
                <li>Twe</li>
                <li>Three</li>
              </ul>
            </div>
            <div slot="content" style="padding: 10px">Content</div>
          </jt-drawer>
        </div>
      </template>
      <textarea slot="code">
        <div class="jt-docs-sim-window">
          <jt-button class="btn-show-side" @click="$refs.side1.open()">
            <jt-icon name="menu" size="20"></jt-icon>
          </jt-button>
          <jt-drawer ref="side1" :width="150" style="height: 150px;">
            <div style="padding: 10px;">
              <b>Drawer</b>
              <ul>
                <li>One</li>
                <li>Twe</li>
                <li>Three</li>
              </ul>
            </div>
            <div slot="content" style="padding: 10px">Content</div>
          </jt-drawer>
        </div>
      </textarea>
    </jt-snippet>

    <h2>Dock Side (side="right")</h2>
    <jt-snippet>
      <template>
        <div class="jt-docs-sim-window">
          <jt-button class="btn-show-side right" @click="$refs.side2.open()">
            <jt-icon name="menu" size="20"></jt-icon>
          </jt-button>
          <jt-drawer ref="side2" :width="150" side="right" style="height: 150px;">
            <div style="padding: 10px;">
              <b>Drawer</b>
              <ul>
                <li>One</li>
                <li>Twe</li>
                <li>Three</li>
              </ul>
            </div>
            <div slot="content" style="padding: 10px">Content</div>
          </jt-drawer>
        </div>
      </template>
      <textarea slot="code">
        <div class="jt-docs-sim-window">
          <jt-button class="btn-show-side right" @click="$refs.side2.open()">
            <jt-icon name="menu" size="20"></jt-icon>
          </jt-button>
          <jt-drawer ref="side2" :width="150" side="right" style="height: 150px;">
            <div style="padding: 10px;">
              <b>Drawer</b>
              <ul>
                <li>One</li>
                <li>Twe</li>
                <li>Three</li>
              </ul>
            </div>
            <div slot="content" style="padding: 10px">Content</div>
          </jt-drawer>
        </div>
      </textarea>
    </jt-snippet>

    <h2>Mode static</h2>
    <jt-snippet>
      <template>
        <div class="jt-docs-sim-window">
          <jt-button class="btn-show-side static" @click="$refs.side3.open()">
            <jt-icon name="menu" size="20"></jt-icon>
          </jt-button>
          <jt-drawer ref="side3" :width="150" mode="static" style="height: 150px;">
            <div style="padding: 10px;">
              <b>Drawer</b>
              <ul>
                <li>One</li>
                <li>Twe</li>
                <li>Three</li>
              </ul>
            </div>
            <div slot="content" style="padding: 10px">Content</div>
          </jt-drawer>
        </div>
      </template>
      <textarea slot="code">
        <div class="jt-docs-sim-window">
          <jt-button class="btn-show-side static" @click="$refs.side3.open()">
            <jt-icon name="menu" size="20"></jt-icon>
          </jt-button>
          <jt-drawer ref="side3" :width="150" mode="static" style="height: 150px;">
            <div style="padding: 10px;">
              <b>Drawer</b>
              <ul>
                <li>One</li>
                <li>Twe</li>
                <li>Three</li>
              </ul>
            </div>
            <div slot="content" style="padding: 10px">Content</div>
          </jt-drawer>
        </div>
      </textarea>
    </jt-snippet>

  </div>
</template>

<style lang="scss" scoped>
.btn-show-side {
  position: absolute;
  padding: 5px;
  height: auto;
  margin: 5px;

  &.right {
    right: 0;
  }
}
@media screen and (min-width: 600px) {
  .btn-show-side:not(.static) {
    display: none;
  }
}
</style>
