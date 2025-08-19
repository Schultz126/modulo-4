document.querySelector('span#burguer').addEventListener('click', function() {
    const burguerMenu = document.querySelector('menu#menu');
    if(burguerMenu.className === 'no-display') {
        burguerMenu.classList.remove('no-display');
        burguerMenu.classList.add('display');
    } else if (burguerMenu.className === 'display') {
        burguerMenu.classList.remove('display');
        burguerMenu.classList.add('no-display');
    }
})