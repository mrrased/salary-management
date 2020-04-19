import androids from './android';
import cameras from './camera';
import laptops from './laptop';
import userList from './user';

const fakeData = [...userList];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
;

export default fakeData;