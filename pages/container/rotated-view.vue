<template>
  <div>
    <h2>Rotated View</h2>

    <h4>Note</h4>
    <ul>
      <li>Must set width manually. Can't auto detect.</li>
    </ul>

    <h4>Features</h4>
    <ul>
      <li>Left or right.</li>
    </ul>

    <h4>TODO</h4>
    <ul>
      <li>Auto detect the container width.</li>
    </ul>

    <h4>Basic</h4>
    <div style="height: 250px; font-size: 0;">
      <jt-border inline all style="height: 100%;">
        <jt-rotated-view style="display: inline-block; width: 24px;">
          <jt-toggle-bar style="float: right;">
            <jt-toggle-bar-button>Project</jt-toggle-bar-button>
          </jt-toggle-bar>
          <jt-toggle-bar style="float: left;">
            <jt-toggle-bar-button>Structure</jt-toggle-bar-button>
            <jt-toggle-bar-button>Git</jt-toggle-bar-button>
          </jt-toggle-bar>
        </jt-rotated-view>
      </jt-border>
      <jt-border inline vertical style="width: calc(100% - 52px); height: 100%; vertical-align: top;">
        <div style="display: inline-block; font-size: 14px; padding: 10px;">
          Body
        </div>
      </jt-border>
      <jt-border inline all style="height: 100%;">
        <jt-rotated-view right style="display: inline-block; width: 24px;">
          <jt-toggle-bar style="float: right;">
            <jt-toggle-bar-button>Project</jt-toggle-bar-button>
          </jt-toggle-bar>
          <jt-toggle-bar style="float: left;">
            <jt-toggle-bar-button>Structure</jt-toggle-bar-button>
            <jt-toggle-bar-button>Git</jt-toggle-bar-button>
          </jt-toggle-bar>
        </jt-rotated-view>
      </jt-border>
    </div>

  </div>
</template>
