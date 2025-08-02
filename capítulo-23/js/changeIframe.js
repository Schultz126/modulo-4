function addFunctionToButtons() {
    const buttons = document.getElementsByClassName('roundButton');
    for(let i = 0; i < buttons.length; i++) {
        const buttonId = buttons[i].id;
        const tela = document.getElementById('celular');
        switch(buttonId) {
            case 'facebookButton':
                const element1 = document.getElementById(buttonId);
                element1.addEventListener('click', function() {
                     tela.innerHTML = '<iframe src="../html/screens/facebookScreen.html" name="tela" id="tela" frameborder="0"></iframe>';
                })
                break;
            case 'githubButton':
                const element2 = document.getElementById(buttonId);
                element2.addEventListener('click', function() {
                     tela.innerHTML = '<iframe src="../html/screens/githubScreen.html" name="tela" id="tela" frameborder="0"></iframe>';
                })
                break;
            case 'instagramButton':
                const element3 = document.getElementById(buttonId);
                element3.addEventListener('click', function() {
                    tela.innerHTML = '<iframe src="../html/screens/instagramScreen.html" name="tela" id="tela" frameborder="0"></iframe>';
                })
                break;
            case 'twitterButton':
                const element4 = document.getElementById(buttonId);
                element4.addEventListener('click', function() {
                tela.innerHTML = '<iframe src="../html/screens/twitterScreen.html" name="tela" id="tela" frameborder="0"></iframe>';
                })
                break;
            case 'youtubeButton':
                const element5 = document.getElementById(buttonId);
                element5.addEventListener('click', function() {
                    tela.innerHTML = '<iframe src="../html/screens/youtubeScreen.html" name="tela" id="tela" frameborder="0"></iframe>';
                })
                break;
            case 'returnButton':
                const element6 = document.getElementById(buttonId);
                element6.addEventListener('click', function() {
                    tela.innerHTML = '<iframe src="home.html" name="tela" id="tela" frameborder="0"></iframe>';
                })
        }
    }
}
