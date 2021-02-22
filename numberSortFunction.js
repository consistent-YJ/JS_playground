let arr=prompt("Enter an array of numbers with, as a separator");
ary=arr.split(',');
    for(let k=0;k<ary.length;k++){
        ary[k]=parseInt(ary[k]);
    }
    console.log(ary);
console.log(ary);
let skip=0;
function numberDescending (ary){
    for(let j=0;j<ary.length;j++){
        for(let i=0;i<ary.length;i++){
            if(ary[i]>ary[i+1]){
            let res=0;
            res=ary[i];
            ary[i]=ary[i+1];
            ary[i+1]=res;
            }
            document.write(ary+" ...sorting...<br>");
        }
    }
    document.write(ary+"sorted<br>");
    return ary;
}
numberDescending(ary)
