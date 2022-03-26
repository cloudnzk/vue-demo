let name = "fullrukawa";

// 导出函数
function sum(a,b){
    return a + b;
}

//导出类
class Person{
    hello(){
        console.log("类的方法");
    }
}

export{
    name,
    Person,
}

//可以由导入者命名
export default sum