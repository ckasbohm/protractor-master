describe
	('DEV-DailyTicket.js' 
	, function() {
	
			var ptor = protractor.getInstance();
			
			ptor.get('http://stg-store.accesso.com/DEV');
			
			
			
			
			it( 'should render packageList with prices'
				, function() {

						ptor.sleep(5000);

						var packagePrice =
							ptor.findElement
								( protractor.By.repeater("package in packageList")
										.row(0)
										.column('startRate')
								)

						expect(packagePrice.isDisplayed())

					}
				, 10000
				);


			it( 'should navigate to packageDetails when package is clicked'
				, function() {

						ptor.findElement
							( protractor.By.repeater("package in packageList")
								.row(2)
								
							).click()

					}
				, 5000
				);

				
			it( 'should add 5 to the quantity selector total'
				, function() {

						ptor.findElement
							( protractor.By.xpath("//*[@id='application-scrollContent']/div/div[4]/div[2]/div/div/div/div[2]/div/div[2]/span[2]/button/span")
							).click();
							
						ptor.findElement
							( protractor.By.xpath("//*[@id='application-scrollContent']/div/div[4]/div[2]/div/div/div/div[2]/div/div[2]/span[2]/button/span")
							).click();							
							
						ptor.findElement
							( protractor.By.xpath("//*[@id='application-scrollContent']/div/div[4]/div[2]/div/div/div/div[2]/div/div[2]/span[2]/button/span")
							).click();
							
						ptor.findElement
							( protractor.By.xpath("//*[@id='application-scrollContent']/div/div[4]/div[2]/div/div/div/div[2]/div/div[2]/span[2]/button/span")
							).click();							
						

						
					}
				, 5000
				);				
				
		it( 'should advance TO the date/time picker'
				, function() {

						ptor.findElement
							( protractor.By.binding("i18n.ButtonLabels.addToCart")
							).click()

						ptor.sleep(2000)

						
					}
				, 5000
				);
				
				
			it( 'should select a date'
				, function() {

						ptor.findElement
							( protractor.By.repeater("row in rows").row(3)
							).then(function(el){
								el.findElement
									(protractor.By.xpath("//*[@id='datePickerCtrl']/table/tbody/tr[4]/td[4]/button/span")).click()
								
							})	
						ptor.sleep(2000)
						}
				, 5000
				);
				
			
			
			

				
			// it( 'should advance TO the reservation confirmation modal'
				// , function() {

						// ptor.findElement
							// ( protractor.By.xpath("//*[@id='application-scrollContent']/div/div[4]/div/div/div[2]/button")
							// ).click();

						// ptor.sleep(2000);

						
					// }
				// , 5000
				// );


			// it( 'should advance PAST the quick sell/up sell '
				// , function() {

						// ptor.findElement
							// ( protractor.By.binding("i18n.ButtonLabels.continueCart")
							// ).click();

						// ptor.sleep(2000);

						
					// }
				// , 5000
				// );					

				
			// it( 'should advance to the shipping method select'
				// , function() {

						// ptor.findElement
							// ( protractor.By.binding("i18n.ButtonLabels.checkout")
							// ).click();

						// ptor.sleep(2000);

						
					// }
				// , 5000
				// );	
				
				
			// it( 'should select a shipping method'
				// , function() {

						// ptor.findElement
							// ( protractor.By.xpath("//*[@id='application-scrollContent']/div/form/div[1]/div[1]/div[2]/div[2]/div/div/label")
							// ).click();

						// ptor.sleep(2000);

						
					// }
				// , 5000
				// );	
				

			// it( 'should advance to the billing info screen'
				// , function() {

						// ptor.findElement
							// ( protractor.By.xpath("//*[@id='application-scrollContent']/div/div[2]/div/div/div[3]/button")
							// ).click();

						// ptor.sleep(2000);

						
					// }
				// , 5000
				// );					
			
				
		
				
			// it ('should  fill out billing info - first name'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('firstName'))
						
						// .sendKeys("Corey");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('firstName')
									// ).getText()
							// ).toEqual('');
					// }
				// , 5000
				// );
				
			


			// it ('should  fill out billing info - last name'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('lastName'))
						
						// .sendKeys("Kasbohm");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('lastName')
									// ).getText()
							// ).toEqual('');
					// }
				// , 5000
				// );			
			

			// it ('should  fill out billing info - street address'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('address'))
						
						// .sendKeys("1025 Greenwood Blvd");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('address')
									// ).getText()
							// ).toEqual('');
					// }
				// , 5000
				// );			
			
			// it ('should  fill out billing info - apartment/suite'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('address2'))
						
						// .sendKeys("500");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('address2')
									// ).getText()
							// ).toEqual('');
					// }
				// , 5000
				// );
				
			// it ('should  fill out billing info - zip code'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('zip'))
						
						// .sendKeys("32746");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('zip')
									// ).getText()
							// ).toBeDefined();
					// }
				// , 5000
				// );


			// it ('should  fill out billing info - state'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('state'))
						
						// .sendKeys("f");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('state')
									// ).getText()
							// ).toBeDefined();
					// }
				// , 5000
				// );





				// it( 'should navigate to paymentView when billing details are provided'
				// , function() {

						// ptor.findElement
							// ( protractor.By.xpath("//*[@id='application-scrollContent']/div/div[2]/div/div/div[4]/button")
							// ).click();


					// }
				// , 5000
				// );
				
				// it ('should  fill out billing info - first name'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('firstName'))
						
						// .sendKeys("Corey");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('firstName')
									// ).getText()
							// ).toEqual('');
					// }
				// , 5000
				// );
				
			


			// it ('should  fill out billing info - last name'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('lastName'))
						
						// .sendKeys("Kasbohm");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('lastName')
									// ).getText()
							// ).toEqual('');
					// }
				// , 5000
				// );			
			

			// it ('should  fill out billing info - street address'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('address'))
						
						// .sendKeys("1025 Greenwood Blvd");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('address')
									// ).getText()
							// ).toEqual('');
					// }
				// , 5000
				// );			
			
			// it ('should  fill out billing info - apartment/suite'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('address2'))
						
						// .sendKeys("500");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('address2')
									// ).getText()
							// ).toEqual('');
					// }
				// , 5000
				// );
				
			// it ('should  fill out billing info - zip code'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('zip'))
						
						// .sendKeys("32746");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('zip')
									// ).getText()
							// ).toBeDefined();
					// }
				// , 5000
				// );


			// it ('should  fill out billing info - state'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('state'))
						
						// .sendKeys("f");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('state')
									// ).getText()
							// ).toBeDefined();
					// }
				// , 5000
				// );


			// it ('should  fill out billing info - email'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('email'))
						
						// .sendKeys("ckasbohm@accesso.com");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('email')
									// ).getText()
							// ).toBeDefined();
					// }
				// , 5000
				// );

			// it ('should  fill out billing info - phone number'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('phone'))
						
						// .sendKeys("1111111111");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('phone')
									// ).getText()
							// ).toBeDefined();
					// }
				// , 5000
				// );
			
	

			// it ('should  advance to the payment info screen'
				// , function() {
						// ptor.findElement
							// (protractor.By.xpath("//*[@id='application-scrollContent']/div/div[3]/div/div/div[2]/button"))
						
						// .click();

					// ptor.sleep(2000);


					// }
				// , 5000
				// );



			// it ('should  fill out payment info- card number'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('creditCard'))
						
						// .sendKeys("4111111111111111");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('creditCard')
									// ).getText()
							// ).toBeDefined();
					// }
				// , 5000
				// );
			
			// it ('should  fill out payment info- month'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('month'))
						
						// .sendKeys("0000");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('month')
									// ).getText()
							// ).toBeDefined();
					// }
				// , 5000
				// );
			
			// it ('should  fill out payment info- year'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('year'))
						
						// .sendKeys("2222");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('year')
									// ).getText()
							// ).toBeDefined();
					// }
				// , 5000
				// );	
				
			// it ('should  fill out payment info- securityCode'
				// , function() {
						// ptor.findElement
							// (protractor.By.name('securityCode'))
						
						// .sendKeys("521");

					// ptor.sleep(1);

						// expect
							// ( ptor.findElement
									// ( protractor.By.name('securityCode')
									// ).getText()
							// ).toBeDefined();
					// }
				// , 5000
				// );	
				
				
				
				
			// it ('should  advance to payment summary'
				// , function() {
						// ptor.findElement
							// (protractor.By.xpath("//*[@id='application-scrollContent']/div/div[4]/div/div/div[2]/button"))
						
						// .click();

					// ptor.sleep(2000);


					// }
				// , 5000
				// );				
				
						
				
			// it ('should  select the no refunds checkbox'
				// , function() {
						// ptor.findElement
							// (protractor.By.xpath("//*[@id='application-scrollContent']/div/div[6]/div[5]/div/ul/li/div/label"))
						
						// .click();

					// ptor.sleep(2000);


					// }
				// , 5000
				// );				
					

			// it ('should  click the complete your order button'
				// , function() {
						// ptor.findElement
							// (protractor.By.binding("i18n.ButtonLabels.purchase"))
						
						// .click();

					// ptor.sleep(5000);


					// }
				// , 5000
				// );	

			
				
				}
	);
