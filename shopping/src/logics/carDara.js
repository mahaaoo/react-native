
import { observable, computed, action} from 'mobx';
import Fetch from '../utils/Fetch'

class shopCar {
  @observable data;
  constructor() {
    Fetch.post('http://192.168.0.10:8088/cart/findShoppingCart',{
        brcNo:'2',
        userNo:'1',
      }).done((data)=>{
        if (data.retCode == '1') {
          console.log('12345678')
          this.data = data.shoppingCartListReturnVO
        }
      })
  }
  minus(index) {
    // const count = Number(this.data[index].count);
    // parseInt(this.data[index].count) -= 1;
    // console.log(parseInt(this.data[index].count))
    this.data[index].count -= 1;
  };
  plus(index){
    // const count = Number(this.data[index].count);
    // parseInt(this.data[index].count)  += 1;
    // console.log(parseInt(this.data[index].count))
    this.data[index].count += 1;

  };

  count(){
    return this.data.reduce((a, b) => {
      return a + b.count;
    }, 0);
  };

  sum() {
    return this.data.reduce((a, b) => {
      return a + b.count * b.oldPrice;
    }, 0);
  };

}

const carData = new shopCar()

export default carData



// const cartData = observable([
//   {
//     id: '1461621270',
//     name: '珠江·恺撒堡三角钢琴 GH275',
//     price: 5800000,
//     count: 1,
//     img: 'https://img10.360buyimg.com/n7/s176x176_jfs/t895/31/444842663/136762/464d0fe/5524fe75N30ab6301.jpg!q70.jpg',
//     checked: false,
//   },
//   {
//     id: '10416051797',
//     name: '珂兰KELA.CN  GIA裸钻 14克拉G/VS2/3EX',
//     price: 6180000,
//     count: 1,
//     img: 'https://img10.360buyimg.com/n7/s176x176_jfs/t634/292/1273613352/229178/7eed25e4/54c21a48N05bc7e33.jpg!q70.jpg',
//     checked: false,
//   },

//   ]);

// cartData.request = () => {
//   Fetch.post('http://192.168.0.10:8088/cart/findShoppingCart',{
//     brcNo:'2',
//     userNo:'1',
//   }).done((data)=>{
//     if (data.retCode == '1') {
//       console.log(88888);
//       cartData.push(data.shoppingCartListReturnVO);
//       console.log(cartData);
//     }
//   })
// }

// cartData.minus = (index) => {
//   cartData[index].count -= 1;
// };

// cartData.plus = (index) => {
//   cartData[index].count += 1;
// };

// cartData.check = (checked, index) => {
//   cartData[index].checked = checked;
// };


// cartData.count = computed(() => {
//   return cartData.reduce((a, b) => {
//     console.log(a)
//     if (b.checked) {
//       return a + b.count;
//     }
//     else {
//       return a;
//     }
//   }, 0);
// });

// cartData.sum = computed(() => {
//   return cartData.reduce((a, b) => {
//     if (b.checked) {
//       return a + b.count * b.price;
//     }
//     else {
//       return a;
//     }
//   }, 0);
// });

// export default cartData;