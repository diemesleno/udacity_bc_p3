# Blockchain API v1

Simple API to get the blocks by height and create new blocks

## NodeJS Framework in this project:

```
Express.js
```


## Getting Started

```
git clone https://github.com/diemesleno/udacity_bc_p3

cd udacity_bc_p3

npm install

node index.js
```

### Recomented to use Postman or another REST client

## Endpoint GET http://localhost:8000

Get all endpoints information

Example of data received

```
[
    {
        "endpoint": "http://127.0.0.1:8000",
        "method": "GET",
        "message": "The information about all endpoints"
    },
    {
        "endpoint": "http://127.0.0.1/block/{height}",
        "method": "GET",
        "message": "Get the block by height"
    },
    {
        "endpoint": "http://127.0.0.1/block",
        "method": "POST",
        "message": "Create a new block"
    },
    {
        "endpoint": "http://127.0.0.1/chain",
        "method": "GET",
        "message": "Get all the blocks stored in the blockchain"
    }
]
```


## Endpoint GET http://localhost:8000/block/{height}

Get the block by height


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

## Endpoint POST http://localhost:8000/block

Create a new block

Example of data to send


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

## Endpoint GET http://localhost:8000/chain

Get all blocks stores in the blockchain

Example of data received

```
{
    "success": true,
    "data": [
        {
            "hash": "d933305a9bc0b8f0702708a7150db7e37edf4120e4c717d4ca19ebdf2bac1df3",
            "height": 0,
            "body": "Genesis block",
            "time": "1533476163",
            "previousBlockHash": ""
        },
        {
            "hash": "c8b4226e1d170a898a58cb68fde9a439bb6c09180c9276450e27f96686173195",
            "height": 1,
            "body": "Test data 10",
            "time": "1533476163",
            "previousBlockHash": "d933305a9bc0b8f0702708a7150db7e37edf4120e4c717d4ca19ebdf2bac1df3"
        },
        {
            "hash": "c715877288bcf0d80141c69b90124f6cdae6f5a4b5b8c41008d622df1844d7ea",
            "height": 10,
            "body": "Test data 1",
            "time": "1533476164",
            "previousBlockHash": "eae008bff794421c783c93b6eb71fb186d18326e2a5a21f395aad2bf55fac837"
        },
        {
            "hash": "ff58ae10321c2fcc94cecd3d11ed358e56913463a4c0256fd0eacce01f21783a",
            "height": 11,
            "body": "The life is good",
            "time": "1535154569",
            "previousBlockHash": "c715877288bcf0d80141c69b90124f6cdae6f5a4b5b8c41008d622df1844d7ea"
        },
        {
            "hash": "01996c80769db3638fd9579f513ebc7237c660230d3265b4be62a024b194427a",
            "height": 12,
            "body": "There's no place like home",
            "time": "1535154649",
            "previousBlockHash": "ff58ae10321c2fcc94cecd3d11ed358e56913463a4c0256fd0eacce01f21783a"
        },
        {
            "hash": "fed27280336fc3c30e7d02c3f2c7fd7f1a27b911eee3fdc251ea491e8f976820",
            "height": 13,
            "body": "Ray is sleeping",
            "time": "1535155041",
            "previousBlockHash": "01996c80769db3638fd9579f513ebc7237c660230d3265b4be62a024b194427a"
        },
        {
            "hash": "1d83f74862d54fe83ff20f705c2f7b02068473bf961bab2fe4a91875f8439f58",
            "height": 14,
            "body": "Ray is sleeping",
            "time": "1535155150",
            "previousBlockHash": "fed27280336fc3c30e7d02c3f2c7fd7f1a27b911eee3fdc251ea491e8f976820"
        },
        {
            "hash": "3f46b0486951c14f201d546360e3196b4482df396584c5caad2cb361f04f6579",
            "height": 15,
            "body": "Ray is sleeping",
            "time": "1535155192",
            "previousBlockHash": "1d83f74862d54fe83ff20f705c2f7b02068473bf961bab2fe4a91875f8439f58"
        },
        {
            "hash": "17535da5daf708d12a0e05fbd4ba65c926543351e17b9802ef3b19ee5da22d6c",
            "height": 16,
            "body": "Ray is sleeping",
            "time": "1535155268",
            "previousBlockHash": "3f46b0486951c14f201d546360e3196b4482df396584c5caad2cb361f04f6579"
        },
        {
            "hash": "acf173364a4b2ec8855928f8e2f3e19948a5e110b924e78558e2cd83a24655ad",
            "height": 17,
            "body": "It's now or never",
            "time": "1535155373",
            "previousBlockHash": "17535da5daf708d12a0e05fbd4ba65c926543351e17b9802ef3b19ee5da22d6c"
        },
        {
            "hash": "ffcf7fc73370eb47b2b0eb8925fc0043a66e2e89e144445bc0726a21fff60089",
            "height": 18,
            "body": "It's now or never",
            "time": "1535155468",
            "previousBlockHash": "acf173364a4b2ec8855928f8e2f3e19948a5e110b924e78558e2cd83a24655ad"
        },
        {
            "hash": "0535c479ad0a256ef0bdab18e264c28f777568595e3652fe6a266ef59bb4b0bd",
            "height": 19,
            "body": "It's now or never",
            "time": "1535156288",
            "previousBlockHash": "ffcf7fc73370eb47b2b0eb8925fc0043a66e2e89e144445bc0726a21fff60089"
        },
        {
            "hash": "46e1702652ab7c4938b42db542c33e5cc1a1c2ecd44401bb81c2b76bfb9ba0ca",
            "height": 2,
            "body": "Test data 9",
            "time": "1533476164",
            "previousBlockHash": "c8b4226e1d170a898a58cb68fde9a439bb6c09180c9276450e27f96686173195"
        },
        {
            "hash": "9cd500d09f6cf422a28d7b6e71e31d835b2106c12775bed74c4cc3f3ca0c67db",
            "height": 20,
            "body": "It's now or never",
            "time": "1535157195",
            "previousBlockHash": "0535c479ad0a256ef0bdab18e264c28f777568595e3652fe6a266ef59bb4b0bd"
        },
        {
            "hash": "04ad33ad32e53ad8299bcf1e9ab448c6ecc4673a567d0f1cb5b3205a0931024a",
            "height": 3,
            "body": "Test data 8",
            "time": "1533476164",
            "previousBlockHash": "46e1702652ab7c4938b42db542c33e5cc1a1c2ecd44401bb81c2b76bfb9ba0ca"
        },
        {
            "hash": "f067b84c4f465368e01f9707751958ff5cdb80a2c7a57ec500b6b394f6fbae7c",
            "height": 4,
            "body": "Test data 7",
            "time": "1533476164",
            "previousBlockHash": "04ad33ad32e53ad8299bcf1e9ab448c6ecc4673a567d0f1cb5b3205a0931024a"
        },
        {
            "hash": "c486fc72282de8138657698320f235f4d7efeb7e76e79ba21300ec83a49dbc92",
            "height": 5,
            "body": "Test data 6",
            "time": "1533476164",
            "previousBlockHash": "f067b84c4f465368e01f9707751958ff5cdb80a2c7a57ec500b6b394f6fbae7c"
        },
        {
            "hash": "8e2c267d5a233698917233e430ed731cf5ae38e6bb38d0cc4d1890c2e0aafcd8",
            "height": 6,
            "body": "Test data 5",
            "time": "1533476164",
            "previousBlockHash": "c486fc72282de8138657698320f235f4d7efeb7e76e79ba21300ec83a49dbc92"
        },
        {
            "hash": "0dc47898dbad06e2aa1a5d2fb69fb0bd2a7131638dcb22b658d38e752a63dac0",
            "height": 7,
            "body": "Test data 4",
            "time": "1533476164",
            "previousBlockHash": "8e2c267d5a233698917233e430ed731cf5ae38e6bb38d0cc4d1890c2e0aafcd8"
        },
        {
            "hash": "773775e8b95bcd372af453c971c06ea94b07f774030e8113dce081c91dbf38f9",
            "height": 8,
            "body": "Test data 3",
            "time": "1533476164",
            "previousBlockHash": "0dc47898dbad06e2aa1a5d2fb69fb0bd2a7131638dcb22b658d38e752a63dac0"
        },
        {
            "hash": "eae008bff794421c783c93b6eb71fb186d18326e2a5a21f395aad2bf55fac837",
            "height": 9,
            "body": "Test data 2",
            "time": "1533476164",
            "previousBlockHash": "773775e8b95bcd372af453c971c06ea94b07f774030e8113dce081c91dbf38f9"
        }
    ]
}
```