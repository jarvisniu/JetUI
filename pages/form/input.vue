<template>
  <div>
    <h1>Input</h1>

    <h2>Features</h2>
    <ul>
      <li>Type Password</li>
      <li>Rounded</li>
      <li>Flat</li>
      <li>Bind Number</li>
      <li>Set Height (by setting prop padding)</li>
      <li>Show clear</li>
      <li>Show not empty</li>
    </ul>

    <h2>Events</h2>
    <ul>
      <li>@press-enter</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-input v-model="keyword"></jt-input>
      </template>
      <textarea slot="code">
        <jt-input v-model="keyword"></jt-input>
      </textarea>
    </jt-snippet>

    <h2>Rounded</h2>
    <jt-snippet>
      <template>
        <jt-input rounded v-model="keyword"></jt-input>
      </template>
      <textarea slot="code">
        <jt-input rounded v-model="keyword"></jt-input>
      </textarea>
    </jt-snippet>

    <h2>Type Password</h2>
    <jt-snippet>
      <template>
        <jt-input type="password" v-model="password"></jt-input>
      </template>
      <textarea slot="code">
        <jt-input type="password" v-model="password"></jt-input>
      </textarea>
    </jt-snippet>

    <h2>Flat</h2>
    <jt-snippet>
      <template>
        <jt-input flat v-model.number="age" width="50"></jt-input>
      </template>
      <textarea slot="code">
        <jt-input flat v-model.number="age" width="50"></jt-input>
      </textarea>
    </jt-snippet>

    <h2>Bind Number</h2>
    <jt-snippet>
      <template>
        <jt-input v-model.number="age" width="50"></jt-input>
      </template>
      <textarea slot="code">
        <jt-input v-model.number="age" width="50"></jt-input>
      </textarea>
    </jt-snippet>

    <h2>Height (by setting prop padding)</h2>
    <jt-snippet>
      <template>
        <jt-input padding="0 3" width="60" v-model="keyword"></jt-input>
      </template>
      <textarea slot="code">
        <jt-input padding="0 3" width="60" v-model="keyword"></jt-input>
      </textarea>
    </jt-snippet>

    <h2>Search Box</h2>
    <jt-snippet>
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
    </jt-snippet>


  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
      password: '',
      age: 30,
    }
  },
  methods: {
    onPressEnter() {
      alert('press-enter')
    },
  },
}
</script>
