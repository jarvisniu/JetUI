<template>
  <div>

    <h2>Panel</h2>

    <h4>Features</h4>
    <ul>
      <li>Highlight title when focused.</li>
    </ul>

    <h4>Basic</h4>
    <jt-border inline all>
      <jt-panel title="Message" style="width: 400px;">
        <div style="padding: 10px;">
          Hello World!
        </div>
      </jt-panel>
    </jt-border>

    <h4>Slot Title & Control</h4>
    <jt-border inline all>
      <jt-panel title="Message" style="width: 400px;">
        <div slot="title">
          <jt-panel-button>HTML</jt-panel-button>
        </div>
        <div slot="control">
          <jt-panel-button>+</jt-panel-button>
          <jt-panel-button>-</jt-panel-button>
        </div>
        <div style="padding: 10px;">
          &lt;body&gt;Content&lt;/body&gt;
        </div>
      </jt-panel>
    </jt-border>

  </div>
</template>
