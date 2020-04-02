<template>
  <div>

    <h2>Panel</h2>

    <h4>Features</h4>
    <ul>
      <li>Highlight title when focused.</li>
    </ul>

    <h4>Basic</h4>
    <jt-border inline all>
      <jt-panel title="Message" style="width: 400px;">
        <div style="padding: 10px;">
          Hello World!
        </div>
      </jt-panel>
    </jt-border>

    <h4>Slot Title & Control & Foldable</h4>
    <jt-border inline all>
      <jt-panel title="Message" :fold="!show" height="200" style="width: 400px;">
        <div slot="title">
          <jt-panel-button
            style="min-width: 60px;"
            @click="isHTML = !isHTML"
          >{{ isHTML ? 'HTML' : 'Pug' }}</jt-panel-button>
        </div>
        <div slot="control">
          <jt-panel-button v-if="!show" @click="show = true">
            <jt-icon name="plus"></jt-icon>
          </jt-panel-button>
          <jt-panel-button v-else @click="show = false">
            <jt-icon name="minus"></jt-icon>
          </jt-panel-button>
        </div>
        <div style="padding: 10px;">
          <li v-for="i in 15" :key="i">Item {{i}}</li>
        </div>
      </jt-panel>
    </jt-border>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isHTML: true,
      show: true,
    }
  },
}
</script>
