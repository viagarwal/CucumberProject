package outline;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class outline { 
   WebDriver driver = null; 
	
   @Given("^user navigates to facebook$") 
   public void goToFacebook() { 
	  System.setProperty("webdriver.gecko.driver", "C:\\Users\\nim\\Downloads\\geckodriver-v0.11.1-win64\\geckodriver.exe");
      driver = new FirefoxDriver(); 
      driver.navigate().to("https://www.facebook.com/"); 
   } 
	
   @When("^I enter Username as \"([^\"]*)\" and Password as \"([^\"]*)\"$") 
   public void I_enter_Username_as_and_Password_as(String username, String password) {
      driver.findElement(By.id("email")).sendKeys(username);
      driver.findElement(By.id("pass")).sendKeys(password);
      driver.findElement(By.id("u_0_1")).click(); 
   } 
	
   @Then("^login should be unsuccessful$") 
   public void validateRelogin() { 
      if(driver.getCurrentUrl().equalsIgnoreCase(
      "https://www.facebook.com/login.php?login_attempt=1&lwv=110")){
         System.out.println("Test Pass"); 
      } else { 
         System.out.println("Test Failed"); 
      } 
      driver.close(); 
   }    
}