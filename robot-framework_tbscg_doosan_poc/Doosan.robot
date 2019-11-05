*** Settings ***
Suite Setup       Open the browser
Library           SeleniumLibrary
Resource          Resources/Doosan.robot
Resource          Resources/Locators.robot

*** Test Cases ***
I want to search for things
    [Tags]    Valid
    I open Google page
    I type Doosan into search
    I select first suggestion
    Site contains information about results count
    [Teardown]    Close Browser

I want to be able download or displayed pdf for Schematics
    [Tags]    ongoing
    Open Page with schematics component
    Click Add a serial number
    Type serial number
    Click ENTER key
    Comment    Click first schematics
    Comment    pdf file has been downloaded

*** Keywords ***
component links are displaying

troubleshooting chart steps are displaying
