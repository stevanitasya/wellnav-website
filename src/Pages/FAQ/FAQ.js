import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FAQd from "../../Assets/FAQd.png";
import "./FAQ.css";

const FAQ = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: "Apa itu aplikasi WellNav?",
      answer:
        "WellNav adalah aplikasi revolusioner yang membantu pengguna menuju gaya hidup sehat yang terpersonalisasi. Aplikasi ini menawarkan rekomendasi makanan berdasarkan kondisi kesehatan individu, preferensi makanan, dan tujuan kesehatan. WellNav juga menyediakan pelacakan nutrisi harian yang akurat, memungkinkan pengguna memantau asupan kalori, nutrisi, dan makronutrien. Dengan antarmuka yang intuitif dan mudah digunakan, WellNav dapat menyesuaikan dengan kebutuhan khusus seperti alergi makanan dan kondisi kesehatan tertentu, menjadi katalisator perubahan positif dalam pola makan dan kesehatan.",
    },
    {
      question:
        "Bagaimana WellNav menyesuaikan panduannya dengan profil kesehatan pengguna?",
      answer:
        "WellNav menyesuaikan panduan berdasarkan informasi kesehatan yang Anda berikan saat mendaftar dan memperbarui profil. Aplikasi ini menganalisis usia, kondisi kesehatan (seperti GERD, Asam Urat, dll), dan preferensi diet Anda. Berdasarkan analisis ini, WellNav memberikan rekomendasi makanan yang sesuai dengan kondisi kesehatan Anda, menawarkan daftar makanan yang perlu dihindari, melacak konsumsi harian, dan memberikan notifikasi serta pengingat untuk membantu Anda tetap pada jalur diet yang sehat.",
    },
    {
      question: "Bagaimana Pelacakan Nutrisi membantu pengguna?",
      answer:
        "Pelacakan Nutrisi di WellNav membantu pengguna dengan mencatat makanan yang dikonsumsi setiap hari dan menghitung jumlah kalori, karbohidrat, protein, dan lemak yang masuk ke tubuh. Fitur ini menyediakan grafik yang memvisualisasikan data nutrisi sehingga Anda bisa melihat bagaimana makanan yang Anda konsumsi berdampak pada kesehatan Anda. Selain itu, pelacakan nutrisi memberikan peringatan jika ada asupan makanan yang berlebihan atau dapat memperburuk kondisi kesehatan Anda, membantu Anda membuat pilihan yang lebih baik untuk mencapai tujuan kesehatan Anda.",
    },
    {
      question:
        "Apakah aplikasi WellNav dapat menghitung jumlah nutrisi untuk setiap makanan yang dikonsumsi?",
      answer:
        "WellNav memberikan fitur yang dapat mempermudah pengguna untuk menghitung jumlah nutrisi setiap hari nya seperti jumlah kalori, karbohidrat, protein, dan lemak. Informasi ini membantu pengguna membuat keputusan yang lebih baik tentang makanan yang dikonsumsi.",
    },
    {
      question:
        "Apakah WellNav dapat membantu saya melacak konsumsi air putih harian saya?",
      answer:
        "WellNav memiliki fitur Pelacakan Air Putih yang memungkinkan pengguna mencatat jumlah air yang dikonsumsi setiap hari. Fitur ini juga memberikan pengingat untuk memastikan pengguna tetap terhidrasi dengan baik sepanjang hari",
    },
  ];

  return (
    <div className="App">
      <div className="Landing-Header">
        <h1>Wellnav</h1>
        <p>
          <Link to="/LandingPage">Home</Link>
        </p>
        <p>
          <Link to="/AboutUs">About</Link>
        </p>
        <p className="Landing-FAQ">
          <Link to="/FAQ" className={isLandingPage ? "active" : ""}>
            FAQ
          </Link>
        </p>
      </div>
      <div className="FAQ-container">
        <div className="FAQ-header">
          <h1>Frequently Asked Questions (FAQs)</h1>
          <p>Apapun yang anda ingin ketahui mengenai Wellnav</p>
        </div>
        <div className="FAQ-section">
          {faqs.map((faq, index) => (
            <div
              className={`FAQ-item ${
                activeIndex === index ? "expanded" : "collapsed"
              }`}
              key={index}
            >
              <div className="FAQ-question" onClick={() => toggleAnswer(index)}>
                <span>{faq.question}</span>
                <span
                  className={`FAQ-icon ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <img src={FAQd} alt="FAQd" className="FAQd-img" />
                </span>
              </div>
              <p className="FAQ-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="FAQ-footer">
          <p>Masih memiliki pertanyaan?</p>
        </div>
        <div className="FAQ-email">
          <p>contact@gmail.com</p>
          <button>Copy</button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
