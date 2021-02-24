//Q1. make a string out of an array
//배열을 문자열로 
{
    const fruits=['apple','banna','orange'];
    const result=fruits.join(' ');
    console.log(result);
    //배열을 문자열로 바꾸고 각 요소마다 구분자를 넣어줄 수 있다 (optional)
}
//Q2. make an array out of a string
//문자열을 배열로
{
    const fruits='🍎,🍌,🍐,🍓,🍍';
    const result=fruits.split(',',5);
    console.log(result);
    //구분자 ","가 없는 경우 한 배열 칸에 모든 요소가 저장 됨
    //두번째 인자로 출력하고 싶은 만큼의 인덱스 요소의 수 지정 가능
}
//Q3. make this array look like this:[5, 4, 3, 2, 1]
//배열의 인덱스에 할당된 값들의 순서를 역순으로 나타내라
{
    const array=[1,2,3,4,5];
    const result=array.reverse();
    console.log(result);
    //array자체의 값도 변경된다.
}
//Q4.make new array without the first two elements
//배열의 0, 1번째 요소를 제외한 새 배열을 만들어라
{
    const array=[1,2,3,4,5];
    const result=array.slice(2,5);
    //slice : 배열의 index 2번부터 (5-1)번 까지의 요소를 새 배열에 할당하고 반환함
    console.log(result);
    console.log(array);
    const result_splice=array.splice(0,2);
    //splice 배열의 index 0번부터 (2-1)번 까지의 요소를 지우고 남은 요소를 새 배열에 할당하고 반환함
    //splice는 해당 배열 자체도 바꿈
    console.log(result_splice); //[3, 4, 5]
    console.log(array);//[1, 2]
}

//class 선언
class Student{
    constructor(name, age, enrolled, score){
        this.name=name;
        this.age=age;
        this.enrolled=enrolled;
        this.score=score;
    }
}
//class를 사용하는 배열 선언
const students=[
    new Student('Ian McKellen',82,true,90),
    new Student('Cate Blanchett',50,true,80),
    new Student('Daniel Jacob Radcliffe',36,true,70),
    new Student('Emma Watson',32,true,70),
    new Student('Sylvester Stallone',68,false,40)
];

//Q5.find a student with the score 90
//90점이 넘는 학생을 찾아라.
{
    const result=students.find((students)=>{return students.score===90});
    //학생 배열을 find하고 return 학생의 점수 == 90이면 해당 학생의 value반환 
    console.log(result);
}

//Q6. make an array of enrolled students
//enrolled가 true인 학생들만 모아서 배열로 반환
{
    const result=students.filter((students)=>{return students.enrolled===true})
    //콜백함수를 인자로 주고 콜백함수의 인자로는 배열을 넣고 반환 값으로 boolean 반환이 true인 경우
    //true인 배열의 요소들을 모아 배열로 만들어 return
    console.log(result);
    console.log(Array.isArray(result));
}
//Q7. make an array containing only the student's scores
//학생들의 점수만을 모은 배열을 만들어라
{
    const result=students.map((student)=>{return student.score})
    console.log(result);
    //map함수는 callbackfn을 인자로 받고 callbackfn은 배열을 인자로 받는다
    //배열을 인자로 받은 callbackfn은 map함수에 의해 가공되어지는데 이를 배열로 반환한다.
    //array.map((value)=>{return value.score})
    //callbackfn은 array를 넘겨 받아 array.score를 모아 배열로 반환함.
}
//Q8. check if there is a student with the score lower than 50
{
    //배열중 하나라도 만족하는게 있으면 true를 반환하는 some함수 
    const result=students.some((student)=>{return student.score<=50})
    console.log(result);
    //배열 요소가 모두 만족해야만 true를 반환하는 every함수
    const result_every=students.every((student)=>{return student.score<=50})
    console.log(result_every);
}

//Q9. compute studetns' average score
//학생들의 점수 평군을 구하시오
{
    /*reduce함수는 콜백함수를 인수로 받고 콜백함수의 인수로는 이전 값, 현재 값을 받는다 
    콜백함수에 인수로 넘겨준 인수의 값들을 순차적으로 순회하며 이전 값 + 현재 값을 더한다,
    이전 값 + 현재 값을 더한 값을 이전 값에 다시 초기화 해주고 현재 값은 다음 순회할 차례인 배열의 값으로 배치한다.
    배열이 끝날 때 까지 이를 반복하고 최종 현재 값을 반환하며 함수가 종료된다. (재귀 ..?)*/

    //student.score라는 배열을 생성 -> 그 배열을 대상으로 reduce 연산 
    const result=students.map((student)=>{return student.score}).reduce((pre,cur)=>{return pre+cur},0);


    //reduce의 pre, cur을 전색하는데 pre는 0으로 초기화 cur.score는 students의 score 참조하여 누계합산.
    const result_2=students.reduce((pre, cur)=>{return pre+cur.score},0);
    console.log(result/(students.length));
    console.log(result_2);
}

//Q10. make a string containing all the scores
{
    //map으로 score만 뽑아낸 점수를 배열에 할당하고, join으로 문자열로 변경함.
    const result=students.map((student)=>{return student.score}).filter((score)=>{return score>=80}).join();
    console.log(result);
}
//Bonus! do Q10 sorted in ascending order
//학생의 점수를 오름차순 정렬하시오
{
    const result=students.map((student)=>{return student.score}).sort((a,b)=>a-b);
    console.log(result);
}