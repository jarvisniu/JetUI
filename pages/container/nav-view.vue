<template>
  <div>
    <h1>Nav View</h1>

    <h2>Features</h2>
    <ul>
      <li>Set width</li>
      <li>Dock side: left or right</li>
      <li>Side z-index</li>
    </ul>

    <h2>TODO</h2>
    <ul>
      <li>Two modes: static or reactive</li>
    </ul>

    <h2>Basic</h2>
    <div class="jt-docs-sim-window">
      <jt-button class="btn-show-side" @click="$refs.side.open()">
        <jt-icon name="menu"></jt-icon>
      </jt-button>
      <jt-nav-view ref="side" :width="150" style="height: 150px;">
        <div style="padding: 10px;">
          <b>Nav View</b>
          <ul>
            <li>One</li>
            <li>Twe</li>
            <li>Three</li>
          </ul>
        </div>
        <div slot="content" style="padding: 10px;">Content</div>
      </jt-nav-view>
    </div>

    <h2>Dock Side (side="right")</h2>
    <div class="jt-docs-sim-window">
      <jt-button class="btn-show-side" @click="$refs.side2.open()">
        <jt-icon name="menu"></jt-icon>
      </jt-button>
      <jt-nav-view ref="side2" :width="150" side="right" style="height: 150px;">
        <div style="padding: 10px;">
          <b>Nav View</b>
          <ul>
            <li>One</li>
            <li>Twe</li>
            <li>Three</li>
          </ul>
        </div>
        <div slot="content" style="padding: 10px;">Content</div>
      </jt-nav-view>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.btn-show-side {
  position: absolute;
  margin: 5px;
}
@media screen and (min-width: 600px) {
  .btn-show-side {
    display: none;
  }
}
</style>
