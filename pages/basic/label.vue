<template>
  <div>

    <h2>Label</h2>

    <h4>Features</h4>
    <ul>
      <li>Vertically align with inline controls like button, input, etc.</li>
    </ul>

    <h4>Basic</h4>
    <jt-border inline all style="padding: 4px;">
      <jt-label>Name:</jt-label>
      <jt-input></jt-input>
    </jt-border>

    <h4>Styles</h4>
    <jt-border inline all style="padding: 4px;">
      <jt-label bold>Bold (b)</jt-label>
      <jt-label italic>Italic (i)</jt-label>
      <jt-label underline>Underline (u)</jt-label>
      <jt-label strikethrough>Strikethrough (s)</jt-label>
      <jt-label overline>Overline (o)</jt-label>
      <jt-label b i u s o>All Styles (b i u o s)</jt-label>
    </jt-border>

    <h4>Set Width</h4>
    <jt-border inline all>
      <div style="margin: 4px;">
        <jt-label width="60">Name:</jt-label>
        <jt-input></jt-input>
      </div>
      <div style="margin: 4px;">
        <jt-label width="60">Age:</jt-label>
        <jt-input></jt-input>
      </div>
    </jt-border>

  </div>
</template>
