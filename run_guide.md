```
cd projects/learning/11_nestjs
docker ps
docker kill $(docker ps -q)
docker build -t nest-cloud-run .
docker run -p80:3000 nest-cloud-run
```

visit: 0.0.0.0 


## Player json examples
{
    "name": "Virat Kohli",
    "isNational": true,
    "joiningDate": "2023-03-01",
    "role": ["captain", "batsman"]
}

{
    "name": "Rahul Dravid",
    "isNational": false,
    "joiningDate": "2023-03-06",
    "role": ["batsman", "baller"]
}

## Team json examples
{
    "name": "India",
    "description": "best team in the world",
    "players": [{
    "name": "Virat Kohli",
    "isNational": true,
    "joiningDate": "2023-03-01",
    "role": ["captain", "batsman"]}, {
    "name": "Rahul Dravid",
    "isNational": false,
    "joiningDate": "2023-03-06",
    "role": ["batsman", "baller"]
    }]
}

# vscode tricks
https://stackoverflow.com/questions/50028649/multiline-column-copy-paste-in-vs-code

```
npx prisma init --datasource-provider postgresql
npx prisma db pull
npx prisma validate
sudo docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

in .env : 
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mydb?schema=public"

```
npx prisma migrate dev
```


```
npm install prisma --save-dev
npx prisma init --datasource-provider postgresql
npm i @prisma/client
npx prisma db seed
npx prisma studio
npx nest generate module prisma
npx nest generate service prisma
npm install --save @nestjs/swagger swagger-ui-express
```

go to localhost:3000/api

