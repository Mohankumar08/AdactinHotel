package org.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Login.feature", glue = "org.stepdef", monochrome=true, dryRun=false, plugin = {"pretty", "html:C:\\Users\\pamoh\\.eclipse\\AdactinHotel\\target", "json:C:\\Users\\pamoh\\.eclipse\\AdactinHotel\\target\\sample.json", "junit:C:\\Users\\pamoh\\.eclipse\\AdactinHotel\\target\\samplex.xml"})
public class TestRunner {

}
