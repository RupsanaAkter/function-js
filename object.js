function student(name,age,gpa,lang){
    this.name=name;
    this.age=age;
    this.gpa=gpa;
    this.lang=lang;


    this.display= function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.gpa);
    }
}
var student1=new student('Rup',21,3.57,['Bangla','English']);
student1.display();