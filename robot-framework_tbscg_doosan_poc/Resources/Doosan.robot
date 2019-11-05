*** Settings ***
Library           SeleniumLibrary
Library           Dialogs
Library           OperatingSystem

*** Keywords ***
Open the browser
    Set Global Variable    ${BROWSER}    chrome

I open Google page
    Open browser    ${PAGE_URL}    ${BROWSER}
    Title Should Be    Google

I type Doosan into search
    Input Text    ${searchBox}    Doosan

I select first suggestion
    Wait Until Element Is Visible    ${firstSuggestion}
    click element    ${firstSuggestion}

Site contains information about results count
    page should contain element    ${ResultsCount}

Open Page with schematics component
    Open browser    https://dibh-dev-dxp-kags-preview.s3.amazonaws.com/schematics.html    ${BROWSER}

Click Add a serial number
    clickelement    css:.container > .add-serial-control > .d-none

Type serial number
    Wait Until Element Is Visible    xpath://input[@placeholder='Enter serial here']
    Press Key    xpath://input[@placeholder='Enter serial here']    A
    Press Key    xpath://input[@placeholder='Enter serial here']    L
    Press Key    xpath://input[@placeholder='Enter serial here']    J
    Press Key    xpath://input[@placeholder='Enter serial here']    8
    Press Key    xpath://input[@placeholder='Enter serial here']    1
    Press Key    xpath://input[@placeholder='Enter serial here']    2
    Press Key    xpath://input[@placeholder='Enter serial here']    1
    Press Key    xpath://input[@placeholder='Enter serial here']    2
    Press Key    xpath://input[@placeholder='Enter serial here']    1

Click ENTER key
    Press Key    xpath://input[@placeholder='Enter serial here']    \\13

Click first schematics
    clickelement    xpath://tbody/tr[1]/td[2]

pdf file has been downloaded

component links are displaying

troubleshooting chart steps are displaying

code description is displaying
