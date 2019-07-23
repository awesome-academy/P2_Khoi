import React, { Component } from 'react';
import './style/Signup.scss';

export default class Signup extends Component {
	render() {
		return (
			<div className="hoc p-0" id="signup">
				<div className="p-3">
					<h1 className="font-weight-bold mb-3">ĐĂNG KÝ</h1>
					<form className="p-5 form__signup">
						<h4 className="font-weight-bold">THÔNG TIN CÁ NHÂN</h4>
							<label className="font-weight-bold p-3">Tên trước*</label>
							<input type="text" />
							<label className="font-weight-bold p-3">Tên sau*</label>
							<input type="text" />
							<label className="font-weight-bold p-3">Email*</label>
							<input type="email" />
							<label className="font-weight-bold p-3">Password*</label>
							<input type="password" />
						<input className="d-inline" type="checkbox" />
						<p className="p-3 d-inline font-weight-bold">Đăng ký nhận bản tin</p>
						<h4 className="font-weight-bold p-3">THÔNG TIN ĐĂNG NHẬP</h4>
							<label className="font-weight-bold p-3">Mật khẩu*</label>
							<input type="password" />
							<label className="font-weight-bold p-3">Xác nhận mật khẩu*</label>
							<input type="password" /><br />
						<button className="btn btn-dark">Gửi</button>
						<button className="btn btn-dark float-right"><i className="fa fa-undo"></i> Quay lại</button>
					</form>
				</div>
			</div>
		);
	}
}
