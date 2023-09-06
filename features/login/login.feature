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

  # NOTE:
  # All of these steps have been defined to get you started. Only the second step will need code added.
