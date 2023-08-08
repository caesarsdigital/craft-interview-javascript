@interview
Feature: Interview task 1
  As a candidate
  I want to show off my skills during this interview
  So that I can prove my technical abilities

  @task-1
  Scenario: An error message is displayed when logging in with invalid credentials
    Given I am on the Sportsbook
    When I enter invalid credentials
    Then there is an error informing me about invalid credentials
