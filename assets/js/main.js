//get rid of the focus ring around 3d viewer
let modelviewer = document.querySelector("#modelviewer")

var sheet = new CSSStyleSheet
sheet.replaceSync( `:focus { outline: none }`)
modelviewer.shadowRoot.adoptedStyleSheets = [sheet];

