import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
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
  const userId = "666fde9ca7d9380a078106a0"; // Replace with actual user ID from your authentication system

  useEffect(() => {
    axios.get(`http://localhost:5000/api/watertrackings/${userId}`)
      .then(response => {
        setWaterIntakes(response.data);
        const total = response.data.reduce((acc, intake) => acc + intake.amount, 0);
        setTotalIntake(total);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const intakeAmount = parseInt(amount);

    const newIntake = {
      userId,
      amount: intakeAmount,
      date: new Date().toISOString(), // Ensure date is in ISO string format
    };
 
    axios.post('http://localhost:5000/api/watertrackings', newIntake)
      .then(response => {
        setWaterIntakes([...waterIntakes, { amount: intakeAmount, date: new Date().toISOString() }]);
        setTotalIntake(totalIntake + intakeAmount);
        setAmount("");
        setTime("");
      })
      .catch(error => console.error('Error posting data:', error));
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
                  <button type="submit">Tambah</button>
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
