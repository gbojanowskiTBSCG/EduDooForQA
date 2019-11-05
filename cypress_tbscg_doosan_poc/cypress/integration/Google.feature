Feature: The Google

  I want to search for things

  Scenario: Opening a search engine
    Given I open Google page
    And I type Doosan into search
    And I select first suggestion
    Then Site contains information about results count