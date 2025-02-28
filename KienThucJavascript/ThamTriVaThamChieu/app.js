let user = {
    name: 'Sang',
    age: 30
}

// Bây giờ clone là một object độc lập với cùng nội dung với user
// let clone = { ...user }
// clone.name = 'Peter'
// console.log(user.name) // Vẫn là John trong object gốc

let clone = {} // một object rỗng

// Cùng copy các thuộc tính nào
for (let key in user) {
  clone[key] = user[key]
}
clone.name = 'Pete'
// console.log(clone) // Vẫn là John trong object gốc

/**
 * Deep clone
 */
let user1 = {
    name: 'John',
    sizes: {
      height: 182,
      width: 50
    }
  }
  
  let clone1 = { ...user1 }
  
  console.log(user1.sizes === clone1.sizes) // true, Vì cùng object
  
// user và clone chia sẻ sizes
//   user1.sizes.width++
//   console.log(clone1.sizes.width) 

// Phương Pháp 1: JSON.parse(JSON.stringify())
    // Ưu điểm: Đơn giản, không cần thư viện.
    // Nhược điểm:
    // Không xử lý được Function, Symbol, undefined.
    // Mất thông tin với Date (chuyển thành string).
    // Lỗi với circular references (tham chiếu vòng).


const clone2 = JSON.parse(JSON.stringify(user1));
// user1.sizes.width++
console.log('clone2:', clone2.sizes.width)
console.log('clone1:', clone1.sizes.width)

// Phương Pháp 2: Thư viện Lodash (_.cloneDeep())
    // Ưu điểm: Xử lý mọi kiểu dữ liệu, hỗ trợ circular references.
    // Nhược điểm: Tăng kích thước bundle do cần import thư viện.
// import _ from 'lodash';
// const clone = _.cloneDeep(user1);

// Phương Pháp 3: structuredClone() (HTML DOM API)
    // Ưu điểm: Hỗ trợ sẵn trong trình duyệt và Node.js (phiên bản mới).
    // Nhược điểm:
    // Không clone được Function/DOM elements.
    // Chưa hỗ trợ các class tùy chỉnh.
const clone3 = structuredClone(user1);
user1.sizes.width++
console.log(clone3)
// Phương pháp 4:  Dùng Thư Viện Immer (Khuyến nghị)
    // Ưu điểm: Code ngắn gọn, tự động xử lý immutability, hiệu suất cao.
    // Cơ chế: Sử dụng "draft state" để thay đổi tạm thời → tự động tạo bản sao.
// const [user2, setUser] = useState({
//     id: 1,
//     profile: { name: "Alice", addresses: [{ city: "Hanoi" }] }
// });

// import { produce } from 'immer';
// setUser(produce(user2, draft => {
//     draft.profile.addresses[0].city = "Hue";
// }));


    