# Duty-Server
* Server Created Using ReadMe From [Nodejs-Express-Server Repo](https://github.com/shareed/Nodejs-Express-Server/tree/express-server)
* Base url For Registration and Login: https://dutyapi.herokuapp.com

    | Constraints        | Are           | Cool  |
    | ------------- |:-------------:| -----:|
    | Registration <br/> 
        email | /auth/register| POST |
    unique     
    | Login      | /auth/login     |   POST |

# Registration
| endpoint      | constraints | 
| --------------| ------------|
| /auth/register| *username, email, and phonenumber:* required, unique <br /> *password:*| 
     
    


* WORK WITH ASSIGNERS: https://dutyapi.herokuapp.com/duty/assigner


    | Endpoint Name        | Are           | Cool  |
    | ------------- |:-------------:| -----:|
    | Get       | /auth/register| POST |
    | Login      | /auth/login     |   POST |



* CREATE NEW ASSIGNER / REGISTER - POST : https://dutyapi.herokuapp.com/duty/auth/assigners
username | unique
  notNullable
email
 unique
 notNullable
      tbl.integer('phoneNumber').unique().notNullable();
      tbl.text('password')






* DELETE ASSIGNER - DELETE : https://dutyapi.herokuapp.com/duty/assigners/id
* UPDATE ASSIGNER - PATCH : https://dutyapi.herokuapp.com/duty/assigners/id

[Knex Migration](http://perkframework.com/v1/guides/database-migrations-knex.html)


