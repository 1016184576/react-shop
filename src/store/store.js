import Counter from './counter';
import User from './user';

 const store = {
    counter: new Counter(),
    user: new User()
}

export default store;