package org.selenide.examples.cucumber;

import com.codeborne.selenide.Configuration;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static com.codeborne.selenide.Selenide.*;

public class BatsComponentStepDefinitions {
  //https://gist.github.com/mkpythonanywhereblog/947633ba1bf0bc239639

  @Given("an open browser with BATs component page")
  public void an_open_browser_with_BATs_component_page() {
    Configuration.headless = false;
    open("https://dibh-dev-dxp-kags-preview.s3.amazonaws.com/bats.html");

  }

  @When("Page filtered by serial number")
  public void page_filtered_by_serial_number() {
    $("[data-test-id=\"add-serial-link__desktop\"]").click();
    $("[data-test-id=\"add-serial-input\"]").sendKeys("A");
    $("[data-test-id=\"add-serial-input\"]").sendKeys("B");
    $("[data-test-id=\"add-serial-input\"]").sendKeys("C");
    $("[data-test-id=\"add-serial-input\"]").sendKeys("D");
    $("[data-test-id=\"add-serial-input\"]").sendKeys("E");

    //executeJavaScript("document.querySelector('[data-test-id=\"add-serial-input\"]').setAttribute('value', 'AACB55558')");
  }

  @Then("code is displaying")
  public void code_is_displaying() {
    System.out.println("");
    // Write code here that turns the phrase above into concrete actions
  }

  @Then("code description is displaying")
  public void code_description_is_displaying() {
    // Write code here that turns the phrase above into concrete actions
  }

  @Then("detailed description is displaying")
  public void detailed_description_is_displaying() {
    // Write code here that turns the phrase above into concrete actions
  }

  @Then("component links are displaying")
  public void component_links_are_displaying() {
    // Write code here that turns the phrase above into concrete actions
  }

  @Then("causes are displaying")
  public void causes_are_displaying() {
    // Write code here that turns the phrase above into concrete actions
  }

  @Then("conditions for alarm are displaying")
  public void conditions_for_alarm_are_displaying() {
    // Write code here that turns the phrase above into concrete actions
  }

  @Then("conditions for clearing alarm are displaying")
  public void conditions_for_clearing_alarm_are_displaying() {
    // Write code here that turns the phrase above into concrete actions
  }

  @Then("troubleshooting chart notes are displaying")
  public void troubleshooting_chart_notes_are_displaying() {
    // Write code here that turns the phrase above into concrete actions
  }

  @Then("troubleshooting chart steps are displaying")
  public void troubleshooting_chart_steps_are_displaying() {
    // Write code here that turns the phrase above into concrete actions
  }

  @Then("warning data are displaying")
  public void warning_data_are_displaying() {
    // Write code here that turns the phrase above into concrete actions
  }
}
