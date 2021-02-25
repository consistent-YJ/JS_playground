// {
//     function callFn(){
//         fetch('callFile').then(function (response){
//             response.text().then(function(text){
//                 document.querySelector('article').innerHTML=text;
//             })
//         })
//     }
// }

{
    function callLamda(){
        fetch('callFile').then((response)=>{response.text().then((text)=>{document.querySelector('article').innerHTML=text;})})
    }
}
