import FormPage from "../pageobjects/form.page.js";

describe("auth form", () => {
    it("should deny access with wrong creds", async () => {
        await FormPage.open();
        await FormPage.username.setValue("foo");
        await FormPage.password.setValue("bar");
        await FormPage.submit();

        await FormPage.flash.waitForDisplayed();
        await FormPage.flash.saveScreenshot("./lost-pixel/invalidUsername.png");
        await expect(FormPage.flash).toHaveTextContaining(
            "Your username is invalid!"
        );
    });

    it("should allow access with correct creds", async () => {
        await FormPage.open();
        await FormPage.username.setValue("tomsmith");
        await FormPage.password.setValue("SuperSecretPassword!");
        await FormPage.password.saveScreenshot("./lost-pixel/password.png");
        await FormPage.submit();

        await FormPage.flash.waitForDisplayed();
        await FormPage.flash.saveScreenshot("./lost-pixel/loggedIn.png");
        await expect(FormPage.flash).toHaveTextContaining(
            "You logged into a secure area!"
        );
    });
});
