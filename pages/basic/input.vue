<template>
  <div>
    <h1>Input</h1>

    <h2>Features</h2>
    <ul>
      <li>Rounded</li>
      <li>Show Clear</li>
    </ul>

    <h2>Events</h2>
    <ul>
      <li>@press-enter</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <textarea slot="code">
        <jt-border inline all>
          <jt-toolbar>
            <jt-input width="200" v-model="keyword"></jt-input>
          </jt-toolbar>
        </jt-border>
      </textarea>
      <template>
        <jt-border inline all>
          <jt-toolbar>
            <jt-input width="200" v-model="keyword"></jt-input>
          </jt-toolbar>
        </jt-border>
      </template>
    </jt-snippet>

    <h2>Type Password</h2>
    <jt-snippet>
      <textarea slot="code">
        <jt-border inline all>
          <jt-toolbar>
            <jt-input width="200" type="password" v-model="keyword"></jt-input>
          </jt-toolbar>
        </jt-border>
      </textarea>
      <template>
        <jt-border inline all>
          <jt-toolbar>
            <jt-input width="200" type="password" v-model="keyword"></jt-input>
          </jt-toolbar>
        </jt-border>
      </template>
    </jt-snippet>

    <h2>Search Box</h2>
    <jt-snippet>
      <textarea slot="code">
        <jt-border inline all>
          <jt-toolbar>
            <jt-input
              width="200" v-model="keyword"
              rounded icon="search" show-clear show-not-empty
            ></jt-input>
          </jt-toolbar>
        </jt-border>
      </textarea>
      <template>
        <jt-border inline all>
          <jt-toolbar>
            <jt-input
              width="200" v-model="keyword"
              rounded icon="search" show-clear show-not-empty
            ></jt-input>
          </jt-toolbar>
        </jt-border>
      </template>
    </jt-snippet>


  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    onPressEnter() {
      alert('press-enter')
    },
  },
}
</script>
