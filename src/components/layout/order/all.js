import React, { Component } from 'react';
import Master from '../master';
import '../../css/order/all.css';

class All extends Component {
  render() {
    return (
      <Master children={this.props.children} sidebarright={<SidebarRight></SidebarRight>}></Master>
    );
  }
}

class SidebarRight extends Component {
  render(){
    return(
      <div className="sidebar-right">
        <div className="sidebar-right-header">
          <div><i class="fal fa-list-ul mr-right-10"></i>THÔNG TIN</div>
        </div>
        <div className="sidebar-right-body">
          <div className="sidebar-right-content">
            <div className="sidebar-right-container">
              <div className="sidebar-right-title">
                Lịch sử ghi chú
              </div>
              <div className="line">
                <span className="sales-name">Nguyễn Nam</span> đã chốt đơn vào lúc 11h30 với ghi chú - khách đặt 1 hộp
              </div>
              <div className="line">
                <span className="sales-name">Nguyễn Nam</span> đã chốt đơn vào lúc 11h30 với ghi chú - khách đặt 1 hộp
              </div>
              <div className="line">
                <span className="sales-name">Nguyễn Nam</span> đã chốt đơn vào lúc 11h30 với ghi chú - khách đặt 1 hộp
              </div>
              <div className="line">
                <span className="sales-name">Nguyễn Nam</span> đã chốt đơn vào lúc 11h30 với ghi chú - khách đặt 1 hộp
              </div>
              <div className="sidebar-right-title">
                Nhắc việc của tôi
              </div>
              <div className="line">
                <span className="sales-name">Nguyễn Nam</span> đã chốt đơn vào lúc 11h30 với ghi chú - khách đặt 1 hộp
              </div>
              <div className="line">
                <span className="sales-name">Nguyễn Nam</span> đã chốt đơn vào lúc 11h30 với ghi chú - khách đặt 1 hộp
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default All
