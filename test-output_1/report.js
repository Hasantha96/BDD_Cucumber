$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/BDD/BDD/src/test/resources/features/ActiLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Smoke#Regression"
    }
  ],
  "line": 2,
  "name": "User Login",
  "description": "",
  "id": "user-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Sucessful Login",
  "description": "",
  "id": "user-login;sucessful-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on the \"Home\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#      When User click on \"Sign In\" link"
    }
  ],
  "line": 6,
  "name": "User fill in \"Username\" with \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User fill in \"Password\" with \"manager\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#      Then User should be on the \"My Account\" page on URL \"http://automationpractice.com/index.php?controller\u003dmy-account\""
    }
  ],
  "line": 10,
  "name": "User should see \"Enter Time-Track\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/",
      "offset": 35
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 8284456300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 14
    },
    {
      "val": "admin",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 96837800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 14
    },
    {
      "val": "manager",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 75702500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 158190600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Time-Track",
      "offset": 17
    }
  ],
  "location": "Login.user_should_see_message(String)"
});
formatter.result({
  "duration": 2914587600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 21
    }
  ],
  "location": "Login.user_should_see_the_button(String)"
});
formatter.result({
  "duration": 81966800,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 4161405400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Multiple User Login",
  "description": "",
  "id": "user-login;multiple-user-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User is on the \"Home\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#      When User click on \"Sign In\" link"
    }
  ],
  "line": 17,
  "name": "User fill in login credentials with \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#      Then User should be on the \"My Account\" page on URL \"http://automationpractice.com/index.php?controller\u003dmy-account\""
    }
  ],
  "line": 20,
  "name": "User should see \"Enter Time-Track\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "user-login;multiple-user-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 24,
      "id": "user-login;multiple-user-login;;1"
    },
    {
      "cells": [
        "admin",
        "manager"
      ],
      "line": 25,
      "id": "user-login;multiple-user-login;;2"
    },
    {
      "cells": [
        "trainee",
        "trainee"
      ],
      "line": 26,
      "id": "user-login;multiple-user-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Multiple User Login",
  "description": "",
  "id": "user-login;multiple-user-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User is on the \"Home\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#      When User click on \"Sign In\" link"
    }
  ],
  "line": 17,
  "name": "User fill in login credentials with \"admin\" and \"manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#      Then User should be on the \"My Account\" page on URL \"http://automationpractice.com/index.php?controller\u003dmy-account\""
    }
  ],
  "line": 20,
  "name": "User should see \"Enter Time-Track\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/",
      "offset": 35
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 8134409300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 37
    },
    {
      "val": "manager",
      "offset": 49
    }
  ],
  "location": "Login.user_fill_in_login_credentials_with_and(String,String)"
});
formatter.result({
  "duration": 160012300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 131285000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Time-Track",
      "offset": 17
    }
  ],
  "location": "Login.user_should_see_message(String)"
});
formatter.result({
  "duration": 3820142300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 21
    }
  ],
  "location": "Login.user_should_see_the_button(String)"
});
formatter.result({
  "duration": 69081100,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 270300300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Multiple User Login",
  "description": "",
  "id": "user-login;multiple-user-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User is on the \"Home\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#      When User click on \"Sign In\" link"
    }
  ],
  "line": 17,
  "name": "User fill in login credentials with \"trainee\" and \"trainee\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#      Then User should be on the \"My Account\" page on URL \"http://automationpractice.com/index.php?controller\u003dmy-account\""
    }
  ],
  "line": 20,
  "name": "User should see \"Enter Time-Track\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/",
      "offset": 35
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 7272831800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trainee",
      "offset": 37
    },
    {
      "val": "trainee",
      "offset": 51
    }
  ],
  "location": "Login.user_fill_in_login_credentials_with_and(String,String)"
});
formatter.result({
  "duration": 178803700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 126529400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Time-Track",
      "offset": 17
    }
  ],
  "location": "Login.user_should_see_message(String)"
});
formatter.result({
  "duration": 3989351600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 21
    }
  ],
  "location": "Login.user_should_see_the_button(String)"
});
formatter.result({
  "duration": 89754400,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 346851100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Invalid Login",
  "description": "",
  "id": "user-login;invalid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User is on the \"Home\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#      When User click on \"Sign In\" link"
    }
  ],
  "line": 31,
  "name": "User fill in \"Username\" with \"manager\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User fill in \"Password\" with \"manager\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "#      Then User should be on the \"My Account\" page on URL \"http://automationpractice.com/index.php?controller\u003dmy-account\""
    }
  ],
  "line": 35,
  "name": "User should see the error \"Username or Password is invalid. Please try again.\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/",
      "offset": 35
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 6384120300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 14
    },
    {
      "val": "manager",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 95004200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 14
    },
    {
      "val": "manager",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 108591300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 157778800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username or Password is invalid. Please try again.",
      "offset": 27
    }
  ],
  "location": "Login.user_should_see_the_error(String)"
});
formatter.result({
  "duration": 1204529900,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 303163700,
  "status": "passed"
});
});