$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login/login_logout.feature");
formatter.feature({
  "line": 1,
  "name": "As a Amazon user I should not be able to login with invalid credentials",
  "description": "",
  "id": "as-a-amazon-user-i-should-not-be-able-to-login-with-invalid-credentials",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8996036500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login into the application with valid credentials",
  "description": "",
  "id": "as-a-amazon-user-i-should-not-be-able-to-login-with-invalid-credentials;login-into-the-application-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the Login page URL \"https://www.amazon.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sign in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I should see Sign In Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"mandula223@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \"testpassword\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.in/",
      "offset": 28
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 4574576300,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_click_on_sign_in_button_and_wait_for_sign_in_page()"
});
formatter.result({
  "duration": 3936750600,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_should_see_Sign_In_Page()"
});
formatter.result({
  "duration": 51684900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mandula223@gmail.com",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 716066400,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Click_on_Continue_button()"
});
formatter.result({
  "duration": 2574828100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testpassword",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 525010700,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 1705436700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1924240600,
  "status": "passed"
});
});