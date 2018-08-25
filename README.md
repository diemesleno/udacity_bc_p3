# Blockchain API v1

Simple API to get the blocks by height and create new blocks

## Getting Started

```
git clone https://github.com/diemesleno/udacity_bc_p3

cd udacity_bc_p3

npm install

node index.js
```

## Recomented to use Postman or another REST client

## Endpoint GET http://localhost:8000/block/{height}


Example of data received

```
{
    "hash": "01996c80769db3638fd9579f513ebc7237c660230d3265b4be62a024b194427a",
    "height": 12,
    "body": "There's no place like home",
    "time": "1535154649",
    "previousBlockHash": "ff58ae10321c2fcc94cecd3d11ed358e56913463a4c0256fd0eacce01f21783a"
}
```


Example of data to send

## Endpoint POST http://localhost:8000/block

```
{
	"body": "There's no place like home"
}
```

Example of data received

```
{
    "hash": "9cd500d09f6cf422a28d7b6e71e31d835b2106c12775bed74c4cc3f3ca0c67db",
    "height": 20,
    "body": "There's no place like home",
    "time": "1535157195",
    "previousBlockHash": "0535c479ad0a256ef0bdab18e264c28f777568595e3652fe6a266ef59bb4b0bd"
}
```