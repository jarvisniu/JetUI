<template>
  <div>
    <h1>Label</h1>

    <h2>Features</h2>
    <ul>
      <li>Vertically align with inline controls like button, input, etc.</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-border inline all>
          <jt-toolbar>
            <jt-label>Name:</jt-label>
            <jt-input></jt-input>
          </jt-toolbar>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border inline all>
          <jt-toolbar>
            <jt-label>Name:</jt-label>
            <jt-input></jt-input>
          </jt-toolbar>
        </jt-border>
      </textarea>
    </jt-snippet>

    <h2>Styles</h2>
    <jt-snippet>
      <template>
        <jt-border inline all>
          <jt-toolbar>
            <jt-label bold>Bold (b)</jt-label>
            <jt-label italic>Italic (i)</jt-label>
            <jt-label underline>Underline (u)</jt-label>
            <jt-label strikethrough>Strikethrough (s)</jt-label>
            <jt-label overline>Overline (o)</jt-label>
            <jt-label b i u s o>All Styles (b i u o s)</jt-label>
          </jt-toolbar>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border inline all>
          <jt-toolbar>
            <jt-label bold>Bold (b)</jt-label>
            <jt-label italic>Italic (i)</jt-label>
            <jt-label underline>Underline (u)</jt-label>
            <jt-label strikethrough>Strikethrough (s)</jt-label>
            <jt-label overline>Overline (o)</jt-label>
            <jt-label b i u s o>All Styles (b i u o s)</jt-label>
          </jt-toolbar>
        </jt-border>
      </textarea>
    </jt-snippet>

    <h2>Set Width</h2>
    <jt-snippet>
      <template>
        <jt-border inline all style="background: var(--jt-bg-container-dark)">
          <div style="margin: 4px;">
            <jt-label width="60">Name:</jt-label>
            <jt-input></jt-input>
          </div>
          <div style="margin: 4px;">
            <jt-label width="60">Age:</jt-label>
            <jt-input></jt-input>
          </div>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border inline all style="background: var(--jt-bg-container-dark)">
          <div style="margin: 4px;">
            <jt-label width="60">Name:</jt-label>
            <jt-input></jt-input>
          </div>
          <div style="margin: 4px;">
            <jt-label width="60">Age:</jt-label>
            <jt-input></jt-input>
          </div>
        </jt-border>
      </textarea>
    </jt-snippet>

  </div>
</template>
