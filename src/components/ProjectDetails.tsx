import styles from "./ProjectDetails.module.css";
import {
  Activity,
  Calendar,
  Clock,
  Dumbbell,
  Target,
  Scale,
  Pizza,
} from "lucide-react";

const ProjectDetails = () => {
  return (
    <div className={styles.projectDetails}>
      <div className={styles.container}>
        <h3 className={styles.title}>How ShapeShift Works</h3>

        <div className={styles.gridContainer}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Dumbbell className={styles.icon} />
              <h4 className={styles.cardTitle}>Intelligent Workout Design</h4>
            </div>
            <div className={styles.flowContainer}>
              <div className={styles.flowItem}>
                <div className={styles.flowBox}>
                  <Calendar size={16} className={styles.icon} />
                  <span>Weekly Availability</span>
                </div>
              </div>
              <div className={styles.flowItem}>
                <div className={styles.flowBox}>
                  <Clock size={16} className={styles.icon} />
                  <span>Time Per Session</span>
                </div>
              </div>
              <div className={styles.flowItem}>
                <div className={styles.flowBox}>
                  <Target size={16} className={styles.icon} />
                  <span>Training Goals</span>
                </div>
              </div>
              <div className={styles.flowItem}>
                <div className={styles.flowBox}>
                  <Activity size={16} className={styles.icon} />
                  <span>Training Distribution</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition Planning Flow */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Pizza className={styles.icon} />
              <h4 className={styles.cardTitle}>Precision Nutrition</h4>
            </div>
            <div className={styles.flowContainer}>
              <div className={styles.flowItem}>
                <div className={styles.flowBox}>
                  <Scale size={16} className={styles.icon} />
                  <span>Weight Goals & Rate</span>
                </div>
              </div>
              <div className={styles.flowItem}>
                <div className={styles.flowBox}>
                  <Activity size={16} className={styles.icon} />
                  <span>Activity Level</span>
                </div>
              </div>
              <div className={styles.flowItem}>
                <div className={styles.flowBox}>
                  <Pizza size={16} className={styles.icon} />
                  <span>Dietary Pattern</span>
                </div>
              </div>
              <div className={styles.flowItem}>
                <div className={styles.flowBox}>
                  <Target size={16} className={styles.icon} />
                  <span>Macro Fine-Tuning</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className={styles.description}>
          Using the Mifflin-St. Jeor equation for BMR calculation, combined with
          activity multipliers and your goals, ShapeShift creates precise
          nutrition and training plans. The system adapts workout volume,
          intensity, and macronutrient ratios based on your preferences while
          maintaining scientific validity.
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
