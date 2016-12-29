package MultipleTags;

import org.junit.runner.RunWith;

import cucumber.junit.Cucumber;

@RunWith(Cucumber.class) 
@Cucumber.Options(format = {"pretty", "html:target/cucumber"},tags={"@positiveScenario"}) 

public class RunTest { }