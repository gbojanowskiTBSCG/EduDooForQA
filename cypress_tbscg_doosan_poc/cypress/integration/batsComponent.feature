Feature: The bats

  In BATs component I want see all data from the API

  Scenario: Opening a BATs component Page
  Given Page with BATs component
  When Page filtered by serial number
  Then code is displaying
  Then code description is displaying
  And detailed description is displaying
  And component links are displaying
  And causes are displaying
  And conditions for alarm are displaying
  And conditions for clearing alarm are displaying
  And troubleshooting chart notes are displaying
  And troubleshooting chart steps are displaying
  And warning data are displaying