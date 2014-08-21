describe
	('DEV-DailyTicket.js' 
	, function() {
	
			
	
			var ptor = protractor.getInstance();
			browser.driver.manage().window().maximize();
			
	
	
			ptor.get('http://cf-cp.stg-store.accesso.com/?_a=true');
			
			

			
		

			
					
			it( 'should render packageList with prices'
				, function() {

						ptor.sleep(25000);
							ptor.findElement
								( protractor.By.repeater("package in row")
										.row(1)										
								).click();

					}
				, 25000
				);

				
			it( 'should add 1 to the cart'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='application-view']/div/div[2]/div[2]/div/div[2]/button")
							).click()

						ptor.sleep(2000)

							}
				, 5000
				);				
				
		it( 'should advance TO the checkout modal'
				, function() {

						ptor.findElement 
							( protractor.By.xpath("//*[@id='primary-modal']/div/div/div[3]/div/button[10]")
							).click()

						ptor.sleep(2000);

						
					}
				, 5000
				);
				

				
			it( 'should advance PAST the checkout modal'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='application-view']/div/div[3]/div[3]/div/div/div[4]/button")
							).click()

						ptor.sleep(2000);

						
					}
				, 5000
				);

				
			it( 'should advance to the shipping method select'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='application-view']/div/div[2]/div/div/div[2]/button")
							).click()

						ptor.sleep(2000);

						
					}
				, 5000
				);	
				
				
			it( 'should select a shipping method'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='application-view']/div/div[2]/div/div/div[2]/button")
							).click()

						ptor.sleep(2000);

						
					}
				, 5000
				);	
				
				
				
			it( 'should select a shipping method'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='application-view']/div/div[4]/div/div[2]/button")
							).click()

						ptor.sleep(2000);

						
					}
				, 5000
				);	
								
				
						
						
						
						
				
			it ('should  select the no refunds checkbox'
				, function() {
						ptor.findElement
							(protractor.By.xpath("//*[@id='application-view']/div/div[1]/div[3]/div/ul/li/div/label"))
						
						.click()

					ptor.sleep(2000);


					}
				, 5000
				);				
					

			it ('should  click the complete your order button'
				, function() {
						ptor.findElement
							(protractor.By.xpath("//*[@id='application-view']/div/div[3]/div[2]/div/div/div[2]/button"))
						
						.click()

					ptor.sleep(5000);


					}
				, 5000
				);	
		
			

			
					
			it( 'should render packageList with prices'
				, function() {
						ptor.get('http://stg-store.accesso.com/ME-TP');
						ptor.sleep(5000);
						
					}
				, 10000
				);
				
				
				
			it( 'select a date from the calendar module on the front page'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='cell22']/span/span/button")
							).click()

						ptor.sleep(2000)

							}
				, 5000
				);								

				
			it( 'select a package from the available packages'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='application-view']/div/div[4]/div[2]/div/div[2]/ul/li[1]/div/div[2]/button")
							).click()

						ptor.sleep(2000)

							}
				, 5000
				);								
				
				
			it( 'confirm the date modual'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='primary-modal']/div/div/div[3]/div/button[11]")
							).click()

						ptor.sleep(2000)

							}
				, 5000
				);								
				
			it( 'increase the counter to one'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='application-view']/div/div[1]/div[4]/div[2]/div[1]/div[2]/div/div[2]/div/div/div/span[2]/button/span")
							).click()

						ptor.sleep(2000)

							}
				, 5000
				);						
				
				

				
			it( 'should add 1 to the cart'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='application-view']/div/div[2]/div[2]/div/div[2]/button")
							).click()

						ptor.sleep(2000)

							}
				, 5000
				);				
				
			it( 'should advance PAST the quick sell/up sell '
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='primary-modal']/div/div/div[3]/div/button[3]")
							).click()

						ptor.sleep(2000);

						
					}
				, 5000
				);					
				
				
			it( 'should advance past the confirmation modal'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='primary-modal']/div/div/div[3]/div/button[10]")
							).click()

						ptor.sleep(2000)

							}
				, 5000
				);						
		
				

				
			it( 'should advance to the shipping method select'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='application-view']/div/div[3]/div[3]/div/div/div[4]/button")
							).click()

						ptor.sleep(2000);

						
					}
				, 5000
				);	
				
				

			
				
				it( 'should select a shipping method'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='application-view']/div/div[2]/div/div/div[3]/button")
							).click()

						ptor.sleep(2000);

						
					}
				, 5000
				);	
							
													
				
			it ('should  fill out billing info - first name'
				, function() {
						ptor.findElement
							(protractor.By.name('firstName'))
						
						.sendKeys("Corey")

					ptor.sleep(1);

						expect
							( ptor.findElement
									( protractor.By.name('firstName')
									).getText()
							).toEqual('');
					}
				, 5000
				);
				
			


			it ('should  fill out billing info - last name'
				, function() {
						ptor.findElement
							(protractor.By.name('lastName'))
						
						.sendKeys("Kasbohm")

					ptor.sleep(1);

						expect
							( ptor.findElement
									( protractor.By.name('lastName')
									).getText()
							).toEqual('');
					}
				, 5000
				);			
			

			it ('should  fill out billing info - street address'
				, function() {
						ptor.findElement
							(protractor.By.name('address'))
						
						.sendKeys("1025 Greenwood Blvd")

					ptor.sleep(1);

						expect
							( ptor.findElement
									( protractor.By.name('address')
									).getText()
							).toEqual('');
					}
				, 5000
				);			
			
			it ('should  fill out billing info - apartment/suite'
				, function() {
						ptor.findElement
							(protractor.By.name('address2'))
						
						.sendKeys("500")

					ptor.sleep(1);

						expect
							( ptor.findElement
									( protractor.By.name('address2')
									).getText()
							).toEqual('');
					}
				, 5000
				);
				
			it ('should  fill out billing info - zip code'
				, function() {
						ptor.findElement
							(protractor.By.name('zip'))
						
						.sendKeys("32746")

					ptor.sleep(1);

						expect
							( ptor.findElement
									( protractor.By.name('zip')
									).getText()
							).toBeDefined();
					}
				, 5000
				);



			it ('should  fill out billing info - phone number'
				, function() {
						ptor.findElement
							(protractor.By.name('phone'))
						
						.sendKeys("1111111111")

					ptor.sleep(1);

						expect
							( ptor.findElement
									( protractor.By.name('phone')
									).getText()
							).toBeDefined();
					}
				, 5000
				);
				
				
				
			it ('should  fill out billing info - email'
				, function() {
						ptor.findElement
							(protractor.By.name('email'))
						
						.sendKeys("ckasbohm@accesso.com")

					ptor.sleep(1);

						expect
							( ptor.findElement
									( protractor.By.name('email')
									).getText()
							).toBeDefined();
					}
				, 5000
				);				



				it( 'should navigate to payment info screen when clicked'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='application-view']/div/div[2]/div/div/div[2]/button")
							).click();


					}
				, 5000
				);
				
				

			it ('should  fill out payment info- card number'
				, function() {
						ptor.findElement
							(protractor.By.name('creditCard'))
						
						.sendKeys("4111111111111111")

					ptor.sleep(1);

						expect
							( ptor.findElement
									( protractor.By.name('creditCard')
									).getText()
							).toBeDefined();
					}
				, 5000
				);
			
			it ('should  fill out payment info- month'
				, function() {
						ptor.findElement
							(protractor.By.name('month'))
						
						.sendKeys("00")

					ptor.sleep(1);

						expect
							( ptor.findElement
									( protractor.By.name('month')
									).getText()
							).toBeDefined();
					}
				, 5000
				);
			
			it ('should  fill out payment info- year'
				, function() {
						ptor.findElement
							(protractor.By.name('year'))
						
						.sendKeys("2222")

					ptor.sleep(1);

						expect
							( ptor.findElement
									( protractor.By.name('year')
									).getText()
							).toBeDefined();
					}
				, 5000
				);	
				
			it ('should  fill out payment info- securityCode'
				, function() {
						ptor.findElement
							(protractor.By.name('securityCode'))
						
						.sendKeys("521")

					ptor.sleep(1);

						expect
							( ptor.findElement
									( protractor.By.name('securityCode')
									).getText()
							).toBeDefined();
					}
				, 5000
				);	
				
				
				
				
			it ('should  advance to payment summary'
				, function() {
						ptor.findElement
							(protractor.By.xpath("//*[@id='application-view']/div/div[4]/div/div[2]/button"))
						
						.click()

					ptor.sleep(2000);


					}
				, 5000
				);				
				
						
				
			it ('should  select the no refunds checkbox'
				, function() {
						ptor.findElement
							(protractor.By.xpath("//*[@id='application-view']/div/div[1]/div[3]/div/ul/li/div/label"))
						
						.click()

					ptor.sleep(2000);


					}
				, 5000
				);				
					

			it ('should  click the complete your order button'
				, function() {
						ptor.findElement
							(protractor.By.binding("i18n.ButtonLabels.purchase"))
						
						.click()

					ptor.sleep(5000);


					}
				, 5000
				);	
			
				
				}
	);
