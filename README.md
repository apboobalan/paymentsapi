# Payments API
Create simple payments api using restify, mongo.

### Starting the app
#### Using docker
1. App is started using start.sh script.
2. API can be accessed via localhost 8080 port.
3. Tests can be run be entering container using ./enterweb.sh and running npm test command.
4. App is stopped using stop.sh script.

#### Using host machine
1. Start mongo daemon.
2. npm start will start the app.
3. npm test will run the tests.

### Scenarios
* Adding payments.
  * Adding payment with same id throws 409 data conflict error.
  * Adding payment with invalid parameters throw 400 error.
* Adding charges.
  * Adding charges with same id throws 409 data conflict error.
  * Adding charges for unknown payment id throws 404 error.
  * Adding charges with invalid parameters throw 400 error.
* Getting all charges.
  * Return empty array initially.
* Getting charge by id.
  * Return 404 if id is not found.

### Notes
* Model validations are done using mongoose schema.
* For unit testing mocha is used.
* For api testing icedfrisby is used.(_API test runs the above mentioned scenarios_)
* The app starts from app.js and flows via routes, db, models and errors.
* Two charge types(_Debit,Credit_) happen separately and each implements charge method from the base class. Base class throws NoMethodFoundError when implemented classes not define charge method.
