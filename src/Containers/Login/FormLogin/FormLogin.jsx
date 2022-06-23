import React from "react";
import "./FormLogin.scss";

const FormLogin = () => {
  return (
    <div className="container">
      <div className="row account__login">
        <div className="col-lg-6 login">
          <h3>Đăng Nhập</h3>
          <form className="form-field">
            <div className="login-forgot-password">
              <a href="" className="forgot-password">
                Bạn quên mật khẩu?
              </a>
            </div>
            <div className="form-item">
              <div className="input">
                <input
                  type="text"
                  className="form-input"
                  placeholder="  "
                ></input>
                <label for="form-email" className="form-label">
                  Email
                  <span className="form-asterisk"></span>
                </label>
              </div>
            </div>
            <div className="form-item">
              <div className="show-hide-password-wrapper">
                <i className="fa-regular fa-eye"></i>
                <button type="button" className="show-hide-password-button">
                  Hiển thị
                </button>
              </div>
              <div className="input">
                <input
                  type="password"
                  className="form-input"
                  placeholder="  "
                ></input>
                <label for="form-email" className="form-label">
                  Mật Khẩu
                  <span className="form-asterisk"></span>
                </label>
              </div>
            </div>
            <div className="check-box">
              <label className="check-box__label">
                <input type="checkbox" className="check-box__input"></input>
                <span className="check-box__text">
                  Giữ đăng nhập cho tôi.
                  <button className=" check-box__button">Thêm thông tin</button>
                </span>
              </label>
            </div>
            <div className="login-button">
              <button type="">
                Đăng Nhập
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="space-small"> HOẶC</div>
            <div className="social-login-form">
              <button type="" className="social-login-form-facebook">
                <span className="social-content">facebook</span>
                <i className="fa-brands fa-facebook"></i>
              </button>
              <button type="" className="social-login-form-google">
                <span className="social-content">google</span>
                <i className="fa-brands fa-google"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-6 login">
          <h3>Tạo một tài khoản</h3>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
