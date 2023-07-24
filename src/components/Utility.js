let Utils = {}

let val = 0;

Utils.calcMean = (arr)=>{
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += Number(arr[i]);
    }
    val = (total / arr.length);
    val = val.toFixed(3);
    return Number(val);
}

Utils.calcMedian = (arr)=>
{     
    const len = arr.length;
    arr.sort((a, b) => a - b);
    if (len % 2 === 0)val = (arr[len / 2 - 1] + arr[len / 2]) / 2;
    else val = arr[(len - 1) / 2];
    val = val.toFixed(3);
    return Number(val);
}

Utils.calcMode = (arr)=>
{
    const mode = {};
    let count = 0;
    for(let i = 0; i < arr.length; i++)
    {
        const item = arr[i];         
        if(mode[item])mode[item]++;
        else mode[item] = 1;
        if(count < mode[item])
        {
            val = item;
            count = mode[item];
        }
    }
    val = val.toFixed(3);
    return Number(val);
}

export default Utils; 

