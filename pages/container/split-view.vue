<template>
  <div>
    <h2>Split View</h2>

    <h4>Basic (1:3:1)</h4>
    <jt-border all>
      <jt-split-view style="height: 150px;">
        <jt-split-view-child class="child-1">
          Child 1
        </jt-split-view-child>
        <jt-split-view-child class="child-2" weight="3">
          Child 2
        </jt-split-view-child>
        <jt-split-view-child class="child-3">
          Child 3
        </jt-split-view-child>
      </jt-split-view>
    </jt-border>

    <h4>Vertical</h4>
    <jt-border all>
      <jt-split-view vertical style="height: 150px;">
        <jt-split-view-child class="child-1">
          Child 1
        </jt-split-view-child>
        <jt-split-view-child class="child-2" weight="2">
          Child 2
        </jt-split-view-child>
      </jt-split-view>
    </jt-border>

    <h4>Basic (200+Rest)</h4>
    <jt-border all>
      <jt-split-view style="height: 150px;">
        <jt-split-view-child class="child-1" size="200">
          Fixed size: 200px
        </jt-split-view-child>
        <jt-split-view-child class="child-2">
          Rest
        </jt-split-view-child>
      </jt-split-view>
    </jt-border>

  </div>
</template>

<style lang="scss" scoped>
.child-1,
.child-2,
.child-3 {
  padding: 10px;
}
.child-1 {
  background-color: pink;
}
.child-2 {
  background-color: lightblue;
}
.child-3 {
  background-color: lightgreen;
}
</style>
