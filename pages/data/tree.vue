<template>
  <div class="p-a-10">

    <h2>Tree</h2>

    <h4>Features</h4>
    <ul>
      <li>Folding & Expanding</li>
      <li>Item padding</li>
      <li>Font size</li>
      <li>Auto height (default)</li>
    </ul>

    <h4>TODO</h4>
    <ul>
      <li>Selectable</li>
      <li>Item Template</li>
      <li>Children prop</li>
      <li>Expanded prop</li>
      <li>Auto inject missing expanded prop, in order to be reactive</li>
    </ul>

    <h4>Basic</h4>
    <jt-tree :data="treeData" style="display: inline-block; height: 200px;" />

    <h4>Font size</h4>
    <jt-tree :data="treeData" style="display: inline-block; height: 200px; font-size: 12px;" />
    <jt-tree :data="treeData" style="display: inline-block; height: 200px; font-size: 16px;" />

    <h4>Item padding set</h4>
    <jt-tree :data="treeData" style="height: 200px;" item-padding="6" />

  </div>
</template>

<script>
export default {
  data () {
    return {
      treeData: [
        {
          name: '学段',
          open: true,
          children: [
            {
              name: '考研',
              open: true,
              children: [
                {
                  name: '应用文',
                },
                {
                  name: '看图作文',
                },
              ],
            },
            {
              name: '四六级',
            },
            {
              name: '高中',
            },
            {
              name: '初中',
            },
          ],
        },
        {
          name: '学科',
          open: false,
          children: [
            {
              name: '理科',
              open: false,
              children: [
                {
                  name: '物理',
                },
                {
                  name: '化学',
                },
                {
                  name: '生物',
                },
              ],
            },
            {
              name: '文科',
              open: false,
              children: [
                {
                  name: '政治',
                },
                {
                  name: '历史',
                },
                {
                  name: '地理',
                },
              ],
            },
          ],
        },
      ]
    }
  },
}
</script>
