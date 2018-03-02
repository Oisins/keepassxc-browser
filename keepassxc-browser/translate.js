'use strict'

const items = document.querySelectorAll('[data-i18n]');
for (let item of items) {
    const key = item.getAttribute('data-i18n');
    if (key) {
        const translation = browser.i18n.getMessage(key);
        if (item.hasAttribute('href')) {
            item.text = translation;
        } else {
            item.innerText = translation;
        }
    }
}
