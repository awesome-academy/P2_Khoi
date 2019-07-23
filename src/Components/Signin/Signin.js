import React, { Component } from 'react';
import './style/Signin.scss';

export default class Signin extends Component {
	render() {
		return (
			<div className="container p-0" id="login">
				<div className="mt-4">
					<h1 className="font-weight-bold mb-4 d-inline">ĐĂNG NHẬP</h1>
					<button className="btn btn-dark text-uppercase d-inline float-right">Đăng ký</button>
					<form className="p-5 form__login">
						<h4 className="font-weight-bold">KHÁCH HÀNG ĐĂNG KÝ</h4>
						<p className="font-weight-bold mb-4">Nếu bạn có 1 tài khoản, xin vui lòng đăng nhập</p>
							<label className="font-weight-bold mt-4">Địa chỉ email*</label>
							<input type="email" />
							<label className="font-weight-bold mt-4">Xác nhận mật khẩu*</label>
							<input type="password" />
						<p className="font-weight-bold mt-4 d-inline">Quên Mật Khẩu?</p>
						<button className="btn btn-dark text-uppercase d-inline ml-4">Đăng nhập</button>
					</form>
				</div>
			</div>
		);
	}
}
