const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const setColourMode = () => {
    console.log('setColourMode');
    console.log(localStorage.getItem('colourMode'));

    if (localStorage.getItem('colourMode') == 'dark') {
        setDarkMode();
        darkButton.click();
    } else if (localStorage.getItem('colourMode') == 'light'){
        setLightMode();
        lightButton.click();
    }
}

const checkMode = () => {
    if (localStorage.getItem('colourMode') == null){
        if (window.matchMedia('(prefers-color-scheme: light)').matches){
        lightButton.click();
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkButton.click();
        }
    }
    
}

const checkModeChange = () => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        checkMode();
      });
}

const setDarkMode = () => {
    console.log('setDarkMode');
    (document.querySelector('body').classList = 'dark');
}
const setLightMode = () => {
    console.log('setLightMode');
    (document.querySelector('body').classList = 'light');
}

setColourMode();
checkMode();
checkModeChange();

const radioButtons = document.querySelectorAll('.toggle__wrapper input');
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', event => {
        console.log('radio button clicked');
        if(darkButton.checked) {
            localStorage.setItem('colourMode', 'dark');
            setDarkMode();
        } else {
            localStorage.setItem('colourMode', 'light');
            setLightMode();
        }
        
    });
}