import React, {Component} from 'react';

import vk from 'static/img/vk.svg';
import fb from 'static/img/fb.svg';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer__wrapper'>
          <div className='footer__container _left'>
            <div className='footer__text'>
              Developed by Dmitriy Baranov.
            </div>
            <div className='footer__text'>
              Designed by Maria Leonova.
            </div>
          </div>
          <div className='footer__container _right'>
            <div className='footer__social'>
              <object type='image/svg+xml' data={vk}>
                <img alt='vk' src={vk}/>
              </object>
            </div>
            <div className='footer__social'>
              <object type='image/svg+xml' data={fb}>
                <img alt='fb' src={fb}/>
              </object>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;