import { action, observable, computed  } from 'mobx';

export default class Counter{
    @observable count = 0;

    @observable sum = 3;

    @observable person = {
        name: '张三',
        age: 25
    }

    @action.bound add(){
        this.count = ++this.count;
    }

    @action.bound sub(){
        this.count = this.count && --this.count;
    }

    @computed 
    get total(){
        return this.sum + this.count;
    }

    @action.bound updatePerson(name,age){
        this.person = {
            name,
            age
        }
    }
}
