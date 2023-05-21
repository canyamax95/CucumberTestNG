$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Adidas Login",
  "description": "",
  "id": "adidas-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Adidas Login Test",
  "description": "",
  "id": "adidas-login;adidas-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is adidas Online Shop | adidas CA",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on email login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user quit",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "adidas-login;adidas-login-test;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 13,
      "id": "adidas-login;adidas-login-test;;1"
    },
    {
      "cells": [
        "maulik.mech20@gmail.com",
        "M@ulik@95"
      ],
      "line": 14,
      "id": "adidas-login;adidas-login-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Adidas Login Test",
  "description": "",
  "id": "adidas-login;adidas-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is adidas Online Shop | adidas CA",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"maulik.mech20@gmail.com\" and \"M@ulik@95\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on email login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinitions.user_already_on_Login_page()"
});
formatter.result({
  "duration": 8637955000,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinitions.title_of_login_page_is_Adidas_Login()"
});
formatter.result({
  "duration": 18415300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "maulik.mech20@gmail.com",
      "offset": 13
    },
    {
      "val": "M@ulik@95",
      "offset": 43
    }
  ],
  "location": "loginStepDefinitions.user_enters_email_Password(String,String)"
});
formatter.result({
  "duration": 1353894000,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinitions.user_clicks_on_email_login_button()"
});
formatter.result({
  "duration": 358174700,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinitions.user_quit()"
});
formatter.result({
  "duration": 1524972100,
  "status": "passed"
});
});