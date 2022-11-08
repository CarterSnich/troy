document.querySelector('#download-button').addEventListener('click', function () {
    let filename = 'audiofish - not a virus, just a txt file with an exe extension.exe'

    let element = document.createElement('a');
    element.setAttribute('href', `data:text/plain;charset=utf-8,` + encodeURIComponent(filename));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
})
