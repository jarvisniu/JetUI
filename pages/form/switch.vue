<template>
  <div>
    <h2>Switch</h2>

    <h1>Features</h1>
    <ul>
      <li>Disabled</li>
      <li>Align</li>
      <li>On/Off Label</li>
    </ul>

    <h1>Basic</h1>
    <div style="margin-bottom: 10px;">
      <jt-switch v-model="isDarkMode" label="Dark Mode"></jt-switch>
    </div>

    <h1>Disabled</h1>
    <div style="margin-bottom: 10px;">
      <jt-switch v-model="isDarkMode" inline disabled label="Dark Mode"></jt-switch>
      <jt-switch v-model="isDarkMode" inline disabled label="Dark Mode"></jt-switch>
    </div>

    <h1>Align</h1>
    <jt-border all style="margin-bottom: 10px; width: 200px; padding: 10px;">
      <jt-switch v-model="isDarkMode" label="Dark Mode" align="right" style="margin-bottom: 10px;"></jt-switch>
      <jt-switch v-model="isDarkMode" label="Dark Mode"></jt-switch>
    </jt-border>

    <h1>On/Off Label</h1>
    <div style="margin-bottom: 10px;">
      <jt-switch v-model="isDarkMode" inline label="Dark Mode" on-label="on" off-label="off"></jt-switch>
      <jt-switch v-model="isDarkMode" inline label="Dark Mode" on-label="开" off-label="关"></jt-switch>
      <jt-switch v-model="isDarkMode" inline label="Dark Mode" on-label="开启" off-label="关闭"></jt-switch>
    </div>

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
