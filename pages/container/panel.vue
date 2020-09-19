<template>
  <div>
    <h1>Panel</h1>

    <h2>Features</h2>
    <ul>
      <li>Highlight title when focused.</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-border inline all>
          <jt-panel title="Message" style="width: 400px;">
            <div style="padding: 10px;">
              Hello World!
            </div>
          </jt-panel>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border inline all>
          <jt-panel title="Message" style="width: 400px;">
            <div style="padding: 10px;">
              Hello World!
            </div>
          </jt-panel>
        </jt-border>
      </textarea>
    </jt-snippet>

    <h2>Slot Title & Control & Foldable</h2>
    <jt-snippet>
      <template>
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
            <div style="display: flex; flex-direction: column; height: 100%;">
              <jt-border bottom style="flex: 0; height:33px;">
                <jt-toolbar>
                  <jt-button-group>
                    <jt-button>Image</jt-button>
                    <jt-button>Music</jt-button>
                    <jt-button>Video</jt-button>
                  </jt-button-group>
                </jt-toolbar>
              </jt-border>
              <div style="flex: 1; overflow-y: auto; padding: 10px;">
                <li v-for="i in 15" :key="i">Item {{i}}</li>
              </div>
              </div>
          </jt-panel>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border inline all>
          <jt-panel title="Message" :fold="!show" height="200" style="width: 400px;">
            <div slot="title">
              <jt-panel-button
                style="min-width: 60px;"
                @click="isHTML = !isHTML"
              >{${ isHTML ? 'HTML' : 'Pug' }}</jt-panel-button>
            </div>
            <div slot="control">
              <jt-panel-button v-if="!show" @click="show = true">
                <jt-icon name="plus"></jt-icon>
              </jt-panel-button>
              <jt-panel-button v-else @click="show = false">
                <jt-icon name="minus"></jt-icon>
              </jt-panel-button>
            </div>
            <div style="display: flex; flex-direction: column; height: 100%;">
              <jt-border bottom style="flex: 0; height:33px;">
                <jt-toolbar>
                  <jt-button-group>
                    <jt-button>Image</jt-button>
                    <jt-button>Music</jt-button>
                    <jt-button>Video</jt-button>
                  </jt-button-group>
                </jt-toolbar>
              </jt-border>
              <div style="flex: 1; overflow-y: auto; padding: 10px;">
                <li v-for="i in 15" :key="i">Item {${ i }}</li>
              </div>
              </div>
          </jt-panel>
        </jt-border>
      </textarea>
    </jt-snippet>

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
