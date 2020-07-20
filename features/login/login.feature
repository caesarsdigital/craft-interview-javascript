Feature: Interview task
  As a candidate
  I want to show off my skills during this interview
  So that I can prove my technical abilities

  # Please automate the following scenario through the browser in the given framework
  @task-1 @test
  Scenario: Patron can log in and out of sportsbook
    Given I am on the Sportsbook
    When I enter incorrect credentials
    Then there is an error informing me about incorrect credentials

  # Please automate the following scenario through the API in the given framework
  @task-2
  Scenario: Developer can retrieve sporting events for the next 24 hours from the API
    Given I retrieve all events from the API
    When the events are filtered for the next 24 hours
    Then all the remaining events are from the next 24 hours
