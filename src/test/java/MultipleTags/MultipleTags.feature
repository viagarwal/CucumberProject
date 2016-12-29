@SmokeTest @LoginTest

Feature: Login Functionality Feature

In order to ensure Login Functionality works,
I want to run the cucumber test to verify it is working

Scenario Outline: Login Functionality

Given user navigates to SOFTWARETETINGHELP.COM
When user logs in using Username as "<username>" and Password "<password>"
Then login should be successful

Examples:

| username | password |
| Tom | password |
| Harry | password |
| Jerry | password |

@positiveScenario
Scenario: Login Functionality

Given user navigates to SOFTWARETETINGHELP.COM
When user logs in using Username as "USER" and Password "PASSWORD"
Then login should be successful

@negaviveScenario
Scenario: Login Functionality

Given user navigates to SOFTWARETETINGHELP.COM
When user logs in using Username as "Vipul" and Password "AGARWAL"
