//Абстракция -общее действие свойства методы и так далее а уже от него сами абстрагируемся

class Footballer {
    constructor(name,club) {
        this.name = name;
        this.club = club;
    }
    shoot(){}
    celebrateGoal(){}
    pass(){}
}

class Forwarder extends Footballer {
    constructor(name,club) {
        super(name,club);
    }
    shoot(){
        console.log('Silnii udar')
    }
    celebrateGoal(){
        console.log("Sieeee");
    }
    pass(){
        console.log("Srednii pas");
    }
}