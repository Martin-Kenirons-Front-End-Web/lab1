let flag:boolean = true;
console.log("The value assigned to flag is: "+flag);

let myNumber:number = 234234.2343;
console.log("The value assigned to myNumber is: "+myNumber);

let myString:string = "Hello";
console.log("The value assigned to myString is: "+myString);

let unKnown:any = "Unkown data";
console.log("The value assigned to unKnown is: "+unKnown);

let myArray:Array<string> = ["test", "skldfj", "ksjdf"];

let mySecondArray:number[] = [2,4,6];

for(let i=0;i< mySecondArray.length;i++){
    console.log("Item: "+mySecondArray[i]+" is in mySecondArray.")
}

mySecondArray.forEach(
    (elem)=>{
        console.log("Element: "+elem);
    }
);