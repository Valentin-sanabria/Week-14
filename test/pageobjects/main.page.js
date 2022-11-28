class HomePage {

    get addBackpack() {
        return  $('//*[@id="add-to-cart-sauce-labs-backpack"]');
    }

    get addShirt() {
        return  $('//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }

    get addJacket() {
        return  $('#add-to-cart-sauce-labs-fleece-jacket');
    }

    get addBikeLight() {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get shopCartBtn() {
        return  $('//*[@id="shopping_cart_container"]/a');
    }

    get sideBarBurger() {
        return $('#react-burger-menu-btn');
    }

    get logoutBtn() {
        return $('#logout_sidebar_link');
    }

    get resetApp() {
        return $('#reset_sidebar_link');
    }

    get closeBurgerMenu() {
        return $('//*[@id="react-burger-cross-btn"]');
    }

    get backpackImg() {
        return $('#item_4_img_link > img');
    }

    get bikelightImg() {
        return $('#item_0_img_link > img');
    }

    get shopCart() {
        return $('#shopping_cart_container > a');
    }

    get twitterIcon() {
        return $('#page_wrapper > footer > ul > li.social_twitter > a');
    }

    get facebookIcon() {
        return $('#page_wrapper > footer > ul > li.social_facebook > a');
    }

    get linkedinIcon() {
        return $('#page_wrapper > footer > ul > li.social_linkedin > a');
    }

    async logout () {
        await this.sideBarBurger.click();
        await this.logoutBtn.waitForClickable();
        await this.logoutBtn.click();
    }

    open () {
        return super.open('login');
    }
}

export default new HomePage();