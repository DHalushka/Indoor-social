// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search')

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customise-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalete = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');



/** ======================== SIDEBAR ===================== */
// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = "none";
        } else{
            document.querySelector('.notification-popup').style.display = "block";
            document.querySelector('#notifications .notification-count').style.display="none";
        }
    })
})


/** ======================= MESSAGES ===================== */

// Search chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();        
        if(name.indexOf(val) != -1){
            chat.style.display = "flex";
        } else{
            chat.style.display = "none";
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage);

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector('.notification-count').style.display="none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    } , 2000);
})


/** ================= THEME CUSTOMIZATION ================ */

const openThemeModal = () => {
    themeModal.style.display = "grid";
}
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customise-theme')){
        themeModal.style.display = "none";
    }
}

theme.addEventListener('click',openThemeModal);
themeModal.addEventListener('click',closeThemeModal);


/** ------------------------ FONTS ----------------------- */

// remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click',() => {
        removeSizeSelector();
        let fontSize;
        root.style.setProperty('----sticky-top-left','5.4rem');
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize = "10px";
            root.style.setProperty('----sticky-top-left','5.4rem')
        } else if(size.classList.contains('font-size-2')){
            fontSize = "13px";
            root.style.setProperty('----sticky-top-left','5.4rem')
        } else if(size.classList.contains('font-size-3')){
            fontSize = "16px";
            root.style.setProperty('----sticky-top-left','-2rem')
        } else if(size.classList.contains('font-size-4')){
            fontSize = "19px";
            root.style.setProperty('----sticky-top-left','-5rem')
        } else if(size.classList.contains('font-size-5')){
            fontSize = "21px";
            root.style.setProperty('----sticky-top-left','-10rem')
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
    
})


/** -------------------- PRIMARY COLOR ------------------- */

//remove active class from colors
const changeActiveColorClass = () => {
    colorPalete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPalete.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        //remove active class from all colors
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 330;
        } else if(color.classList.contains('color-2')){
            primaryHue = 230;
        } else if(color.classList.contains('color-3')){
            primaryHue = 29;
        } else if(color.classList.contains('color-4')){
            primaryHue = 130;
        } else if(color.classList.contains('color-5')){
            primaryHue = 158;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})



/** --------------------- BACKGROUND -------------------- */

let backColorLightness;
let whitetColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty('--back-color-lightness' ,backColorLightness);
    root.style.setProperty('--dark-color-lightness' ,darkColorLightness);
    root.style.setProperty('--white-color-lightness' ,whitetColorLightness);
}

bg2.addEventListener('click', () => {
    // add active class
    bg2.classList.add('active');
    // remove active class from others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    //remove customized changes from local storage
    window.location.reload();
});
bg1.addEventListener('click', () => {
    darkColorLightness = '15%';
    whitetColorLightness = '48%';
    backColorLightness = '84%';

    // add active class
    bg1.classList.add('active');
    // remove active class from others
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    changeBg();
});
bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whitetColorLightness = '10%';
    backColorLightness = '0%';

    // add active class
    bg3.classList.add('active');
    // remove active class from others
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBg();
})

