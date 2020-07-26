//get rid of the focus ring around 3d viewer
let modelviewer = document.querySelector("#modelviewer")
const gitHubButton = document.querySelector(".fa-github-square")
const linkedInButton = document.querySelector(".fa-linkedin")
const youtubeButton = document.querySelector(".fa-youtube")

var sheet = new CSSStyleSheet
sheet.replaceSync( `:focus { outline: none }`)
modelviewer.shadowRoot.adoptedStyleSheets = [sheet];

gitHubButton.addEventListener("click", function(){
    window.open( 
        "https://github.com/leon-taira", "_blank");
})
linkedInButton.addEventListener("click", function(){
    window.open( 
        "https://www.linkedin.com/in/leon-taira-hoy/", "_blank");
})
youtubeButton.addEventListener("click", function(){
    window.open( 
        "https://github.com/leon-taira", "_blank");
})


