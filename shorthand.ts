class shorthand{
    data:string=""
    constructor(public name:string,public rollno:number)
    {
    
    }
    getInformation()
    {
        console.log(this.name)
        console.log(this.rollno)
    }
}
let call=new shorthand("hello",15)
call.data="hello word"
console.log(call.data)
call.getInformation()