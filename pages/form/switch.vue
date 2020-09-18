<template>
  <div>
    <h1>Switch</h1>

    <h2>Features</h2>
    <ul>
      <li>Disabled</li>
      <li>Align</li>
      <li>On/Off Label</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <textarea slot="code">
        <jt-switch v-model="isDarkMode" label="Dark Mode"></jt-switch>
      </textarea>
      <template>
        <jt-switch v-model="isDarkMode" label="Dark Mode"></jt-switch>
      </template>
    </jt-snippet>

    <h2>Disabled</h2>
    <jt-snippet>
      <textarea slot="code">
        <jt-switch v-model="isDarkMode" inline disabled label="Dark Mode"></jt-switch>
      </textarea>
      <template>
        <jt-switch v-model="isDarkMode" inline disabled label="Dark Mode"></jt-switch>
      </template>
    </jt-snippet>

    <h2>Align</h2>
    <jt-snippet>
      <textarea slot="code">
        <jt-border all style="width: 200px">
          <jt-switch v-model="isDarkMode" label="Align Right" align="right"></jt-switch>
          <jt-switch v-model="isDarkMode" label="Align Left"></jt-switch>
        </jt-border>
      </textarea>
      <template>
        <jt-border all style="width: 200px">
          <jt-switch v-model="isDarkMode" label="Align Right" align="right"></jt-switch>
          <jt-switch v-model="isDarkMode" label="Align Left"></jt-switch>
        </jt-border>
      </template>
    </jt-snippet>

    <h2>On/Off Label</h2>
    <jt-snippet>
      <textarea slot="code">
        <div>
          <jt-switch v-model="isDarkMode" inline label="Dark Mode" on-label="on" off-label="off"></jt-switch>
          <jt-switch v-model="isDarkMode" inline label="Dark Mode" on-label="开" off-label="关"></jt-switch>
          <jt-switch v-model="isDarkMode" inline label="Dark Mode" on-label="开启" off-label="关闭"></jt-switch>
        </div>
      </textarea>
      <template>
        <div>
          <jt-switch v-model="isDarkMode" inline label="Dark Mode" on-label="on" off-label="off"></jt-switch>
          <jt-switch v-model="isDarkMode" inline label="Dark Mode" on-label="开" off-label="关"></jt-switch>
          <jt-switch v-model="isDarkMode" inline label="Dark Mode" on-label="开启" off-label="关闭"></jt-switch>
        </div>
      </template>
    </jt-snippet>

  </div>
</template>

<script>
export default {
  data () {
    return {
      isDarkMode: false,
    }
  },
}
</script>
