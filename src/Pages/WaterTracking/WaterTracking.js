import React, { useState, useEffect } from "react";
import axios from "axios";
import CollapseSideBar from "../../components/CollapseSideBar/CollapseSideBar";
import Header from "../../components/Header/Header";
import Air from "../../Assets/Air.png";
import "./WaterTracking.css";

const WaterTracking = () => {
  const [waterIntakes, setWaterIntakes] = useState([]);
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("");
  const [totalIntake, setTotalIntake] = useState(0);
  const dailyTarget = 2000;
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/watertrackings/today`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setWaterIntakes(response.data.waterLogs);
        setTotalIntake(response.data.totalAmount);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [backendUrl, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const intakeAmount = parseInt(amount);

    const newIntake = {
      amount: intakeAmount,
      date: new Date().toISOString(), // Ensure date is in ISO string format
    };

    axios
      .post(`${backendUrl}/api/watertrackings`, newIntake, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setWaterIntakes([
          ...waterIntakes,
          { amount: intakeAmount, date: new Date().toISOString() },
        ]);
        setTotalIntake(totalIntake + intakeAmount);
        setAmount("");
        setTime("");
      })
      .catch((error) => console.error("Error posting data:", error));
  };

  return (
    <div className="App">
      <CollapseSideBar />
      <div className="Water-Header">
        <Header />
        <div className="Water-Container">
          <div className="daily-target">
            <p>Target Hidrasi </p>
            <h3>{dailyTarget} ml</h3>
          </div>

          <div className="Water-content">
            <div className="left-section">
              <div className="form-section">
                <form onSubmit={handleSubmit}>
                  <label className="Amount">
                    Jumlah air (ml) :
                    <input
                      className="no-arrows"
                      type="number"
                      value={amount}
                      placeholder="Masukkan Jumlah Air"
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    Waktu
                    <div className="Waktu">
                      <p>:</p>
                    </div>
                    <input
                      className="custom-time"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    <button type="submit">Tambah</button>
                  </label>
                </form>
              </div>
              <img src={Air} alt="Air" className="Air-img" />
            </div>
            <div className="right-section">
              <div className="water-glass-section">
                <div className="water-glass">
                  <div
                    className="water-level"
                    style={{
                      height: `${Math.min(
                        (totalIntake / dailyTarget) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>

                <div className="total-intake">
                  <p>Total</p> <h3>{totalIntake} ml</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="log-section">
            <div className="log-water">
              <h3>Minuman Hari ini</h3>
              <table>
                <thead>
                  <tr>
                    <th>Jumlah (ml)</th>
                    <th>Waktu</th>
                  </tr>
                </thead>
                <tbody>
                  {waterIntakes.map((intake, index) => (
                    <tr key={index}>
                      <td>{intake.amount}</td>
                      <td>{new Date(intake.date).toLocaleTimeString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {totalIntake >= dailyTarget && (
              <p className="congratulations">
                Selamat!! Anda sudah mencapai target harian
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterTracking;
