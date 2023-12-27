let tabHeaders = document.querySelectorAll('.tabheader');
let tabPages = document.querySelectorAll('.tabpage');

tabHeaders.forEach((tabHeader,i)=>{
    tabHeader.addEventListener('click',()=>{

        tabPages.forEach(tabPage => {
            tabPage.style.display = 'none';
        });
        tabPages[i].style.display = 'block';

        tabHeaders.forEach(header =>{
            header.classList.remove('active');
        })
        tabHeader.classList.add('active');
    })
});