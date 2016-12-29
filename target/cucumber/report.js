$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('dataTableCheck\Data.feature');
formatter.feature({
  "line": 1,
  "name": "Login action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the new user registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter invalid data on the page",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 8
    },
    {
      "cells": [
        "First Name",
        "Tom"
      ],
      "line": 9
    },
    {
      "cells": [
        "Last Name",
        "Kenny"
      ],
      "line": 10
    },
    {
      "cells": [
        "Email Address",
        "someone@someone.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "Re-enter Email Address",
        "someone@someone.com"
      ],
      "line": 12
    },
    {
      "cells": [
        "Password",
        "Password1"
      ],
      "line": 13
    },
    {
      "cells": [
        "Birthdate",
        "01"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user registration should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.goToFacebook()"
});
formatter.result({
  "duration": 20122125945,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.enterData(DataTable)"
});
formatter.result({
  "duration": 1230001857,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_registration_should_be_unsuccessful()"
});
formatter.result({
  "duration": 23241092,
  "status": "passed"
});
});