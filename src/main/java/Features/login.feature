@tag
Feature: Adidas Login
  
Scenario Outline: Adidas Login Test 
   
Given user is already on Login Page
When title of login page is adidas Online Shop | adidas CA
Then user enters "<email>" and "<password>"
Then user clicks on email login button
Then user quit

Examples: 
 | email | password |
 | maulik.mech20@gmail.com | M@ulik@95 |
