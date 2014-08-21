describe
	( 'Shop V5'
	, function() {

			var ptor = protractor.getInstance();

			ptor.get('http://stg-store.accesso.com/CF-KBF');
			//ptor.get('http://stg-store.accesso.com/CF-KBF');
			//ptor.get('http://localhost:9998/DEMO');

			it( 'should render packageList with prices'
				, function() {

						ptor.sleep(2000);

						var packagePrice =
							ptor.findElement
								( protractor.By.repeater("package in packageList")
										.row(1)
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
								.row(1)
							).click();

						ptor.sleep(1000);

						expect
							( ptor.findElement
									( protractor.By.binding
											( "packageDetails.name"
											)
									).getText()
							).toBeDefined();


						expect
							( ptor.findElement
									( protractor.By.binding
											( "packageDetails.headline"
											)
									).getText()
							).toBeDefined();

					}
				, 5000
				);


			it( 'should adjust displayed quantity when quantity +/- is clicked'
				, function() {

						ptor.findElement
							( protractor.By.repeater("customerType in customerTypes").row(1)
							).then(function(el){
								el.findElement
									(protractor.By.css('button:nth-of-type(2)')).click()
								el.findElement
									(protractor.By.css('button:nth-of-type(2)')).click()
								el.findElement
									(protractor.By.css('button:nth-of-type(1)')).click()
								expect
									( el.findElement
											(protractor.By.css('input')).getAttribute('value')
									).toEqual('1')
							})
					}
				, 5000
			);

			it( 'should display notice when item(s) added to cart'
				, function() {

						ptor.findElement
							( protractor.By.binding("i18n.ButtonLabels.addToCart")
							).click()

						ptor.sleep(1000)

						expect
							( ptor.findElement
									( protractor.By.binding
											("i18n.ButtonLabels.proceedToCheckout")
									).getText()
							).toBeTruthy()
					}
				, 5000
				);

			it( 'should navigate to cart review when "proceed to checkout" is clicked'
				, function() {

						ptor.findElement
							( protractor.By.binding("i18n.ButtonLabels.proceedToCheckout")
							).click();

						ptor.sleep(2000);

						expect
							( ptor.findElement
									( protractor.By.binding("i18n.CartView.changeQuantityLabel")
									).getText()
							).toBeDefined();
					}
				, 5000
				);

			it( 'should allow cart quantities to be changed'
				, function() {

						ptor.findElement
							( protractor.By.binding("i18n.CartView.changeQuantityLabel")
							).click()

						ptor.findElement
							( protractor.By.repeater("cartItem in cartObject.cartItems").row(1)
							).then(function(el){
								el.findElement
									(protractor.By.css('button:nth-of-type(2)')).click()
								el.findElement
									(protractor.By.css('button:nth-of-type(2)')).click()
								el.findElement
									(protractor.By.css('button:nth-of-type(1)')).click()
								expect
									( el.findElement
											(protractor.By.css('input')).getAttribute('value')
									).toEqual('2')
							})


						ptor.findElement
							( protractor.By.binding("i18n.ButtonLabels.update")
							).click()

						ptor.sleep(2000);

						ptor.findElement
							( protractor.By.repeater("cartItem in cartObject.cartItems").row(1)
							).then(function(el){
									expect
										( el.findElement
												( protractor.By.binding("cartItem.qty")
												).getText()
										).toEqual('2')
							})

					}
				, 5000
				);

				it( 'should navigate to billingView when "checkout" is clicked'
				, function() {

						ptor.findElement
							( protractor.By.binding("i18n.ButtonLabels.checkout")
							).click()

						ptor.sleep(2000)

						expect(
							ptor.findElement
								( protractor.By.binding("i18n.ButtonLabels.continueButton")
								).getText()
						).toBeTruthy()

					}
				, 5000
				);

				it( 'should navigate to billingView when "delivery method" is selected'
				, function() {

						ptor.findElement
							( protractor.By.binding("i18n.ButtonLabels.continueButton")
							).click();

						ptor.findElement(protractor.By.css('select[name="deliveryMethod"'))
							.findElement(protractor.By.css('option[value="0"]')).click();

						ptor.findElement
							( protractor.By.binding("i18n.ButtonLabels.continueButton")
							).click();

						expect(
							ptor.findElement(protractor.By.css('input[name="firstName"'))
							.isDisplayed()
						).toBeTruthy()

					}
				, 5000
				);

				it( 'should navigate to paymentView when billing details are provided'
				, function() {

						ptor.findElement
							( protractor.By.binding("i18n.ButtonLabels.continueButton")
							).click();

						//expect(
						//	ptor.findElement(protractor.By.css('input[name="firstName"'))
						//	.isDisplayed()
						//).toBeTruthy()

					}
				, 5000
				);

				it( 'should navigate to orderReview when payment details are provided'
				, function() {

						ptor.findElement
							( protractor.By.binding("i18n.ButtonLabels.next")
							).click();

						//expect(
						//	ptor.findElement(protractor.By.css('input[name="firstName"'))
						//	.isDisplayed()
						//).toBeTruthy()

					}
				, 5000
				);

				it( 'should complete purchase when orderReview is acknowledged'
				, function() {


						ptor.findElement(protractor.By.css('label[for="termsChk"]')).click();


						ptor.findElement
							( protractor.By.binding("i18n.ButtonLabels.purchase")
							).click();

						//expect(
						//	ptor.findElement(protractor.By.css('input[name="firstName"'))
						//	.isDisplayed()
						//).toBeTruthy()

					}
				, 5000
				);

				it( 'should scroll tickets when arrows are clicked'
				, function() {

						ptor.findElement
							( protractor.By.css(".button-right")
							).click();

						ptor.sleep(1000)

						ptor.findElement
							( protractor.By.css(".button-left")
							).click();

						ptor.sleep(1000)

						//expect(
						//	ptor.findElement(protractor.By.css('input[name="firstName"'))
						//	.isDisplayed()
						//).toBeTruthy()

					}
				, 5000
				);

				it( 'should show back of ticket when flipped'
				, function() {

						ptor.findElement
							( protractor.By.css(".button.information.cursor")
							).click();

						ptor.sleep(2000)

						ptor.findElement
							( protractor.By.css(".sprite.leftchevron")
							).click();

						ptor.sleep(1000)

						//expect(
						//	ptor.findElement(protractor.By.css('input[name="firstName"'))
						//	.isDisplayed()
						//).toBeTruthy()

					}
				, 5000
				);


				it( 'should display receiptView when "view receipt" is clicked'
				, function() {

						ptor.findElement
							( protractor.By.binding("i18n.ButtonLabels.viewReceipt")
							).click();

						//expect(
						//	ptor.findElement(protractor.By.css('input[name="firstName"'))
						//	.isDisplayed()
						//).toBeTruthy()

					}
				, 5000
				);

				it( 'should navigate to order lookup via menu item'
				, function() {

						ptor.findElement
							( protractor.By.binding("i18n.Menu.title")
							).click();

						ptor.findElement
							( protractor.By.binding("i18n.Menu.orderLookup")
							).click();

						//expect(
						//	ptor.findElement(protractor.By.css('input[name="firstName"'))
						//	.isDisplayed()
						//).toBeTruthy()

					}
				, 5000
				);

				it( 'should display results for order lookup search'
				, function() {

						ptor.findElement
							( protractor.By.binding("i18n.ButtonLabels.searchButton")
							).click();

						//expect(
						//	ptor.findElement(protractor.By.css('input[name="firstName"'))
						//	.isDisplayed()
						//).toBeTruthy()

					}
				, 5000
				);

				it( 'should navigate to orderView from orderHistory item'
				, function() {


						ptor.findElement
							( protractor.By.repeater("order in orders")
								.row(1)
							).click();

						//expect(
						//	ptor.findElement(protractor.By.css('input[name="firstName"'))
						//	.isDisplayed()
						//).toBeTruthy()

					}
				, 5000
				);

				it( 'should navigate to FAQs via menu item'
				, function() {


						ptor.findElement
							( protractor.By.binding("i18n.Menu.title")
							).click();

						ptor.findElement
							( protractor.By.binding("i18n.Menu.help")
							).click();

						//expect(
						//	ptor.findElement(protractor.By.css('input[name="firstName"'))
						//	.isDisplayed()
						//).toBeTruthy()

					}
				, 5000
				);


				it( 'should toggle FAQs when clicked'
				, function() {

						ptor.findElement
							( protractor.By.repeater("article in faqObject.articles")
								.row(1)
							).click();


						ptor.findElement
							( protractor.By.repeater("article in faqObject.articles")
								.row(3)
							).click();

						ptor.findElement
							( protractor.By.repeater("article in faqObject.articles")
								.row(2)
							).click();

						ptor.sleep(2000)

						//expect(
						//	ptor.findElement(protractor.By.css('input[name="firstName"'))
						//	.isDisplayed()
						//).toBeTruthy()

					}
				, 5000
				);




		}
	);
