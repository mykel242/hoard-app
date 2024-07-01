console.log("renderer.js")

const information = document.getElementById('info')

information.innerText = "" +
	"<li>Chrome   |\t (v${versions.chrome()})</li>" + 
	"<li>Node.js  |\t (v${versions.node()})</li>" +
	"<li>Electron |\t (v${versions.electron()})</li>"