document.querySelector('#exit-btn').addEventListener("click",
    function (e) {
        ipcRenderer.send('close-me');
    }
);