Feature: Login action
Scenario Outline: Successful Login with Valid Credentials

Given user navigates to facebook

When I enter Username as "<username>" and Password as "<password>"

Then login should be unsuccessful

Examples:
| username  | password  | 
| username1 | password1 | 
| username2 | password2 |

