@interview
Feature: Interview task 3
  As a candidate
  I want to show off my skills during this interview
  So that I can prove my technical abilities

  @Skip @task-3
  Scenario: Changing the odds from decimal to american using the betslip on mobile view
    Given I am on the Sportsbook
    When I change the odds settings from decimal to american
    Then the odds displayed contain a '+' or '-' sign

  # Note:
  # There are different ways to change the odds displayed
  # The requirement here is to automate the process of changing the setting from the BETSLIP only
  # AND do this while using a mobile-sized viewport
