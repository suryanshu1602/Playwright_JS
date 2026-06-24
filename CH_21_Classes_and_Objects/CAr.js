class Car {
    //CAB
    //constructor

    constructor(name_given_during_obj_creation){
        this.name = name_given_during_obj_creation;

    }

    //Attribute
    //Behaviour

    drive(){
        console.log("i am driving", this.name);
    }

}

const tesla = new Car("model S");
tesla.drive();

const i10 = new Car("i10");
i10.drive();
