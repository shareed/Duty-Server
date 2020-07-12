# Duty-Server
* Server Created Using ReadMe From [Nodejs-Express-Server Repo](https://github.com/shareed/Nodejs-Express-Server/tree/express-server)
# BACKEND 

## Register Assigner
POST

**Requirements to register:**
- unique username
- unique email
- password
- unique phonenumber

**Example sending a request to register a new assigner**

  *     {   
            "username" : "Shannon",
            "email": " shannon@gmail.com
            "password" : "thisisagoodone"
            "phonenumber" : 1238548312
        }

### Assigners Schema

| Fields     	| Data Type        	| Constraints                                         	|
|------------	|------------------	|-----------------------------------------------------	|
| id         	| integer:unsigned: | auto-increments: primary key: created by database: 	|
| username 	    | text           	| required, unique                                           	|                                           	|
| email      	| text           	| required, unique                                    	|
| password   	| text           	| required                                            	|
| phonenumber   	| integer           	| required, unique                                            	|


#NOT YET WORKING
## Logs user in
***POST***


**Requirements to login:**
- existing username
- password

**Example sending a request to login**

  *     {   
            "username" : "Shannon",
            "password" : "thisisagoodone"
        }

#ENDPOINTS

| Methods 	| Endpoints                         | Description                                      	|
|---------	|----------------------------------	|--------------------------------------------------	|
| POST    	| /api/auth/register               	| registers a new assigner                             	|
| POST    	| /api/auth/login                  	| logs in a assigner                                   	|
| GET     	| /api/assigners                       	| gets all assigners                                  	|
| GET     	| /api/assigners/id                    	| gets a assigner by assigner id                          	|
| PUT     	| /api/assigners/id                    	| updates a assigner infomation                         |




