<template>
  <div class="jt-docs-sim-window" style="padding: 10px;">
    <h1 style="margin-top: 30px;">Menu</h1>

    <h2>TODO</h2>
    <ol>
      <li>Icon</li>
    </ol>

    <div style="position: absolute; top: 0; left: 0; width: 100%;">
      <jt-menu :data="menu"></jt-menu>
    </div>
  </div>
</template>
<script>
import JarvisMenu from './menu.vue'

export default {
  components: {
    JarvisMenu,
  },
  data () {
    return {
      menu: [
        {
          label: 'File',
          subs: [
            {
              label: 'Open',
              shortcut: '⌘O',
              action () {
                alert('You clicked "Open".')
              },
            },
            {
              label: 'New',
              subs: [
                {
                  label: 'Project',
                  action () {
                    alert('You clicked "Project".')
                  },
                },
                {
                  label: '-',
                },
                {
                  label: 'Directory',
                },
                {
                  label: 'File',
                },
              ],
            },
            {
              label: '-',
            },
            {
              label: 'Exit',
              shortcut: '⌘Q',
            },
          ],
        },
        {
          label: 'Edit',
          subs: [
            {
              label: 'Redo',
              shortcut: '⌘Z',
            },
            {
              label: 'Undo',
              shortcut: '⇧⌘Z',
            },
            {
              label: '-',
            },
            {
              label: 'Cut',
              shortcut: '⌘X',
            },
            {
              label: 'Copy',
              shortcut: '⌘C',
            },
            {
              label: 'Paste',
              shortcut: '⌘V',
            },
          ],
        },
        {
          label: 'View',
          subs: [
            {
              label: 'Toolbar',
            },
            {
              label: '-',
            },
            {
              label: 'Fullscreen',
            },
          ],
        },
      ],
    }
  },
}
</script>
