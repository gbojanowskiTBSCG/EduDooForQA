Feature: Schematic dosc

  I want to be able download or displayed pdf for Schematics

  Scenario: Download schematics dosc through Schematics Widget
    Given Open Page with schematics component
    When Click Add a serial number
    And Type serial number
    And Click ENTER key
    And Click first schematics
    Then pdf file has been downloaded