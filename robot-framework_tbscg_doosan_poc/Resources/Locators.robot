*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${PAGE_URL}       https://www.google.co.uk/
${BROWSER}        chrome
${searchBox}      //input[@class='gLFyf gsfi']
${ResultsCount}    id=resultStats
${firstSuggestion}    css:ul[role="listbox"] > li:nth-child(1)
