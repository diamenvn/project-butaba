import React, { Component } from 'react';
import Master from './master';
import '../css/dashboard.css';
import CanvasJS from '../../canvasjs.min'
var CanvasJSReact = require('../../canvasjs.react');

class Dashboard extends Component {
  render(){
    return(
      <div className="app">
        <Master>
          <QuickSelect />
          <Statistical />
        </Master>
      </div>

    );
  }
}

class Welcome extends Component {
  render() {
    return(
      <div className="bt-card-container pd-item col-5">
        <div className="bt-card-content">
          123123
        </div>
      </div>
    );
  }
}

class QuickSelect extends Component {
  render(){
    return(
      <div className="quick-select-menu col-10">
        <ul className="flex flex-around">
          <li>
            <a href="!#">
              <span className="wrapper-icon">
                <i className="fa fa-list-ul"></i>
              </span>
              <div className="text">Đơn hàng</div>
            </a>
          </li>

          <li>
            <a href="!#">
              <span className="wrapper-icon">
                <i className="fa fa-comments"></i>
              </span>
              <div className="text">Chat - Comment</div>
            </a>
          </li>

          <li>
            <a href="!#">
              <span className="wrapper-icon">
                <i className="fas fa-chart-area"></i>
              </span>
              <div className="text">Báo cáo</div>
            </a>
          </li>

          <li>
            <a href="!#">
              <span className="wrapper-icon">
                <i className="fa fa-user"></i>
              </span>
              <div className="text">Tài khoản</div>
            </a>
          </li>

          <li>
            <a href="!#">
              <span className="wrapper-icon">
                <i className="fas fa-cogs"></i>
              </span>
              <div className="text">Cấu hình</div>
            </a>
          </li>

          <li>
            <a href="!#">
              <span className="wrapper-icon">
                <i className="fa fa-list-ul"></i>
              </span>
              <div className="text">Đơn hàng</div>
            </a>
          </li>

          <li>
            <a href="!#">
              <span className="wrapper-icon">
                <i className="fa fa-list-ul"></i>
              </span>
              <div className="text">Đơn hàng</div>
            </a>
          </li>

          <li>
            <a href="!#">
              <span className="wrapper-icon">
                <i className="fa fa-list-ul"></i>
              </span>
              <div className="text">Đơn hàng</div>
            </a>
          </li>

          <li>
            <a href="!#">
              <span className="wrapper-icon">
                <i className="fa fa-list-ul"></i>
              </span>
              <div className="text">Đơn hàng</div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

class Statistical extends Component {
  constructor(props){
    super(props);
    this.state = {
      overview: true,
      sales: false,
      ratio: false,
      status: false
    }
  }

  render(){
    return(
      <div className="statistical">
        <div className="flex flex-around">
          <div className="parent-box col-6">
            <div className="box">
              <div className="box-header">
                <div className="panel-menu-tab">
                  <span onClick={e => this.onclick(1)} className={[this.state.overview && "active", "menu-tab-item"].join(' ')}>
                    Tổng quan
                  </span>
                  <span onClick={e => this.onclick(2)} className={[this.state.sales && "active", "menu-tab-item"].join(' ')}>
                    Doanh số
                  </span>
                  <span onClick={e => this.onclick(3)} className={[this.state.ratio && "active", "menu-tab-item"].join(' ')}>
                    Tỉ lệ chốt đơn
                  </span>
                  <span onClick={e => this.onclick(4)} className={[this.state.status && "active", "menu-tab-item"].join(' ')}>
                    Trạng thái đơn
                  </span>
                </div>
              </div>
              <div className="box-body">
                {this.state.overview && <Overview />}
                {this.state.sales && <Sales />}
                {this.state.ratio && <Ratio />}
                {this.state.status && <Status />}
              </div>
            </div>
          </div>

          <div className="parent-box col-4">
            <div className="box">
              <div className="box-header">
                <div className="panel-menu-tab">
                  123
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onclick(e) {
    this.setState({overview: false, sales: false, ratio: false, status: false});
    if (e === 1){
      this.setState({overview: true});
    }else if (e === 2) {
      this.setState({sales: true});
    }else if (e === 3) {
      this.setState({ratio: true});
    }else{
      this.setState({status: true});
    }
  };
}

class Overview extends Component {
  render(){
    return(
      <div id="overview" className="box-body-area">
        123
      </div>
    );
  }
}

class Sales extends Component {
  render(){
    return(
      <div id="sales" className="box-body-area">
        1234
      </div>
    );
  }
}

class Ratio extends Component {
  render(){
    return(
      <div id="ratio" className="box-body-area">
        12356
      </div>
    );
  }
}

class Status extends Component {
  render(){
    return(
      <div id="status" className="box-body-area">
        1234567
      </div>
    );
  }
}

export default Dashboard;
