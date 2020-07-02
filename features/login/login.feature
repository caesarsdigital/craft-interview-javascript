Feature: Interview task
  As a candidate
  I want to show off my skills during this interview
  So that I can prove my technical abilities

  # Please automate the following scenario through the browser in the given framework
  @task-1
  Scenario: Patron can log in and out of sportsbook
    Given I am on the Sportsbook
    And I am logged in
    When I log out
    Then I am successfully logged out of sportsbook

  # Please automate the following scenario through the API in the given framework
  @task-2
  Scenario: Developer can retrieve sporting events for the next 24 hours from the API
    Given I am logged in to the Sportsbook
    When I log into my account via another client
    Then my first session must be terminated

