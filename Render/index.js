console.log('>> renderer.js');
const information = document.getElementById('info');

information.innerHTML = "" +
	`<li>Chrome   | v${ versions.chrome()	} </li>` + 
	`<li>Node.js  | v${ versions.node()		} </li>` +
	`<li>Electron | v${ versions.electron() } </li>`;

const ipcTestField  = document.getElementById('ipcTestField');
const ipcTestButton = document.getElementById('ipcTestButton');
const ipcTestResult = document.getElementById('ipcTestResult');

/* UI -> electron main process
ipcTestButton.addEventListener("click", () => {
	const inputText = ipcTestField.value;
	if (inputText.trim() !== "") {
		myBridge.sendIPCTest(inputText);
	}
});
*/

/* UI -> electron main process -> UI */
ipcTestButton.addEventListener("click", async () => {

	const inputText = ipcTestField.value.trim();
	if (inputText !== "") {
		const result = await myBridge.logToRenderer(inputText);
		ipcTestResult.innerHTML += result;
		ipcTestField.value = "";
	}
});

ipcTestField.addEventListener("change", async () => {
	const inputText = ipcTestField.value.trim();
	if (inputText !== "") {
		const result = await myBridge.logToRenderer(inputText);
		ipcTestResult.innerHTML += result;
		ipcTestField.value = "";
	}
});
