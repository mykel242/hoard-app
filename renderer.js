console.log("renderer.js")

const pFunc = async () => {
	const response = await window.versions.ping()
	console.log(response)
}
pFunc()

const information = document.getElementById('info')
information.innerHTML = "" +
	`<li>Chrome   | v${versions.chrome()}   </li>` + 
	`<li>Node.js  | v${versions.node()}     </li>` +
	`<li>Electron | v${versions.electron()} </li>`