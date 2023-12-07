
function reUrl(){
    let reUrl = 'http://101.37.150.251:888';
    let currentUrl = window.location.href;
    let newUrl = currentUrl.replace('https://bvv-kj.github.io', reUrl);
    newUrl = newUrl.replace('http://bvv-kj.github.io', reUrl);
    window.location.replace(newUrl);
}
