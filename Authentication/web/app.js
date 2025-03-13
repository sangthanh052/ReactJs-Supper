class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:4000",
      timeout: 10000,
    });
    this.refreshTokenRequest = null;
    this.instance.interceptors.request.use(
      (config) => {
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
          config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    this.instance.interceptors.response.use(
      (config) => config.data,
      (error) => {
        console.log("loi", error);
        if (
          error.response.status === 401 &&
          error.response.data.name === "EXPIRED_ACCESS_TOKEN"
        ) {
          //refreshToken() là promise khi thành công thì sẽ resolve ra access_token
          //banđầu gọi api thứ 1(getprofile) thì this.refreshTokenRequest = null nên nó sẽ = refreshToken(), sau đó đợi refreshToken() thành công sẽ resolve ra access_token
          //gọi api thứ 2(getproducrt) thì this.refreshTokenRequest có giá trị nên nó sẽ lấy giá trị đó và ko gọi hàm refreshToken() nữa
          this.refreshTokenRequest = this.refreshTokenRequest
            ? this.refreshTokenRequest
            : refreshToken().finally(() => {
                this.refreshTokenRequest = null;
              });

          return this.refreshTokenRequest.then((access_token) => {
            error.response.config.Authorization = access_token;
            // Gọi lại api bị lỗi (access_token hết hạn) và truyền config mới (access_token đã được renew)
            return this.instance(error.response.config);
          });
        }
        return Promise.reject(error);
      }
    );
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }
}

const http = new Http();

const fetchProfile = () => {
  http
    .get("profile")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

const fetchProduct = () => {
  http
    .get("products")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

const refreshToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");
  try {
    const res = await http.post("refresh-token", {
      refresh_token,
    });
    const { access_token } = res.data;
    localStorage.setItem("access_token", access_token);
    return access_token;
  } catch (error) {
    localStorage.clear();
    console.log(error);
  }
};

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  http
    .post("login", {
      username,
      password,
    })
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
    })
    .catch((error) => {
      console.log(error);
    });
});

document.getElementById("btn-get-profile").addEventListener("click", (e) => {
  e.preventDefault();
  fetchProfile();
});

document.getElementById("btn-get-products").addEventListener("click", (e) => {
  e.preventDefault();
  fetchProduct();
});

document.getElementById("btn-get-both").addEventListener("click", (e) => {
  e.preventDefault();
  fetchProfile();
  fetchProduct();
});

document.getElementById("btn-refresh-token").addEventListener("click", (e) => {
  e.preventDefault();
  refreshToken();
});
