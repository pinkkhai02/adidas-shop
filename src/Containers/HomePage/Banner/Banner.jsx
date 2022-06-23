import React from 'react'
import './Banner.scss'

const Banner = () => {
  return (
    <section className="banner">
      <div className="component-waper">
          <div className="wapper-banner">
            <div  style={{width: "100%", height:"100%" }} className="player">
              <video width= "100%" height="100%" preload="auto" autoPlay loop playsInline muted >
                <source src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/sustainability-ss22-rfto-launch-hp-mh-d_qec44x.mp4 " type="video/mp4"/>
              </video>
            </div>
          </div>
          <div className="content-left">
            <div className="poster-content">
              <h2 className="title">RUN FOR THE<br/> OCEANS </h2>
              <div className="summary">Đã đến lúc xỏ giày chạy bộ và Chạy bộ vì đại <br/> dương. Mỗi giây phút đều quan trọng.</div>
              <div className="button">
               <div className="button-content">
                <div className="content-item">
                  <a href="#" className="content-item__link">TÌM HIỂU THÊM</a>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
               </div>
              </div>
            </div>
          </div>
      </div>
      <div className="component-waper ">
          <div className="wapper-banner">
            <div className="player">
              <img className="dynamic-img-container" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/football-fw22-arsenal-home-hp-mh-02-new-d_tcm337-885877.jpg" alt="" />
            </div>
          </div>
          <div className="content-left">
            <div className="poster-content">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/HP-MH-Logo-new-02-d_tcm337-886268.png" alt="" className="content-logo" />
              <h2 className="title">ARSENAL 22/23 <br/>HOME KIT</h2>
              <div className="button">
               <div className="button-content">
                <div className="content-item">
                  <a href="#" className="content-item__link">mua ngay
                  </a>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
               </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Banner