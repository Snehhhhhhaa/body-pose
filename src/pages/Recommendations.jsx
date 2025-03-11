import React from "react";
import "./Recommendations.css"; // Import CSS

const postureTips = [
  {
    title: "1. Maintain Proper Walking Posture",
    image: "/posture/walking.jpg",
    description: "While walking, keep your back straight, shoulders relaxed, and arms swinging naturally. Avoid slouching forward and ensure your head is aligned with your spine.",
  },
  {
    title: "2. Running with Correct Form",
    image: "/posture/running.jpg",
    description: "Keep a straight back, engage your core, and land softly on your feet. Proper running posture reduces the risk of injury and improves endurance.",
  },
  {
    title: "3. Sit Straight and Support Your Back",
    image: "/posture/sitting.jpg",
    description: "When sitting, keep both feet flat on the floor, your back straight, and use a chair with proper lumbar support to prevent slouching.",
  },
  {
    title: "4. Strengthening Exercises",
    image: "/posture/exercise.jpg",
    description: "Incorporate core exercises, stretches, and yoga poses like the plank, bridge, and cat-cow stretch to enhance posture and balance.",
  },
];

const suryaNamaskarPoses = [
  { name: "Pranamasana", image: "/poses/pranamasana.jpg" },
  { name: "Hasta Uttanasana", image: "/poses/hasta_uttanasana.jpg" },
  { name: "Padahastasana", image: "/poses/padahastasana.jpg" },
  { name: "Ashwa Sanchalanasana", image: "/poses/ashwa_sanchalanasana.jpg" },
  { name: "Dandasana", image: "/poses/dandasana.jpg" },
  { name: "Ashtanga Namaskara", image: "/poses/ashtanga_namaskara.jpg" },
  { name: "Bhujangasana", image: "/poses/bhujangasana.jpg" },
  { name: "Adho Mukha Svanasana", image: "/poses/adho_mukha_svanasana.jpg" },
];

const PersonalizedRecommendations = () => {
  return (
    <div className="recommendations-container">
      <header className="header">
        <h1>Improve Your Body Posture</h1>
        <p>Good posture is essential for a healthy body. Follow these recommendations to maintain a strong and well-aligned posture.</p>
      </header>

      <section className="tips-section">
        {postureTips.map((tip, index) => (
          <div key={index} className="tip">
            <img src={tip.image} alt={tip.title} />
            <div className="text">
              <h2>{tip.title}</h2>
              <p>{tip.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="surya-section">
        <h2>Surya Namaskar Poses</h2>
        <p>Practicing Surya Namaskar regularly helps improve flexibility, posture, and overall well-being.</p>

        <div className="poses-grid">
          {suryaNamaskarPoses.map((pose, index) => (
            <div key={index} className="pose-card">
              <img src={pose.image} alt={pose.name} />
              <p>{pose.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PersonalizedRecommendations;
