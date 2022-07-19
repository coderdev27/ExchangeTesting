import fetch from "node-fetch";
const a = async() => {
console.time("Time")
for(let i = 696; i < 10000; i += 1){
    console.time("TimeStart");
    let sizeRandom = Math.round(Math.random()*10)
    while(sizeRandom === 0){
        sizeRandom =   Math.round(Math.random()*10)
    }
    
    
    const body = {
        symbol: "BTC/USD",
        direction: "buy",
        type : "market",
        size : sizeRandom,
        price: null,
        postOnly : true,
        time : Date.now()
    };

    const response = await fetch('http://localhost:3000/api/orders', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json', "x-api-key" : "94cd50b7809c7904679aba1a73f6e44d4e68bff310b45d0da44211e8b4395c04a4e74a6119fe5870c8b4f7366244142bebcd"}
    });
    
    console.log(await response.json());
  
    console.log(i);
    console.timeEnd("TimeStart");
}
console.timeEnd("Time")
}

a()