// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState === 4 && this.status === 200) {
//     const res = JSON.parse(this.responseText);
//     let html = '';
//     res.data.forEach(element => {
//       html+=`<div>${element.first_name}<div>`
//     });
//     document.getElementById('result').innerHTML = html;
//     console.log(res);
//   }
// }

// xhttp.open('GET', 'https://reqres.in/api/users?page=2', true)
// xhttp.send();

// fetch('https://reqres.in/api/users/23').then((res) => {
//   //Có thể tạo các HTTP request đến server một cách đơn giản hơn `XMLHttpRequest` rất nhiều.
//   //Nhược điểm là ko reject khi server trả vể lỗi như 404
//   // cách khắc phục 
//   if (res.ok) {
//     console.log(res);
//     return res.json();
//   } else {
//     throw new Error('lỗi cmnr') 
//   }
// }).then((res) => {
//   console.log(res.data); 
// }).catch((error)=> {
//   console.log(error);
// })

// thư viện AXIOS cho phép chúng ta tùy biến nhiều hơn.
// Tạo một request để truy xuất người dùng ứng với ID cho sẵn:
// axios.get('https://reqres.in/api/users/23')
//   .then(function (response) {
//     // xử trí khi thành công
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // xử trí khi bị lỗi
//     console.log(error);
//   })
//   .finally(function () {
//     // luôn luôn được thực thi
//   });

// // Cách để phát đi POST request bằng Axios
// axios.post('https://reqres.in/api/users', {
//     "id": 20,
//     "first_name": "sang",
//     "last_name": "test",
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// axios.delete('https://reqres.in/api/users/2')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//Axios instance
const instance = axios.create({
  baseURL: 'https://reqres.in/api'
});

//Interceptors có thể config cho request và response
// Thêm một bộ đón chặn Interceptors request
instance.interceptors.request.use((config) => {
  // Làm gì đó trước khi request dược gửi đi
  console.log('config là', config);
  config.headers.Timeout = '1000';
  return config;
}, (error) => {
  // Làm gì đó với lỗi request
  console.log('lỗi request là', config);
  return Promise.reject(error);
});


// Thêm một bộ đón chặn response
instance.interceptors.response.use((response) => {
  // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
  // Làm gì đó với dữ liệu response
  console.log('response là', response);
  return response.data.data;
}, (error) => {
  // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
  // Làm gì đó với lỗi response
  return Promise.reject(error);
});

//Dùng interceptors khi chỉ muốn trả về responsec mình cần (vd: response.data.data) mà không muốn trả những response khác
instance({
    method: 'get',
    url: '/users/2'
  })
  .then((response) => {
    // xử trí khi thành công
    console.log(response);
  })
  .catch((error) => {
    // xử trí khi bị lỗi  
    console.log(error);
  })
  .finally(() => {
    // luôn luôn được thực thi
  });