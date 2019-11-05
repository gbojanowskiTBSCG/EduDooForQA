package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        features = {"src/test/resources/org/selenide/examples/cucumber"},
        glue = {"org/selenide/examples"},
        plugin = {"io.qameta.allure.cucumber2jvm.AllureCucumber2Jvm"}
)
    public class TestRunner extends AbstractTestNGCucumberTests {
}
