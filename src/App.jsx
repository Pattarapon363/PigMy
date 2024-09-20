import React, { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);
  const [isNightMode, setIsNightMode] = useState(false); 

  const feedPig = (amount) => {
    setLevel((prevLevel) => {
      const newLevel = prevLevel + amount;
      return newLevel > 100 ? 100 : newLevel;
    });
  };

  const resetPig = () => {
    setLevel(0);
  };

  const getPigImage = () => {
    return level >= 100 ? "picture/mind.jpg" : "picture/หมูเด้ง.jpg";
  };

  const getPigSize = () => {
    return Math.min(100 + level * 2, 200);
  };

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: isNightMode ? "#333" : "#E0F7FA", 
      }}
    >
      <div
        style={{
          ...styles.innerContainer,
          backgroundColor: isNightMode ? "#555" : "white", 
        }}
      >
        {/* ปุ่มโหมดกลางคืน */}
        <button onClick={toggleNightMode} style={styles.nightModeButton}>
          {isNightMode ? "Day Mode" : "Night Mode"}
        </button>

        <h1
          style={{
            ...styles.text,
            color: isNightMode ? "white" : "black", 
          }}
        >
          Level {level}
        </h1>
        <p
          style={{
            ...styles.text,
            color: isNightMode ? "white" : "black", 
          }}
        >
          Feed the pig and increase its level!
        </p>

        <img
          src={getPigImage()}
          alt="Pig"
          style={{ width: `${getPigSize()}px`, height: `${getPigSize()}px` }}
        />

        <div style={styles.buttonContainer}>
          <button onClick={() => feedPig(5)} style={styles.button}>
            <img
              src="/picture/ไก่ทอด.png"
              alt="ไก่ทอด"
              style={styles.buttonImage}
            />
          </button>

          <button onClick={() => feedPig(10)} style={styles.button}>
            <img
              src="/picture/Pngbie.jpg"
              alt="ข้าวโพด"
              style={styles.buttonImage}
            />
          </button>

          <button onClick={() => feedPig(20)} style={styles.button}>
            <img
              src="/picture/watermelon.jpg"
              alt="แตงโม"
              style={styles.buttonImage}
            />
          </button>
        </div>

        <button onClick={resetPig} style={styles.restartButton}>
          Restart
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5vw",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "90vw",
    position: "relative", 
  },
  text: {
    fontSize: "2.5vw",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5vw",
    marginTop: "1.5vw",
  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  buttonImage: {
    width: "8vw",
  },
  restartButton: {
    marginTop: "1.5vw",
    padding: "0.8vw",
    fontSize: "2vw",
    cursor: "pointer",
  },
  nightModeButton: {
    position: "absolute", 
    top: "10px",
    right: "10px",
    padding: "0.5vw",
    fontSize: "1.5vw",
    cursor: "pointer",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};
