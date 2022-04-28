Feature: Generating 10 order id from adactin hotel page

Scenario Outline: Generating order id

	Given user is on adactin application on chrome browser
	
	When user enter "<username>" and "<password>"
	
	And user should click login button
	
	When user select "<location>", "<hotels>", "<roomtype>", "<roomnos>", "<checkin>", "<checkout>", "<adults>" and "<children>"
	
	And user should click search button
	 
	When user select hotel and click continue for booking
	
	When user enter "<firstname>", "<lastname>", "<billingaddress>", "<cardno>",  "<cardtype>", "<expmonth>", "<expyear>", "<cvv>"
	
	And user click on continue for generating order id
	
	And user print order id into console
	
	Examples: 
	|username				|password		|location		|hotels					|roomtype	|roomnos	|checkin		|checkout		|adults	|children	|firstname	|lastname	|billingaddress		|cardno						|cardtype	|expmonth	|expyear	|cvv		|	
	
	|mohankumar08		|Mohan@123	|Sydney			|Hotel Sunshine	|Deluxe		|1				|13/05/2022	|15/05/2022	|2			|	1				|Mohan			|Kumar		|Chennai,Tamilnadu|4563984512988765	|VISA			|8				|2022			|240		|		
	
	|mohankumar08		|Mohan@123	|Melbourne	|Hotel Creek	|Super Deluxe		|2				|10/05/2022	|12/05/2022	|2			|	1				|Mohan			|Kumar		|Chennai,Tamilnadu|4563984512988765	|VISA			|8				|2022			|240		|		
	
	|mohankumar08		|Mohan@123	|Brisbane		|Hotel Hervey	|Double		|3				|21/05/2022	|28/05/2022	|4			|	1				|Mohan			|Kumar		|Chennai,Tamilnadu|4563984512988765	|VISA			|8				|2022			|240		|		
	
	|mohankumar08		|Mohan@123	|New York		|Hotel Cornice	|Deluxe		|4				|08/05/2022	|12/05/2022	|3			|	1				|Mohan			|Kumar		|Chennai,Tamilnadu|4563984512988765	|VISA			|8				|2022			|240		|		
	
	|mohankumar08		|Mohan@123	|Paris			|Hotel Creek	|Standard		|2				|18/05/2022	|25/05/2022	|4			|	1				|Mohan			|Kumar		|Chennai,Tamilnadu|4563984512988765	|VISA			|8				|2022			|240		|		
	
	|mohankumar08		|Mohan@123	|Sydney			|Hotel Hervey	|Double		|5				|12/05/2022	|18/05/2022	|1			|	1				|Mohan			|Kumar		|Chennai,Tamilnadu|4563984512988765	|VISA			|8				|2022			|240		|		
	
	|mohankumar08		|Mohan@123	|Melbourne	|Hotel Sunshine	|Super Deluxe		|3				|26/05/2022	|28/05/2022	|4			|	1				|Mohan			|Kumar		|Chennai,Tamilnadu|4563984512988765	|VISA			|8				|2022			|240		|		
	
	|mohankumar08		|Mohan@123	|Brisbane		|Hotel Creek	|Standard		|6				|08/05/2022	|12/05/2022	|3			|	1				|Mohan			|Kumar		|Chennai,Tamilnadu|4563984512988765	|VISA			|8				|2022			|240		|		
	
	|mohankumar08		|Mohan@123	|New York		|Hotel Hervey	|Super Deluxe		|2				|18/05/2022	|20/05/2022	|2			|	1				|Mohan			|Kumar		|Chennai,Tamilnadu|4563984512988765	|VISA			|8				|2022			|240		|		
	
	|mohankumar08		|Mohan@123	|Paris			|Hotel Creek	|Double		|1				|21/05/2022	|24/05/2022	|4			|	1				|Mohan			|Kumar		|Chennai,Tamilnadu|4563984512988765	|VISA			|8				|2022			|240		|		
	