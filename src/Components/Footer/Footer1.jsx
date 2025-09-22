import React from 'react';
import { Link } from 'react-router-dom';

const Footer1 = () => {
    return (
<footer className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg position-relative" data-src="assets/img/footer_bg_1.jpg">
      <div className="cs_footer_top position-relative z-1">
        <div className="container-fluid">
          <div className="cs_footer_content">
            <div className="cs_footer_top_content">
              <div className="wow fadeInLeft">Let’s talk!</div>
              <Link to="/contact" className="cs_footer_top_img cs_radius_50 wow zoomIn">
                <img src="/assets/img/footer_img_icon.png" alt="Link image" />
                <span className="cs_center">
                <img src="/assets/img/icons/arrow_right_2.svg" alt="Arrow icon" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_main_footer cs_white_color_2 position-relative z-1">
        <div className="container-fluid">
          <div className="cs_footer_content cs_footer_row">
            <div className="cs_footer_widget cs_footer_text">
              <div className="cs_text_widget">
                <img src="/assets/img/footer_logo.svg" alt="Logo" className="cs_mb_30 wow zoomIn" />
                <p className="cs_mb_37">Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis</p>
              </div>
              <div className="cs_social_btns cs_style_1">
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-facebook"></i>
                </a>
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
            <div className="cs_footer_links_wrapper">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">Quick Links</h2>
                <ul className="cs_footer_menu cs_mp_0">
                  <li><Link to="/about" aria-label="Page link">About Digitom</Link></li>
                  <li><Link to="/service" aria-label="Page link">Our Services</Link></li>
                  <li><Link to="/blog" aria-label="Page link">Our Blogs</Link></li>
                  <li><Link to="/contact" aria-label="Page link">Contact Us</Link></li>
                </ul>
              </div>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">Contact Us</h2>
                <p className="cs_mb_24">4517 Washington. mg Manchester, Kentucky 39495</p>
                <h3 className="cs_fs_16 cs_white_color cs_mb_10">Phone Call:</h3>
                <ul className="cs_footer_contact_list cs_mp_0">
                  <li>
                    <a href="tel:20866660112" aria-label="Phone call link">208-6666-0112</a>
                  </li>
                  <li>
                    <a href="tel:30855550113" aria-label="Phone call link">308-5555-0113</a>
                  </li>
                </ul>
              </div>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">Newsletter</h2>
                <p className="cs_mb_27">Sign up to seargin weekly newsletter to get the latest updates.</p>
                <div className="cs_footer_newsletter cs_style_1">
                  <form action="#" className="cs_footer_newsletter_form cs_radius_8">
                    <input type="text" placeholder="Enter Email Address" />
                    <button aria-label="Subscribe button" className="cs_btn cs_style_1 cs_center">
                    <span><i className="bi bi-send"></i></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_white_color_2 position-relative z-1">
        <div className="container-fluid">
          <div className="cs_footer_bottom_in cs_footer_content">
            <div className="cs_footer_copyright">&copy; All Copyright 2025 by <a href="#" aria-label="Site link">Digitom</a></div>
            <div>
              <ul className="cs_footer_menu cs_mp_0">
                <li><a href="#" aria-label="Footer link">Terms & Conditions</a></li>
                <li><a href="#" aria-label="Footer link">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_shape_1 position-absolute">
        <img src="/assets/img/footer_shape_1.svg" alt="Shape image" />
      </div>
      <div className="cs_footer_shape_2 position-absolute">
        <img src="/assets/img/footer_shape_1.svg" alt="Shape image" />
      </div>
    </footer>
    );
};

export default Footer1;