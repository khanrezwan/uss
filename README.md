University course mangement system using Sails JS
Setting up passport-local Auth with Bcrypt in Sails JS -Rezwan

execute following commands from project directory then:

sails new uss_new --template=ejs
npm install sails-mongo --save
npm install sails-mysql --save
npm install passport --save
npm install passport-local --save
npm install sails-generate-auth --save
npm install validator --save
npm install bcrypt --save
npm install connect-mongo
sails generate auth

change require('bcryptjs'); to require('bcryptjs'); in api/models/Passport.js

add following lines of code in  config/Connections.js
localMysqlServer: {
 adapter: 'sails-mysql',
 host: '127.0.0.1',
 port: 3306,
 user: 'uss_new',
 password: 'abc123',
 database: 'uss_new'
}
Update config/models.js add following line:
connection:'localMysqlServer'
Update config/session.js add following lines:
adapter: 'mongo',
host: 'localhost',
port: 27017,
db: 'sails',
collection: 'sessions'

add following line in config/bootstrap.js after cb()
sails.services.passport.loadStrategies();
add following lines in config/route.js
 'get /login': 'AuthController.login',
  'get /logout': 'AuthController.logout',
  'get /register': 'AuthController.register',

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',

  'get /auth/:provider': 'AuthController.provider',
  'get /auth/:provider/callback': 'AuthController.callback',

add following lines in config/policies.js

'*': [ 'passport' ],


a [Sails](http://sailsjs.org) application
