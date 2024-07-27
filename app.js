var users = [
    {userName:'user1',age:20,gender:'female'},
    {userName:'user2',age:21,gender:'male'},
    {userName:'user3',age:22,gender:'female'},
    {userName:'user4',age:23,gender:'male'},
    {userName:'user5',age:24,gender:'female'},
    {userName:'user6',age:25,gender:'male'},
    {userName:'user7',age:26,gender:'female'},
    {userName:'user8',age:27,gender:'male'},
    {userName:'user9',age:28,gender:'female'},
    {userName:'user10',age:29,gender:'male'}
];
function gendersNumber(){
    var maleNumber=0;
    var femaleNumber=0;
    for(var index=0;index<users.length;index++){
    if(users[index].gender==='male'){
        maleNumber++;
    }else if (users[index].gender==='female'){
        femaleNumber++;
    }  
}
    return{
        female:femaleNumber,
        male:maleNumber
    };
}
console.log(gendersNumber(users));