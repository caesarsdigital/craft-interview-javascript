@interview-api
Feature: Interview API task
  As a candidate
  I want to show off my skills during this interview
  So that I can prove my technical abilities

  @api
  Scenario: Using Javascript to work with API responses
    Given I retrieve football events from the API
    When the events are filtered by startTime in descending order
    Then the events are in descending order
