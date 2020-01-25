/**
 * Arquivo: homePage.ts
 * Data: 01/08/2018
 * Author: Fernanda Ferreira
 */

import Page from '../page';

class Home_Page extends Page {
    get miniLogoImg() {
        return $('.app-topbar-right');
    }

    open() {
        browser.url('/'); //provide your additional URL if any. this will append to the baseUrl to form complete URL
    }
}
const HomePage = new Home_Page();
export default HomePage;
