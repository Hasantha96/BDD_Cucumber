package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "F:\\BDD\\BDD\\src\\test\\resources\\features\\ActiLogin.feature",
        glue={"stepDefinition"},
        format= {"pretty","html:test-output_1",
                "json:target/cucumber-reports/CucumberTestReport.json"},
        plugin={"com.cucumber.listener.ExtentCucumberFormatter:test-output_1/ErrorReport.html", "pretty:target/cucumber-htmlreport.text", "json:target/cucmber-report.json"},

//        plugin={"pretty:target/cucumber-htmlreport.text", "json:target/cucmber-report.json"},
        monochrome = true

)
public class TestRunner {
}
