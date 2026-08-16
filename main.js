document.addEventListener('DOMContentLoaded' , () => {
    const tabs = document.querySelectorAll('.tab-item');
    const tabsContents = document.querySelectorAll('.features-tab');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            tabsContents.forEach(content => content.classList.add('hidden'));
            tabsContents[index].classList.remove('hidden');
        })
    })

    const form = document.querySelector('.contact-form');
    const inputWrapper = document.querySelector('.input-wrapper');
    const emailInput = document.querySelector('.contact-input');

    if(form) {
        form.addEventListener('submit', function (event){
            event.preventDefault();

            if (!emailInput.validity.valid || emailInput.value.trim() === '') {
                inputWrapper.classList.add('error');
            }else{
                inputWrapper.classList.remove('error');
                emailInput.value = '';
            }
        })

        emailInput.addEventListener('input', function() {
            inputWrapper.classList.remove('error');
        });
    }

    const btnOpen = document.getElementById('menu-open');
    const btnClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    if(btnOpen && btnClose && mobileMenu){
        btnOpen.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });
        btnClose.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
})

