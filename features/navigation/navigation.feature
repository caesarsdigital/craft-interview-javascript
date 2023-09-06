@interview
Feature: Interview task 2
  As a candidate
  I want to show off my skills during this interview
  So that I can prove my technical abilities

  @Skip @task-2
  Scenario Outline: I see many events displayed when I navigate to a sport category
    Given I am on the Sportsbook
    When I navigate to <sport>
    Then I see more than 1 event

    Examples:
      | sport    |
      | football |
      | baseball |

  # Note:
  # There are different ways to get to a specific sport category.
  # Choose which route you'd like to automate, but elaborate on why you decided it.
  # The first step is already complete, you'll need to definite and complete any other steps.
