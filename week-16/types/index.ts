type StringOrNumber = {
    name : string
} & number[];

function print(id:StringOrNumber) {
    return id
    
}

const arr = [1, 2, 3] as StringOrNumber;

arr.name = "Sujal";

const ans = print(arr);
console.log(ans.name);

