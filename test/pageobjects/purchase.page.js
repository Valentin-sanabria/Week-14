class purchaseObjects {

    get continueShoppingBtn() {
        return $('//*[@id="continue-shopping"]');
    }

    get checkoutBtn() {
        return  $('//*[@id="checkout"]');
    }

    get nameInputForm() {
        return $('#first-name');
    }

    get surnameInputForm() {
        return $('#last-name');
    }

    get zipInputForm() {
        return $('#postal-code');
    }

    get formErrorMsg() {
        return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error');
    }

    get closeErrorMsg() {
        return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3 > button > svg');
    }

    get continueForm() {
        return $('#continue');
    }

    get pageTitle() {
        return $('#header_container > div.header_secondary_container > span');
    }

    get freeShipping() {
        return $('#checkout_summary_container > div > div.summary_info > div:nth-child(4)');
    }

    get itemsTotal() {
        return $('#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label');
    }

    get totalSummary() {
        return $('#checkout_summary_container > div > div.summary_info > div.summary_total_label');
    }

    get finishPurchaseBtn() {
        return $('#finish');
    }

    get finishedOrderTitle() {
        return $('#checkout_complete_container > h2');
    }

    get finishedOrderDescription() {
        return $('#checkout_complete_container > div');
    }

    get finishedOrderImg() {
        return $('#checkout_complete_container > img');
    }

    get backToHome() {
        return $('#back-to-products');
    }
}

export default new purchaseObjects()