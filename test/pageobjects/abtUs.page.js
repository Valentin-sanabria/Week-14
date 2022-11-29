class abtUsPage {

    get aboutUs() {
        return $('#about_sidebar_link');
    }

    get aboutUsImg() {
        return $('#entry-3qDFahnypj1KkiORyU1Zyh > div > div > div > div.column.is-7.image-container > div > picture > img');
    }

    get abtUsTitle() {
        return $('#entry-3qDFahnypj1KkiORyU1Zyh > div > div > div > div.column.is-full-mobile.is-5-desktop.is.reference-container > div > h2');
    }

    get tryFreeBtn() {
        return $('#entry-3qDFahnypj1KkiORyU1Zyh > div > div > div > div.column.is-full-mobile.is-5-desktop.is.reference-container > div > div.link-list.display-horizontal-on-mobile > ul > li:nth-child(1) > a');
    }
}

export default new abtUsPage();