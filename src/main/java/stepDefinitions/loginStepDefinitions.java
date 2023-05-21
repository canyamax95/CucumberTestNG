package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class loginStepDefinitions {
	
WebDriver driver;
	
	@Given("^user is already on Login Page$")
	public void user_already_on_Login_page() {
		System.setProperty("webdriver.gecko.driver", "C:\\QA\\SeleniumJars\\geckodriver.exe");
        driver= new FirefoxDriver();
        driver.get("https://www.adidas.ca/en/account-login");
        
	}
	
	@When("^title of login page is adidas Online Shop | adidas CA$")
	public void title_of_login_page_is_Adidas_Login() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("adidas Online Shop | adidas CA", title);
	}
	
	// Regular expressions to replace email and password hard coded value
	// 1. \"([^\"]*)\"
	// 2. \"(.*)\"
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_email_Password(String email, String password) {
		driver.findElement(By.name("login-email")).sendKeys(email);
		driver.findElement(By.name("login-password")).sendKeys(password);
	}

	@Then("^user clicks on email login button$")
	public void user_clicks_on_email_login_button() throws Throwable {
	    driver.findElement(By.xpath("//span[contains(text(),'Email Log in')]")).click();
	}
	
	@Then("^user quit$")
	public void user_quit() throws Throwable {
	    driver.quit();
	}
	
	
	
	
	

}


