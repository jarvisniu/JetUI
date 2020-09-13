<template>
  <div>
    <h1>Popover</h1>

    <h2>Features</h2>
    <ul>
      <li>Show to 9 side.</li>
    </ul>

    <h2>TODO</h2>
    <ul>
      <li>Add Triangle.</li>
      <li>Add prop `trigger`, 'hover', 'click'</li>
    </ul>

    <h2>Basic</h2>
    <div>
      <jt-popover to="bottom-left">
        <jt-button>Hover me</jt-button>
        <div slot="content" style="width: 120px;">Hi, I am a tooltip.</div>
      </jt-popover>
    </div>

    <h2>Positions (prop `to`)</h2>
    <div class="position-table">
      <table>
        <!-- L1 -->
        <tr>
          <td></td>
          <td>
            <jt-popover to="top-left">
              <jt-button>top-left</jt-button>
              <div slot="content">I am a tooltip.</div>
            </jt-popover>
          </td>
          <td>
            <jt-popover to="top">
              <jt-button>top</jt-button>
              <div slot="content">I am a tooltip.</div>
            </jt-popover>
          </td>
          <td>
            <jt-popover to="top-right">
              <jt-button>top-right</jt-button>
              <div slot="content">I am a tooltip.</div>
            </jt-popover>
          </td>
          <td></td>
        </tr>
        <!-- L2 -->
        <tr>
          <td>
            <jt-popover to="left-top">
              <jt-button>left-top</jt-button>
              <div slot="content">I am a tooltip.</div>
            </jt-popover>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <jt-popover to="right-top">
              <jt-button>right-top</jt-button>
              <div slot="content">I am a tooltip.</div>
            </jt-popover>
          </td>
        </tr>
        <!-- L3 -->
        <tr>
          <td>
            <jt-popover to="left">
              <jt-button>left</jt-button>
              <div slot="content">I am a tooltip.</div>
            </jt-popover>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <jt-popover to="right">
              <jt-button>right</jt-button>
              <div slot="content">I am a tooltip.</div>
            </jt-popover>
          </td>
        </tr>
        <!-- L4 -->
        <tr>
          <td>
            <jt-popover to="left-bottom">
              <jt-button>left-bottom</jt-button>
              <div slot="content">I am a tooltip.</div>
            </jt-popover>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <jt-popover to="right-bottom">
              <jt-button>right-bottom</jt-button>
              <div slot="content">I am a tooltip.</div>
            </jt-popover>
          </td>
        </tr>
        <!-- L5 -->
        <tr>
          <td></td>
          <td>
            <jt-popover to="bottom-left">
              <jt-button>bottom-left</jt-button>
              <div slot="content">I am a tooltip.</div>
            </jt-popover>
          </td>
          <td>
            <jt-popover to="bottom">
              <jt-button>bottom</jt-button>
              <div slot="content">I am a tooltip.</div>
            </jt-popover>
          </td>
          <td>
            <jt-popover to="bottom-right">
              <jt-button>bottom-right</jt-button>
              <div slot="content">I am a tooltip.</div>
            </jt-popover>
          </td>
          <td></td>
        </tr>
      </table>
    </div>

    <h2>Gap</h2>
    <div>
      <jt-popover to="right" :gap="10">
        <jt-button>Hover me</jt-button>
        <div slot="content" style="width: 120px;">Hi, I am a tooltip.</div>
      </jt-popover>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.position-table {
  .jt-button {
    width: 100px;
  }
}
</style>
