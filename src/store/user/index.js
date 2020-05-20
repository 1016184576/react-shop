import { action, observable  } from 'mobx';

export default class Counter{
    @observable nickName = '昵称';

    @observable authToken = true;
        
    @observable userName = '';

    @observable integral = 0;

    @observable avatarUrl = require('../../assets/images/user/my/default-head.png');

    @action.bound updateUserInfo(obj){
        this.nickName = obj.nickName;
        this.integral = obj.integral;
    }
}
