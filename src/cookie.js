export function cookieToShow () {
    const cookieConsent = document.querySelector('.cookie-consent');
    const cookieConsentButton = document.querySelector('.cookie-consent__button');

    cookieConsentButton.addEventListener('click', () => {
        localStorage.setItem('cookie', 'accepted');
            cookieConsent.classList.add('hide');
        });

        const cookieAccepted = localStorage.getItem('cookie');

        if (cookieAccepted === 'accepted') {
            cookieConsent.classList.add('hide');
        }
}
