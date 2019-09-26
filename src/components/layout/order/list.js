import React, { Component } from 'react';
import All from './all';

class List extends Component {
  render() {
    return (
      <All>
        <div className="main-content">
          <SortData></SortData>
          <div className="title-step">
            Danh sách thông tin khách hàng
          </div>
          <div className="area-list-order">
            <Table></Table>
          </div>
        </div>
      </All>
    );
  }
}

class SortData extends Component {
  render(){
    return(
      <div className="bt-area-sortdata">
        <div className="title-step">
          Lọc dữ liệu khách hàng
        </div>
        <div className="sortdata-content">
          <div className="flex flex-start sortdata-pd sortdata-height">
            <div className="sortdata-card col-2-5 center">
              <div className="sidebar-right-title">
                <i className="fa fa-calendar"></i> Thời gian
              </div>
              <div className="sortdata-card-body">
                <div className="row flex">
                  <div className="col-5 pd-10">
                    <input type="radio" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Xác nhận</span>
                  </div>
                  <div className="col-5 pd-10">
                    <input type="radio" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Tạo đơn</span>
                  </div>
                </div>
                <div className="row flex">
                  <div className="col-5 pd-10">
                    <input type="radio" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Chốt đơn</span>
                  </div>
                  <div className="col-5 pd-10">
                    <input type="radio" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Chuyển đi</span>
                  </div>
                </div>
                <div className="pd-horizontal-20 mr-top-10"><div className="line-break"></div></div>
                <div className="pd-horizontal-20 parent-input mr-top-10">
                  <input className="input" type="text" name="" value="" placeholder="Từ ngày"/>
                </div>
                <div className="pd-horizontal-20 parent-input mr-top-10">
                  <input className="input" type="text" name="" value="" placeholder="Đến ngày ngày"/>
                </div>
              </div>
            </div>

            <div className="sortdata-card col-3 center">
              <div className="sidebar-right-title">
                <i className="fa fa-calendar"></i> Trạng thái đơn
              </div>
              <div className="sortdata-card-body">
                <div className="flex flex-wrap col-10">
                  <div className="col-5 pd-10 box-sizing">
                    <input type="checkbox" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Khách hàng mới</span>
                  </div>
                  <div className="col-5 pd-10 box-sizing">
                    <input type="checkbox" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Khách hàng cũ</span>
                  </div>
                  <div className="col-5 pd-10 box-sizing">
                    <input type="checkbox" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Đã chốt</span>
                  </div>
                  <div className="col-5 pd-10 box-sizing">
                    <input type="checkbox" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Chưa chốt được</span>
                  </div>
                  <div className="col-5 pd-10 box-sizing">
                    <input type="checkbox" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Số mới</span>
                  </div>
                  <div className="col-5 pd-10 box-sizing">
                    <input type="checkbox" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Số cũ</span>
                  </div>
                  <div className="col-5 pd-10 box-sizing">
                    <input type="checkbox" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Số trùng</span>
                  </div>
                  <div className="col-5 pd-10 box-sizing">
                    <input type="checkbox" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Hẹn gọi lại</span>
                  </div>
                  <div className="col-5 pd-10 box-sizing">
                    <input type="checkbox" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Đơn nội thành</span>
                  </div>
                  <div className="col-5 pd-10 box-sizing">
                    <input type="checkbox" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Đã thu tiền</span>
                  </div>
                  <div className="col-5 pd-10 box-sizing">
                    <input type="checkbox" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Đang chuyển đi</span>
                  </div>
                  <div className="col-5 pd-10 box-sizing">
                    <input type="checkbox" name="sort-time" value="" />
                    <span className="pd-left-5 bold">Từ chối nhận</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="sortdata-card col-2">
              <div className="sidebar-right-title center">
                <i className="fa fa-calendar"></i> Vận chuyển
              </div>
              <div className="sortdata-card-body">
                <div className="col-10 pd-10 box-sizing">
                  <input type="checkbox" name="sort-time" value="" />
                  <span className="pd-left-5 bold">VN Post</span>
                </div>
                <div className="col-10 pd-10 box-sizing">
                  <input type="checkbox" name="sort-time" value="" />
                  <span className="pd-left-5 bold">Viettel Post</span>
                </div>
                <div className="col-10 pd-10 box-sizing">
                  <input type="checkbox" name="sort-time" value="" />
                  <span className="pd-left-5 bold">Giao hàng tiết kiệm</span>
                </div>
                <div className="col-10 pd-10 box-sizing">
                  <input type="checkbox" name="sort-time" value="" />
                  <span className="pd-left-5 bold">Giao hàng nhanh</span>
                </div>
                <div className="col-10 pd-10 box-sizing">
                  <input type="checkbox" name="sort-time" value="" />
                  <span className="pd-left-5 bold">Grab bike</span>
                </div>
              </div>
            </div>

            <div className="sortdata-card col-2-5 center">
              <div className="sidebar-right-title">
                <i className="fa fa-calendar"></i> NV Marketing
              </div>
              <div className="sortdata-card-body">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Table extends Component {
  render(){
    return(
      <table id="myTable" className="bt-table-list-order col-10 table table-dark">
        <thead>
            <tr>
                <th><input type="checkbox"/></th>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên KH</th>
                <th>Trùng đơn</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
                <th>Thông tin</th>
                <th>Thao tác</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td class="td1"><input type="checkbox"/></td>
            <td class="td1">1</td>
            <td class="td2">69666</td>
            <td class="td4">Dang thi linh</td>
            <td class="td6"></td>
            <td class="td7"><div class="btn-edit br-10">Đang chờ xử lý</div></td>
            <td class="td8">2019-09-08 20:12:04</td>
            <td class="td5"> <a target="_blank" href="https://butaba.com/orders/donhang/a449bd23d0c74cb70a20ea14c3b53c61" type="button" name="button"><div class="btn btn-success">Lấy thông tin</div></a> </td>
            <td class="td6"></td>
          </tr>
          <tr>
            <td class="td1"><input type="checkbox"/></td>
            <td class="td1">1</td>
            <td class="td2">69666</td>
            <td class="td4">Dang thi linh</td>
            <td class="td6"></td>
            <td class="td7"><div class="btn-edit br-10">Đang chờ xử lý</div></td>
            <td class="td8">2019-09-08 20:12:04</td>
            <td class="td5"> <a target="_blank" href="https://butaba.com/orders/donhang/a449bd23d0c74cb70a20ea14c3b53c61" type="button" name="button"><div class="btn btn-success">Lấy thông tin</div></a> </td>
            <td class="td6"></td>
          </tr>
          <tr>
            <td class="td1"><input type="checkbox"/></td>
            <td class="td1">1</td>
            <td class="td2">69666</td>
            <td class="td4">Dang thi linh</td>
            <td class="td6"></td>
            <td class="td7"><div class="btn-edit br-10">Đang chờ xử lý</div></td>
            <td class="td8">2019-09-08 20:12:04</td>
            <td class="td5"> <a target="_blank" href="https://butaba.com/orders/donhang/a449bd23d0c74cb70a20ea14c3b53c61" type="button" name="button"><div class="btn btn-success">Lấy thông tin</div></a> </td>
            <td class="td6"></td>
          </tr>
          <tr>
            <td class="td1"><input type="checkbox"/></td>
            <td class="td1">1</td>
            <td class="td2">69666</td>
            <td class="td4">Dang thi linh</td>
            <td class="td6"></td>
            <td class="td7"><div class="btn-edit br-10">Đang chờ xử lý</div></td>
            <td class="td8">2019-09-08 20:12:04</td>
            <td class="td5"> <a target="_blank" href="https://butaba.com/orders/donhang/a449bd23d0c74cb70a20ea14c3b53c61" type="button" name="button"><div class="btn btn-success">Lấy thông tin</div></a> </td>
            <td class="td6"></td>
          </tr>
          <tr>
            <td class="td1"><input type="checkbox"/></td>
            <td class="td1">1</td>
            <td class="td2">69666</td>
            <td class="td4">Dang thi linh</td>
            <td class="td6"></td>
            <td class="td7"><div class="btn-edit br-10">Đang chờ xử lý</div></td>
            <td class="td8">2019-09-08 20:12:04</td>
            <td class="td5"> <a target="_blank" href="https://butaba.com/orders/donhang/a449bd23d0c74cb70a20ea14c3b53c61" type="button" name="button"><div class="btn btn-success">Lấy thông tin</div></a> </td>
            <td class="td6"></td>
          </tr>
          <tr>
            <td class="td1"><input type="checkbox"/></td>
            <td class="td1">1</td>
            <td class="td2">69666</td>
            <td class="td4">Dang thi linh</td>
            <td class="td6"></td>
            <td class="td7"><div class="btn-edit br-10">Đang chờ xử lý</div></td>
            <td class="td8">2019-09-08 20:12:04</td>
            <td class="td5"> <a target="_blank" href="https://butaba.com/orders/donhang/a449bd23d0c74cb70a20ea14c3b53c61" type="button" name="button"><div class="btn btn-success">Lấy thông tin</div></a> </td>
            <td class="td6"></td>
          </tr>
          <tr>
            <td class="td1"><input type="checkbox"/></td>
            <td class="td1">1</td>
            <td class="td2">69666</td>
            <td class="td4">Dang thi linh</td>
            <td class="td6"></td>
            <td class="td7"><div class="btn-edit br-10">Đang chờ xử lý</div></td>
            <td class="td8">2019-09-08 20:12:04</td>
            <td class="td5"> <a target="_blank" href="https://butaba.com/orders/donhang/a449bd23d0c74cb70a20ea14c3b53c61" type="button" name="button"><div class="btn btn-success">Lấy thông tin</div></a> </td>
            <td class="td6"></td>
          </tr>
          <tr>
            <td class="td1"><input type="checkbox"/></td>
            <td class="td1">1</td>
            <td class="td2">69666</td>
            <td class="td4">Dang thi linh</td>
            <td class="td6"></td>
            <td class="td7"><div class="btn-edit br-10">Đang chờ xử lý</div></td>
            <td class="td8">2019-09-08 20:12:04</td>
            <td class="td5"> <a target="_blank" href="https://butaba.com/orders/donhang/a449bd23d0c74cb70a20ea14c3b53c61" type="button" name="button"><div class="btn btn-success">Lấy thông tin</div></a> </td>
            <td class="td6"></td>
          </tr>
          <tr>
            <td class="td1"><input type="checkbox"/></td>
            <td class="td1">1</td>
            <td class="td2">69666</td>
            <td class="td4">Dang thi linh</td>
            <td class="td6"></td>
            <td class="td7"><div class="btn-edit br-10">Đang chờ xử lý</div></td>
            <td class="td8">2019-09-08 20:12:04</td>
            <td class="td5"> <a target="_blank" href="https://butaba.com/orders/donhang/a449bd23d0c74cb70a20ea14c3b53c61" type="button" name="button"><div class="btn btn-success">Lấy thông tin</div></a> </td>
            <td class="td6"></td>
          </tr>
          <tr>
            <td class="td1"><input type="checkbox"/></td>
            <td class="td1">1</td>
            <td class="td2">69666</td>
            <td class="td4">Dang thi linh</td>
            <td class="td6"></td>
            <td class="td7"><div class="btn-edit br-10">Đang chờ xử lý</div></td>
            <td class="td8">2019-09-08 20:12:04</td>
            <td class="td5"> <a target="_blank" href="https://butaba.com/orders/donhang/a449bd23d0c74cb70a20ea14c3b53c61" type="button" name="button"><div class="btn btn-success">Lấy thông tin</div></a> </td>
            <td class="td6"></td>
          </tr>
          <tr>
            <td class="td1"><input type="checkbox"/></td>
            <td class="td1">1</td>
            <td class="td2">69666</td>
            <td class="td4">Dang thi linh</td>
            <td class="td6"></td>
            <td class="td7"><div class="btn-edit br-10">Đang chờ xử lý</div></td>
            <td class="td8">2019-09-08 20:12:04</td>
            <td class="td5"> <a target="_blank" href="https://butaba.com/orders/donhang/a449bd23d0c74cb70a20ea14c3b53c61" type="button" name="button"><div class="btn btn-success">Lấy thông tin</div></a> </td>
            <td class="td6"></td>
          </tr>
          <tr>
            <td class="td1"><input type="checkbox"/></td>
            <td class="td1">1</td>
            <td class="td2">69666</td>
            <td class="td4">Dang thi linh</td>
            <td class="td6"></td>
            <td class="td7"><div class="btn-edit br-10">Đang chờ xử lý</div></td>
            <td class="td8">2019-09-08 20:12:04</td>
            <td class="td5"> <a target="_blank" href="https://butaba.com/orders/donhang/a449bd23d0c74cb70a20ea14c3b53c61" type="button" name="button"><div class="btn btn-success">Lấy thông tin</div></a> </td>
            <td class="td6"></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default List
