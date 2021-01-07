<template>
  <div>
    <h1>Image</h1>

    <h2>Features</h2>
    <ul>
      <li>Show loading (Hide the prev image and show a gray background. You may need to turn on network throttle to clearly see the effect)</li>
      <li>Show loading error (Pink background for now)</li>
    </ul>

    <h2>Basic</h2>
    <jt-border horizontal top>
      <jt-toolbar>
        <jt-button @click="switchImage">Switch Image</jt-button>
      </jt-toolbar>
    </jt-border>
    <jt-snippet>
      <template>
        <jt-image :src="urlImages[selImageIndex]"></jt-image>
      </template>
      <textarea slot="code">
        <jt-image :src="urlImages[selImageIndex]"></jt-image>
      </textarea>
    </jt-snippet>

    <h2>On error</h2>
    <jt-snippet>
      <template>
        <jt-image :src="invalidImageUrl"></jt-image>
      </template>
      <textarea slot="code">
        <jt-image :src="invalidImageUrl"></jt-image>
      </textarea>
    </jt-snippet>

  </div>
</template>

<script>
export default {
  data() {
    return {
      urlImages: [
        'https://unpkg.com/vue-zoomer@0.3.9/dist/demo/landscape-1.7df5f544.jpg',
        'https://unpkg.com/vue-zoomer@0.3.9/dist/demo/landscape-2.ba8bc5c7.jpg',
      ],
      selImageIndex: 0,
      invalidImageUrl: 'https://unpkg.com/vue-zoomer@0.3.9/dist/demo/landscape-2.jpg',
    }
  },
  methods: {
    switchImage() {
      if (this.selImageIndex === 0) this.selImageIndex = 1
      else this.selImageIndex = 0
    },
  },
}
</script>
