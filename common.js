
function reUrl(){
    let reUrl = 'http://118.31.122.153:888';
    let currentUrl = window.location.href;
    let newUrl = currentUrl.replace('https://bvv-kj.github.io', reUrl);
    newUrl = newUrl.replace('http://bvv-kj.github.io', reUrl);
    window.location.replace(newUrl);
}
