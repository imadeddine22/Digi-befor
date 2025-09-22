import React from 'react';
import { Link } from 'react-router-dom';

const Services1 = () => {

    const chooseContent = [
        {img:'/assets/img/service_item_bg.jpg', title:'Brand design identity', content:'In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey. Our team has a successful'},
        {img:'/assets/img/service_item_bg.jpg', title:'web app development', content:'In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey. Our team has a successful'},
        {img:'/assets/img/service_item_bg.jpg', title:'UI/UX Design', content:'In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey. Our team has a successful'},
        {img:'/assets/img/service_item_bg.jpg', title:'SEO & Analytics', content:'In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey. Our team has a successful'},
      ]; 

    return (
        <section className="cs_heading_bg">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_left">
              <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                Services<span className="cs_shape_right"></span>
              </p>
              <h2 className="cs_fs_48 cs_white_color cs_mb_21 wow fadeInUp">Innovation Solutions</h2>
              <p className="cs_section_heading_text cs_white_color_2 mb-0 wow fadeInUp">Our comprehensive suite of digital marketing services is designed to <br/> elevate your brand's visibility. </p>
            </div>
            <div className="cs_section_heading_right wow fadeInRight">
              <Link to="/service" className="cs_btn cs_style_1 cs_fs_16 cs_bold text-uppercase"><span>VIEW ALL SERVICES</span></Link>
            </div>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="cs_service_item_wrapper">
          {chooseContent.map((item, i) => (
            <div key={i} className="cs_service_item cs_style_1 position-relative wow fadeInDown">
              <div className="cs_service_content">
                <h3 className="cs_service_title cs_fs_24 cs_white_color mb-0">
                  <Link to="/service/service-details" aria-label="Click to view service details">{item.title}</Link>
                </h3>
                <p className="cs_service_subtitle cs_medium cs_white_color_2 mb-0">{item.content}</p>
                <Link to="/service/service-details" aria-label="Click to view service details" className="cs_service_btn cs_center cs_radius_50">
                <img src="/assets/img/icons/arrow_right.svg" alt="Arrow right" />
                </Link>
              </div>
              <div className="cs_service_item_bg position-absolute">
                <img src={item.img} alt="img" />
              </div>
            </div>
            ))}

          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Services1;