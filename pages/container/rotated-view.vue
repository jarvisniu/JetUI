<template>
  <div>
    <h1>Rotated View</h1>

    <h2>Note</h2>
    <ul>
      <li>Must set width manually. Can't auto detect.</li>
    </ul>

    <h2>Features</h2>
    <ul>
      <li>Left or right.</li>
    </ul>

    <h2>TODO</h2>
    <ul>
      <li>Auto detect the container width.</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <div style="height: 250px; font-size: 0">
          <jt-border inline all style="height: 100%">
            <jt-rotated-view style="display: inline-block; width: 24px">
              <jt-button-group dock="right" style="float: right">
                <jt-button>Project</jt-button>
              </jt-button-group>
              <jt-button-group dock="left" style="float: left">
                <jt-button>Structure</jt-button>
                <jt-button>Git</jt-button>
              </jt-button-group>
            </jt-rotated-view>
          </jt-border>
          <jt-border inline vertical style="width: calc(100% - 52px); height: 100%; vertical-align: top">
            <div style="display: inline-block; font-size: 14px; padding: 10px">
              Body
            </div>
          </jt-border>
          <jt-border inline all style="height: 100%">
            <jt-rotated-view right style="display: inline-block; width: 24px">
              <jt-button-group dock="right" style="float: right">
                <jt-button>Structure</jt-button>
                <jt-button>Git</jt-button>
              </jt-button-group>
              <jt-button-group dock="left" style="float: left">
                <jt-button>Project</jt-button>
              </jt-button-group>
            </jt-rotated-view>
          </jt-border>
        </div>
      </template>
      <textarea slot="code">
        <div style="height: 250px; font-size: 0">
          <jt-border inline all style="height: 100%">
            <jt-rotated-view style="display: inline-block; width: 24px">
              <jt-button-group dock="right" style="float: right">
                <jt-button>Project</jt-button>
              </jt-button-group>
              <jt-button-group dock="left" style="float: left">
                <jt-button>Structure</jt-button>
                <jt-button>Git</jt-button>
              </jt-button-group>
            </jt-rotated-view>
          </jt-border>
          <jt-border inline vertical style="width: calc(100% - 52px); height: 100%; vertical-align: top">
            <div style="display: inline-block; font-size: 14px; padding: 10px">
              Body
            </div>
          </jt-border>
          <jt-border inline all style="height: 100%">
            <jt-rotated-view right style="display: inline-block; width: 24px">
              <jt-button-group dock="right" style="float: right">
                <jt-button>Structure</jt-button>
                <jt-button>Git</jt-button>
              </jt-button-group>
              <jt-button-group dock="left" style="float: left">
                <jt-button>Project</jt-button>
              </jt-button-group>
            </jt-rotated-view>
          </jt-border>
        </div>
      </textarea>
    </jt-snippet>

  </div>
</template>
