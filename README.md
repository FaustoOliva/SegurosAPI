# Api Seguros

Hecho por Fausto Oliva 

## Requirements

- Postman
- Node version superior al 17.5.0


## Setup

-   Clonar el repositorio
-   Correr `npm i` para instalar todas las dependencias
-   Correr `npm start` para iniciar el servidor 

## Docs

En `https://localhost:8080/apidocs` hay una documentacion de openapi no funcional.  Esta es una documentación de los endpoints que se encuentran en la aplicación, y de los schemas que se utilizan. Al principio de cada url de endpoint se le agrega `https://localhost:8080` por default si se está ejecutando localmente. Recomendamos importar y utilizar la colleciòn Postman que està disponible en este directorio. 

## Postman

En Postman presionar `Ctrl + o` para importar el archivo de *requestCollection.json*. Para utilizar la api primero tiene que loguearse como cliente y se lo va a otorgar un token. Ese token lo tiene que pegar en *Authorization* -> *Bearer token* y pegarlo. 

## Endpoints

### GET /auth/login?email&password

Endpoint para la creaciòn del bearer token a partir de las credenciales del cliente. Consiste en dos parametros; email y password.

### GET /client/getById?id

Endpoint para solicitar la data de un cliente a partir del id del mismo. El id es el parametro a pasar. Esta informaciòn la pueden solicitar el rol user como tambien el admin. 

### GET /client/getByName?name

Solicita la informaciòn a partir del nombre asignado a cada cliente. Igualmente que el endpoint anterior, user y admin estan habilitados para usarlo. 

### GET /policy/getByClientName?name

En este caso corresponde a las polizas. Solicita la informaciòn a partir del nombre del cliente a que està relacionado cada poliza de seguro. Por temas de seguridad, solo pueden acceder los admin. 

## Schemas

### Cliente
  id : string 
  
  name : string
  
  email : string
  
  role : string (user or admin)
  
  password : string

### Policy
  id : string 
  
  amountInsured : number
  
  email : string 
  
  inceptionDate : datetime 
  
  installmentPayment : boolean 
  
  clientId : string 