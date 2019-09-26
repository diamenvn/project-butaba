import React, {
  Component
} from 'react';

import '../css/master.css';

class Master extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="col-10 nav-header">
            <div className="nav navbar-header flex">
              <div className="navbar-header-menu flex">
                <div className="sidebar-width widget-logo flex flex-around">
                  <div id="logo"></div>
                </div>
                <div className="navbar-header-menu-item">
                  <div>Hạn dùng: 14/09/2019</div>
                  <div className="text-upcase">Gói dịch vụ: <span className="bold">Gói doanh nghiệp</span></div>
                </div>
                <div className="navbar-header-right flex">
                  <div className="notification">
                    <span><i className="fal fa-envelope"></i></span>
                  </div>
                  <div className="notification">
                    <span><i className="fal fa-bell"></i></span>
                  </div>
                  <div className="navbar-header-user flex">
                    <span><i className="fal fa-user"></i></span>
                    <div className="name centerVer">Onion9x</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-around main-bg">
            <div className="sidebar-width sidebar-bg sidebar">
              <ul>
                <li className="sidebar-item">
                  <a href="/">
                    <span><i className="fal fa-tachometer"></i></span>
                    <div>
                      Trang chủ
                    </div>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/order">
                    <span><i className="fal fa-th-list"></i></span>
                    <div>
                      Đơn hàng
                    </div>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#">
                    <span><i className="fal fa-chart-line"></i></span>
                    <div>
                      Báo cáo
                    </div>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#">
                    <span><i className="fal fa-cogs"></i></span>
                    <div>
                      Hệ thống
                    </div>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#">
                    <span><i className="fal fa-sliders-h"></i></span>
                    <div>
                      Cấu hình
                    </div>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#">
                    <span><i className="fal fa-user"></i></span>
                    <div>
                    Tài khoản
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="main">
              {this.props.children}
            </div>
            {this.props.sidebarright}
          </div>
        </div>
      </div>
    );
  }
}

export default Master;
