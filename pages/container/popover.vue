<template>
  <div>
    <h1>Popover</h1>

    <h2>Features</h2>
    <ul>
      <li>Show to 9 side.</li>
      <li>Prop `trigger`, default is 'hover', can be 'click'</li>
    </ul>

    <h2>Notes</h2>
    <ul>
      <li>The content is won't wrap by default, unless width is set.</li>
    </ul>

    <h2>TODO</h2>
    <ul>
      <li>Add Triangle.</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-popover to="bottom-left">
          <jt-button>Hover me</jt-button>
          <div slot="content" style="width: 120px;">Hi, I am a tooltip.</div>
        </jt-popover>
      </template>
      <textarea slot="code">
        <jt-popover to="bottom-left">
          <jt-button>Hover me</jt-button>
          <div slot="content" style="width: 120px;">Hi, I am a tooltip.</div>
        </jt-popover>
      </textarea>
    </jt-snippet>

    <h2>Positions (prop `to`)</h2>
    <jt-snippet>
      <template>
        <div class="position-table">
          <table>
            <!-- L1 -->
            <tr>
              <td></td>
              <td>
                <jt-popover to="top-left">
                  <jt-button>top-left</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td>
                <jt-popover to="top">
                  <jt-button>top</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td>
                <jt-popover to="top-right">
                  <jt-button>top-right</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td></td>
            </tr>
            <!-- L2 -->
            <tr>
              <td>
                <jt-popover to="left-top">
                  <jt-button>left-top</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <jt-popover to="right-top">
                  <jt-button>right-top</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
            </tr>
            <!-- L3 -->
            <tr>
              <td>
                <jt-popover to="left">
                  <jt-button>left</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <jt-popover to="right">
                  <jt-button>right</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
            </tr>
            <!-- L4 -->
            <tr>
              <td>
                <jt-popover to="left-bottom">
                  <jt-button>left-bottom</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <jt-popover to="right-bottom">
                  <jt-button>right-bottom</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
            </tr>
            <!-- L5 -->
            <tr>
              <td></td>
              <td>
                <jt-popover to="bottom-left">
                  <jt-button>bottom-left</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td>
                <jt-popover to="bottom">
                  <jt-button>bottom</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td>
                <jt-popover to="bottom-right">
                  <jt-button>bottom-right</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </template>
      <textarea slot="code">
        <div class="position-table">
          <table>
            <!-- L1 -->
            <tr>
              <td></td>
              <td>
                <jt-popover to="top-left">
                  <jt-button>top-left</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td>
                <jt-popover to="top">
                  <jt-button>top</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td>
                <jt-popover to="top-right">
                  <jt-button>top-right</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td></td>
            </tr>
            <!-- L2 -->
            <tr>
              <td>
                <jt-popover to="left-top">
                  <jt-button>left-top</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <jt-popover to="right-top">
                  <jt-button>right-top</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
            </tr>
            <!-- L3 -->
            <tr>
              <td>
                <jt-popover to="left">
                  <jt-button>left</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <jt-popover to="right">
                  <jt-button>right</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
            </tr>
            <!-- L4 -->
            <tr>
              <td>
                <jt-popover to="left-bottom">
                  <jt-button>left-bottom</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <jt-popover to="right-bottom">
                  <jt-button>right-bottom</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
            </tr>
            <!-- L5 -->
            <tr>
              <td></td>
              <td>
                <jt-popover to="bottom-left">
                  <jt-button>bottom-left</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td>
                <jt-popover to="bottom">
                  <jt-button>bottom</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td>
                <jt-popover to="bottom-right">
                  <jt-button>bottom-right</jt-button>
                  <div slot="content">Hi, I am a tooltip.</div>
                </jt-popover>
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </textarea>
    </jt-snippet>

    <h2>Width (=100%)</h2>
    <jt-snippet>
      <template>
        <jt-popover width="100%">
          <jt-button>Hover me</jt-button>
          <div slot="content">Hi, I am a tooltip.</div>
        </jt-popover>
      </template>
      <textarea slot="code">
        <jt-popover width="100%">
          <jt-button>Hover me</jt-button>
          <div slot="content">Hi, I am a tooltip.</div>
        </jt-popover>
      </textarea>
    </jt-snippet>

    <h2>Trigger (=click)</h2>
    <jt-snippet>
      <template>
        <jt-popover trigger="click">
          <jt-button>Click me</jt-button>
          <div slot="content">Hi, I am a tooltip.</div>
        </jt-popover>
      </template>
      <textarea slot="code">
        <jt-popover trigger="click">
          <jt-button>Click me</jt-button>
          <div slot="content">Hi, I am a tooltip.</div>
        </jt-popover>
      </textarea>
    </jt-snippet>

    <h2>Theme (=inverse)</h2>
    <jt-snippet>
      <template>
        <jt-popover to="right" theme="inverse">
          <jt-button>Hover me</jt-button>
          <div slot="content" style="width: 120px">Hi, I am a tooltip.</div>
        </jt-popover>
      </template>
      <textarea slot="code">
        <jt-popover to="right" theme="inverse">
          <jt-button>Hover me</jt-button>
          <div slot="content" style="width: 120px">Hi, I am a tooltip.</div>
        </jt-popover>
      </textarea>
    </jt-snippet>

    <h2>Gap (=10, default=2)</h2>
    <jt-snippet>
      <template>
        <jt-popover to="right" :gap="10">
          <jt-button>Hover me</jt-button>
          <div slot="content" style="width: 120px;">Hi, I am a tooltip.</div>
        </jt-popover>
      </template>
      <textarea slot="code">
        <jt-popover to="right" :gap="10">
          <jt-button>Hover me</jt-button>
          <div slot="content" style="width: 120px;">Hi, I am a tooltip.</div>
        </jt-popover>
      </textarea>
    </jt-snippet>

  </div>
</template>

<style lang="scss" scoped>
.position-table {
  margin: 0 150px;

  .jt-button {
    width: 100px;
  }
}
</style>
