$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Login.feature");
formatter.feature({
  "name": "Generating 10 order id from adactin hotel page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Generating order id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on adactin application on chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user select \"\u003clocation\u003e\", \"\u003chotels\u003e\", \"\u003croomtype\u003e\", \"\u003croomnos\u003e\", \"\u003ccheckin\u003e\", \"\u003ccheckout\u003e\", \"\u003cadults\u003e\" and \"\u003cchildren\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.step({
  "name": "user select hotel and click continue for booking",
  "keyword": "When "
});
formatter.step({
  "name": "user enter \"\u003cfirstname\u003e\", \"\u003clastname\u003e\", \"\u003cbillingaddress\u003e\", \"\u003ccardno\u003e\",  \"\u003ccardtype\u003e\", \"\u003cexpmonth\u003e\", \"\u003cexpyear\u003e\", \"\u003ccvv\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click on continue for generating order id",
  "keyword": "And "
});
formatter.step({
  "name": "user print order id into console",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "hotels",
        "roomtype",
        "roomnos",
        "checkin",
        "checkout",
        "adults",
        "children",
        "firstname",
        "lastname",
        "billingaddress",
        "cardno",
        "cardtype",
        "expmonth",
        "expyear",
        "cvv"
      ]
    },
    {
      "cells": [
        "mohankumar08",
        "Mohan@123",
        "Sydney",
        "Hotel Sunshine",
        "Deluxe",
        "1",
        "13/05/2022",
        "15/05/2022",
        "2",
        "1",
        "Mohan",
        "Kumar",
        "Chennai,Tamilnadu",
        "4563984512988765",
        "VISA",
        "8",
        "2022",
        "240"
      ]
    },
    {
      "cells": [
        "mohankumar08",
        "Mohan@123",
        "Melbourne",
        "Hotel Creek",
        "Super Deluxe",
        "2",
        "10/05/2022",
        "12/05/2022",
        "2",
        "1",
        "Mohan",
        "Kumar",
        "Chennai,Tamilnadu",
        "4563984512988765",
        "VISA",
        "8",
        "2022",
        "240"
      ]
    },
    {
      "cells": [
        "mohankumar08",
        "Mohan@123",
        "Brisbane",
        "Hotel Hervey",
        "Double",
        "3",
        "21/05/2022",
        "28/05/2022",
        "4",
        "1",
        "Mohan",
        "Kumar",
        "Chennai,Tamilnadu",
        "4563984512988765",
        "VISA",
        "8",
        "2022",
        "240"
      ]
    },
    {
      "cells": [
        "mohankumar08",
        "Mohan@123",
        "New York",
        "Hotel Cornice",
        "Deluxe",
        "4",
        "08/05/2022",
        "12/05/2022",
        "3",
        "1",
        "Mohan",
        "Kumar",
        "Chennai,Tamilnadu",
        "4563984512988765",
        "VISA",
        "8",
        "2022",
        "240"
      ]
    },
    {
      "cells": [
        "mohankumar08",
        "Mohan@123",
        "Paris",
        "Hotel Creek",
        "Standard",
        "2",
        "18/05/2022",
        "25/05/2022",
        "4",
        "1",
        "Mohan",
        "Kumar",
        "Chennai,Tamilnadu",
        "4563984512988765",
        "VISA",
        "8",
        "2022",
        "240"
      ]
    },
    {
      "cells": [
        "mohankumar08",
        "Mohan@123",
        "Sydney",
        "Hotel Hervey",
        "Double",
        "5",
        "12/05/2022",
        "18/05/2022",
        "1",
        "1",
        "Mohan",
        "Kumar",
        "Chennai,Tamilnadu",
        "4563984512988765",
        "VISA",
        "8",
        "2022",
        "240"
      ]
    },
    {
      "cells": [
        "mohankumar08",
        "Mohan@123",
        "Melbourne",
        "Hotel Sunshine",
        "Super Deluxe",
        "3",
        "26/05/2022",
        "28/05/2022",
        "4",
        "1",
        "Mohan",
        "Kumar",
        "Chennai,Tamilnadu",
        "4563984512988765",
        "VISA",
        "8",
        "2022",
        "240"
      ]
    },
    {
      "cells": [
        "mohankumar08",
        "Mohan@123",
        "Brisbane",
        "Hotel Creek",
        "Standard",
        "6",
        "08/05/2022",
        "12/05/2022",
        "3",
        "1",
        "Mohan",
        "Kumar",
        "Chennai,Tamilnadu",
        "4563984512988765",
        "VISA",
        "8",
        "2022",
        "240"
      ]
    },
    {
      "cells": [
        "mohankumar08",
        "Mohan@123",
        "New York",
        "Hotel Hervey",
        "Super Deluxe",
        "2",
        "18/05/2022",
        "20/05/2022",
        "2",
        "1",
        "Mohan",
        "Kumar",
        "Chennai,Tamilnadu",
        "4563984512988765",
        "VISA",
        "8",
        "2022",
        "240"
      ]
    },
    {
      "cells": [
        "mohankumar08",
        "Mohan@123",
        "Paris",
        "Hotel Creek",
        "Double",
        "1",
        "21/05/2022",
        "24/05/2022",
        "4",
        "1",
        "Mohan",
        "Kumar",
        "Chennai,Tamilnadu",
        "4563984512988765",
        "VISA",
        "8",
        "2022",
        "240"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Generating order id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on adactin application on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_on_adactin_application_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"mohankumar08\" and \"Mohan@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"Sydney\", \"Hotel Sunshine\", \"Deluxe\", \"1\", \"13/05/2022\", \"15/05/2022\", \"2\" and \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select hotel and click continue for booking",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_hotel_and_click_continue_for_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Mohan\", \"Kumar\", \"Chennai,Tamilnadu\", \"4563984512988765\",  \"VISA\", \"8\", \"2022\", \"240\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on continue for generating order id",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_click_on_continue_for_generating_order_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user print order id into console",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_print_order_id_into_console()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generating order id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on adactin application on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_on_adactin_application_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"mohankumar08\" and \"Mohan@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"Melbourne\", \"Hotel Creek\", \"Super Deluxe\", \"2\", \"10/05/2022\", \"12/05/2022\", \"2\" and \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select hotel and click continue for booking",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_hotel_and_click_continue_for_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Mohan\", \"Kumar\", \"Chennai,Tamilnadu\", \"4563984512988765\",  \"VISA\", \"8\", \"2022\", \"240\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on continue for generating order id",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_click_on_continue_for_generating_order_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user print order id into console",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_print_order_id_into_console()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generating order id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on adactin application on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_on_adactin_application_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"mohankumar08\" and \"Mohan@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"Brisbane\", \"Hotel Hervey\", \"Double\", \"3\", \"21/05/2022\", \"28/05/2022\", \"4\" and \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select hotel and click continue for booking",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_hotel_and_click_continue_for_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Mohan\", \"Kumar\", \"Chennai,Tamilnadu\", \"4563984512988765\",  \"VISA\", \"8\", \"2022\", \"240\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on continue for generating order id",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_click_on_continue_for_generating_order_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user print order id into console",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_print_order_id_into_console()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generating order id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on adactin application on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_on_adactin_application_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"mohankumar08\" and \"Mohan@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"New York\", \"Hotel Cornice\", \"Deluxe\", \"4\", \"08/05/2022\", \"12/05/2022\", \"3\" and \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select hotel and click continue for booking",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_hotel_and_click_continue_for_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Mohan\", \"Kumar\", \"Chennai,Tamilnadu\", \"4563984512988765\",  \"VISA\", \"8\", \"2022\", \"240\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on continue for generating order id",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_click_on_continue_for_generating_order_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user print order id into console",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_print_order_id_into_console()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generating order id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on adactin application on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_on_adactin_application_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"mohankumar08\" and \"Mohan@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"Paris\", \"Hotel Creek\", \"Standard\", \"2\", \"18/05/2022\", \"25/05/2022\", \"4\" and \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select hotel and click continue for booking",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_hotel_and_click_continue_for_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Mohan\", \"Kumar\", \"Chennai,Tamilnadu\", \"4563984512988765\",  \"VISA\", \"8\", \"2022\", \"240\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on continue for generating order id",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_click_on_continue_for_generating_order_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user print order id into console",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_print_order_id_into_console()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generating order id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on adactin application on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_on_adactin_application_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"mohankumar08\" and \"Mohan@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"Sydney\", \"Hotel Hervey\", \"Double\", \"5\", \"12/05/2022\", \"18/05/2022\", \"1\" and \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select hotel and click continue for booking",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_hotel_and_click_continue_for_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Mohan\", \"Kumar\", \"Chennai,Tamilnadu\", \"4563984512988765\",  \"VISA\", \"8\", \"2022\", \"240\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on continue for generating order id",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_click_on_continue_for_generating_order_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user print order id into console",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_print_order_id_into_console()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generating order id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on adactin application on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_on_adactin_application_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"mohankumar08\" and \"Mohan@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"Melbourne\", \"Hotel Sunshine\", \"Super Deluxe\", \"3\", \"26/05/2022\", \"28/05/2022\", \"4\" and \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select hotel and click continue for booking",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_hotel_and_click_continue_for_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Mohan\", \"Kumar\", \"Chennai,Tamilnadu\", \"4563984512988765\",  \"VISA\", \"8\", \"2022\", \"240\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on continue for generating order id",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_click_on_continue_for_generating_order_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user print order id into console",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_print_order_id_into_console()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generating order id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on adactin application on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_on_adactin_application_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"mohankumar08\" and \"Mohan@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"Brisbane\", \"Hotel Creek\", \"Standard\", \"6\", \"08/05/2022\", \"12/05/2022\", \"3\" and \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select hotel and click continue for booking",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_hotel_and_click_continue_for_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Mohan\", \"Kumar\", \"Chennai,Tamilnadu\", \"4563984512988765\",  \"VISA\", \"8\", \"2022\", \"240\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on continue for generating order id",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_click_on_continue_for_generating_order_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user print order id into console",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_print_order_id_into_console()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generating order id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on adactin application on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_on_adactin_application_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"mohankumar08\" and \"Mohan@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"New York\", \"Hotel Hervey\", \"Super Deluxe\", \"2\", \"18/05/2022\", \"20/05/2022\", \"2\" and \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select hotel and click continue for booking",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_hotel_and_click_continue_for_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Mohan\", \"Kumar\", \"Chennai,Tamilnadu\", \"4563984512988765\",  \"VISA\", \"8\", \"2022\", \"240\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on continue for generating order id",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_click_on_continue_for_generating_order_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user print order id into console",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_print_order_id_into_console()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generating order id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on adactin application on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_on_adactin_application_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"mohankumar08\" and \"Mohan@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"Paris\", \"Hotel Creek\", \"Double\", \"1\", \"21/05/2022\", \"24/05/2022\", \"4\" and \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select hotel and click continue for booking",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_select_hotel_and_click_continue_for_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Mohan\", \"Kumar\", \"Chennai,Tamilnadu\", \"4563984512988765\",  \"VISA\", \"8\", \"2022\", \"240\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on continue for generating order id",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_click_on_continue_for_generating_order_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user print order id into console",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_print_order_id_into_console()"
});
formatter.result({
  "status": "passed"
});
});