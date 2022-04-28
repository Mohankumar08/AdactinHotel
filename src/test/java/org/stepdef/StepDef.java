package org.stepdef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StepDef {
	
	WebDriver driver;
	
	@Given("user is on adactin application on chrome browser")
	public void user_is_on_adactin_application_on_chrome_browser() {
		WebDriverManager.chromedriver().setup();
		   driver = new ChromeDriver();
		   driver.manage().window().maximize();
		   driver.get("http://adactinhotelapp.com/");

	}

	@When("user enter {string} and {string}")
	public void user_enter_and(String string, String string2) {
		WebElement textUser = driver.findElement(By.id("username"));
	    textUser.sendKeys(string);
	    
	    WebElement textPass = driver.findElement(By.id("password"));
	    textPass.sendKeys(string2);
	}

	@When("user should click login button")
	public void user_should_click_login_button() {
		WebElement btnlogin = driver.findElement(By.id("login"));
		btnlogin.click();
	}

	@When("user select {string}, {string}, {string}, {string}, {string}, {string}, {string} and {string}")
	public void user_select_and(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
		WebElement location = driver.findElement(By.name("location"));
		Select s = new Select(location);
		s.selectByValue(string);
		
		WebElement hotels = driver.findElement(By.name("hotels"));
		Select s1 = new Select(hotels);
		s1.selectByValue(string2);
		
		WebElement roomtype = driver.findElement(By.name("room_type"));
		Select s2 = new Select(roomtype);
		s2.selectByValue(string3);
		
		WebElement roomnos = driver.findElement(By.name("room_nos"));
		Select s3 = new Select(roomnos);
		s3.selectByValue(string4);
		
		WebElement checkInDate = driver.findElement(By.name("datepick_in"));
		checkInDate.sendKeys(string5);
		
		WebElement checkOutDate = driver.findElement(By.name("datepick_in"));
		checkOutDate.sendKeys(string6);
		
		WebElement adult = driver.findElement(By.name("adult_room"));
		Select s4 = new Select(adult);
		s4.selectByValue(string7);
		
		WebElement child = driver.findElement(By.name("child_room"));
		Select s5 = new Select(child);
		s5.selectByValue(string8);
	}


	@When("user should click search button")
	public void user_should_click_search_button() {
		WebElement btnSubmit = driver.findElement(By.id("Submit"));
		btnSubmit.click();
	}

	@When("user select hotel and click continue for booking")
	public void user_select_hotel_and_click_continue_for_booking() {
		WebElement selectHotel = driver.findElement(By.id("radiobutton_0"));
		selectHotel.click();
		WebElement btnContinue = driver.findElement(By.id("continue"));
		btnContinue.click();
	}

	@When("user enter {string}, {string}, {string}, {string},  {string}, {string}, {string}, {string}")
	public void user_enter(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
		
		WebElement firstName = driver.findElement(By.id("first_name"));
		firstName.sendKeys(string);
		
		WebElement lastName = driver.findElement(By.id("last_name"));
		lastName.sendKeys(string2);
		
		WebElement address = driver.findElement(By.id("address"));
		address.sendKeys(string3);
		
		WebElement cardNo = driver.findElement(By.id("cc_num"));
		cardNo.sendKeys(string4);
		
		WebElement creditType = driver.findElement(By.name("cc_type"));
		Select s6 = new Select(creditType);
		s6.selectByValue(string5);
		
		WebElement ccMonth = driver.findElement(By.name("cc_exp_month"));
		Select s7 = new Select(ccMonth);
		s7.selectByValue(string6);
		
		WebElement ccYear = driver.findElement(By.name("cc_exp_year"));
		Select s8 = new Select(ccYear);
		s8.selectByValue(string7);
		
		WebElement cvvNo = driver.findElement(By.id("cc_cvv"));
		cvvNo.sendKeys(string8);
		
	
	}

	@When("user click on continue for generating order id")
	public void user_click_on_continue_for_generating_order_id() {
	   WebElement bookNow = driver.findElement(By.id("book_now"));
	   bookNow.click();
	}

	@When("user print order id into console")
	public void user_print_order_id_into_console() {
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	
		WebElement orderNo = driver.findElement(By.id("order_no"));
		String attribute = orderNo.getAttribute("value");
		System.out.println(attribute);
	}


}
