import React from 'react';
import '../../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footerElement" >
        <h3>Наши контакты</h3>
        <hr />
        <br />
        <p>
          Республика Казахстан
          <br />
          050002, Алматы
          <br />
          ул. Жибек Жолы д.60
          <br />
          ТОО «Охранное Агенство»
          <br />
          «АКЖАН-Security»
          <br />
          РНН: 600700628186
          <br />
          тел.: +7(727)3903154,
          <br />
          &emsp;&emsp; +7(727)2735234
          <br />
          <p>
          e-mail: info@akjansecurity.kz
          </p>
        </p>
      </div>

      <iframe
        className="footerElement googleMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.4890736519174!2d76.94718115070137!3d43.26212877903425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e9aac532fab%3A0xa1460920566a53d5!2sZhibek+Zholy+St+60%2C+Almaty!5e0!3m2!1sen!2skz!4v1512443044943"
        allowFullScreen
      />
    </div>
  );
}

export default Footer;
