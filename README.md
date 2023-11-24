# Node JS Backend

## To run the backend
``` shell
npm i
npm start
```

## To test the backend

```shell
npm i
npm test
```

## Run docker mongoDB
```shell
 docker-compose -f ./docker/docker-compose-db.yml up -d 
 ```

 ## Run docker Jenkins
 ```shell
docker run --name NodeJS_Jenkins -p 8080:8080 -p 50000:50000 -d -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts
 ```

 ## Random secret key 
 ```shell
node
require("crypto").randomBytes(64).toString('hex')
 ```