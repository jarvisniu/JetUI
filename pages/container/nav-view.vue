<template>
  <div>
    <h2>Nav View</h2>

    <h4>Features</h4>
    <ul>
      <li>Set width</li>
      <li>[TODO] Dock side: left or right</li>
      <li>[TODO] Two modes: static or reactive</li>
    </ul>

    <h4>TODO</h4>
    <ul>
      <li>Support static mode</li>
      <li>Allow dock to right</li>
    </ul>

    <h4>Basic</h4>
    <jt-border all style="position: relative;">
      <jt-button class="btn-show-side" @click="$refs.side.open()">≡</jt-button>
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
    </jt-border>

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
