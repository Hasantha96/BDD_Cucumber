#Smoke#Regression
  Feature: User Login
    Scenario: Sucessful Login
      Given User is on the "Home" page on URL "https://demo.actitime.com/"
#      When User click on "Sign In" link
      When User fill in "Username" with "admin"
      And User fill in "Password" with "manager"
      And User click on the "Log In" button
#      Then User should be on the "My Account" page on URL "http://automationpractice.com/index.php?controller=my-account"
      Then User should see "Enter Time-Track" message
      And User should see the "Logout" button
      And User close the browser

    Scenario Outline: Multiple User Login
      Given User is on the "Home" page on URL "https://demo.actitime.com/"
#      When User click on "Sign In" link
      When User fill in login credentials with "<Username>" and "<Password>"
      And User click on the "Log In" button
#      Then User should be on the "My Account" page on URL "http://automationpractice.com/index.php?controller=my-account"
      Then User should see "Enter Time-Track" message
      And User should see the "Logout" button
      And User close the browser
      Examples:
      |Username |Password |
      |admin    |manager  |
      |trainee  |trainee  |

    Scenario: Invalid Login
      Given User is on the "Home" page on URL "https://demo.actitime.com/"
#      When User click on "Sign In" link
      When User fill in "Username" with "manager"
      And User fill in "Password" with "manager"
      And User click on the "Log In" button
#      Then User should be on the "My Account" page on URL "http://automationpractice.com/index.php?controller=my-account"
      Then User should see the error "Username or Password is invalid. Please try again." message
      And User close the browser