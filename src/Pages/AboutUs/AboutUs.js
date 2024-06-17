import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import String from "../../Assets/string.png";
import Anggota1 from "../../Assets/Anggota1.png";
import Anggota2 from "../../Assets/Anggota2.png";
import Anggota3 from "../../Assets/Anggota3.png";
import "./AboutUs.css";
import Footer from "../../components/Footer/Footer";

const AboutUs = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  return (
    <div className="App">
      <div className="Landing-Header">
        <h1>Wellnav</h1>
        <p>
          <Link to="/LandingPage">Home</Link>
        </p>
        <p className="Landing-AboutUs">
          <Link to="/AboutUs">About</Link>
        </p>
        <p>
          <Link to="/FAQ">FAQ</Link>
        </p>
      </div>
      {/* HEADER */}
      <div className="AboutUs-Section">
        <img
          src={String}
          alt="AboutUs-String"
          className="AboutUs-img left-img"
        />
        <h1 className="Center-Why">About Us</h1>
        <img
          src={String}
          alt="AboutUs-String"
          className="AboutUs-img right-img"
        />
      </div>
      {/* PENGENALAN ANGGOTA */}
      <div className="AboutUs-Content">
        <h1>Selamat datang di WellNav!</h1>
        <p>
          Halo teman-teman semua. Perkenalkan kami tiga mahasiswa <br />{" "}
          semester akhir dari Universitas Bina Nusantara,
          <br /> menciptakan WellNav sebagai solusi panduan nutrisi untuk
          membantu Anda <br />
          mencapai gaya hidup sehat dengan mudah.
        </p>
        <div className="AboutUs-Space"></div>
        <div className="AboutUs-Team">
          <h1>Mari Berkenalan</h1>
          <div className="AboutUs-Anggota">
            <div className="Anggota 1">
              <img src={Anggota1} alt="Anggota1" className="Anggota1-img" />
              <p>Stevani Natasya</p>
              <p>2440058025</p>
            </div>
            <div className="Anggota 2">
              <img src={Anggota2} alt="Anggota2" className="Anggota2-img" />
              <p>Azzah Husna Almy</p>
              <p>2440058025</p>
            </div>
            <div className="Anggota 3">
              <img src={Anggota3} alt="Anggota3" className="Anggota3-img" />
              <p>Jesen Yeoko</p>
              <p>2440058025</p>
            </div>
          </div>
        </div>
      </div>
      {/* ALASAN WELLNAV */}
      <div className="AboutUs-Reason">
        <h1> Alasan Membangun WellNav</h1>
        <p>
          Kami percaya bahwa kesadaran akan pentingnya pola makan yang sehat{" "}
          adalah <br /> kunci untuk menjaga kesehatan tubuh. Kami berharap untuk
          terus dapat mengembangkan WellNav <br />
          agar menjadi website terpercaya Anda dalam perjalanan menuju gaya
          hidup yang lebih sehat.
        </p>
      </div>
      {/* TERIMA KASIH*/}
      <div className="AboutUs-Thank">
        <h1>Terima Kasih</h1>
        <p>
          Terima kasih telah memilih WellNav sebagai panduan kesehatan Anda.{" "}
          <br />
          Jika Anda memiliki pertanyaan atau masukan, jangan ragu untuk
          menghubungi kami. <br />
          Kami siap membantu Anda setiap langkah dalam perjalanan kesehatan
          Anda.
        </p>
      </div>
      {/* FOOTER*/}
      <Footer />
    </div>
  );
};
export default AboutUs;
