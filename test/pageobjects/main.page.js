class HomePage {

    get sideBarBurger () {
        return $('#react-burger-menu-btn');
    }

    get logoutBtn () {
        return $('#logout_sidebar_link');
    }

    get backpackImg () {
        return $('#item_4_img_link > img');
    }

    get bikelightImg () {
        return $('#item_0_img_link > img');
    }

    get shopCart () {
        return $('#shopping_cart_container > a');
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