//get rid of the focus ring around 3d viewer
let modelviewer = document.querySelector("#modelviewer")
const gitHubButton = document.querySelector(".fa fa-github-square")
const linkedInButton = document.querySelector(".fa fa-linkedin")
const youtubeButton = document.querySelector(".fa fa-youtube")

var sheet = new CSSStyleSheet
sheet.replaceSync( `:focus { outline: none }`)
modelviewer.shadowRoot.adoptedStyleSheets = [sheet];

gitHubButton.addEventListener("click", function(){
    window.open( 
        "", "_blank");
})