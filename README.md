# Duty-Server
* Server Created Using ReadMe From [Nodejs-Express-Server Repo](https://github.com/shareed/Nodejs-Express-Server/tree/express-server)
* Base url For Registration and Login: https://dutyapi.herokuapp.com

**Registration** https://dutyapi.herokuapp.com/auth/register
**Login** https://dutyapi.herokuapp.com/auth/login

| Registration | Login |
|------------|------------|
| **username** <br /> - required <br/> - unique| **username** <br /> - required| 
| **email** <br /> - required <br/> - unique| 
| **phonenumber** <br /> - required <br/> - unique| 
|**password** <br /> - required|**password** <br /> - required|



**ASSIGNERS**
* Assigner must be Must be logged in
* GET ASSIGNERS - GET : https://dutyapi.herokuapp.com/duty/assigner
* DELETE ASSIGNER - DELETE : https://dutyapi.herokuapp.com/duty/assigners/id
* UPDATE ASSIGNER - PUT : https://dutyapi.herokuapp.com/duty/assigners/id

[Knex Migration](http://perkframework.com/v1/guides/database-migrations-knex.html)


