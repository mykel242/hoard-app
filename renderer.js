const information = document.getElementById('info');
information.innerHTML = "" +
	`<li>Chrome   | v${versions.chrome()}   </li>` + 
	`<li>Node.js  | v${versions.node()}     </li>` +
	`<li>Electron | v${versions.electron()} </li>`;