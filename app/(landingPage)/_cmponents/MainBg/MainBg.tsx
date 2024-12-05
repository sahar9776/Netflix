import styles from "./MainBg.module.css";

function MainBg() {
  return (
    <>
      <div className={styles.MainBg}>
        <div className={styles.ParentImageTag}>
          <img src="/assets/rootBg.jpg" alt="" />
        </div>

        <div className={styles.Content}>
          <div>
            <h6>Unlimited movies, TV shows, and more.</h6>
            <p>Starts At ₹149, Cancel Anytime</p>
          </div>
        </div>
      </div>

      {/* Input For Email   */}
      <div className={styles.Subscribe}>
        <h5>
          Ready To Watch? Enter Your Email To create or restart to membership.
        </h5>

        <div>
          <input type="text" placeholder="Your Email" />
          <button>Get Started</button>
        </div>

      </div>
    </>
  );
}

export default MainBg;
