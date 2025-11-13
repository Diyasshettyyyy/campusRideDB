"use client"

import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import styles from "./homepage.module.css"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Welcome to CarPool</h1>
            <p>Share the ride, save the planet, save your money</p>
            <div className={styles.heroBtns}>
              <Link href="/booking" className={styles.btnPrimary}>
                Find a Ride
              </Link>
              <Link href="/offer-ride" className={styles.btnSecondary}>
                Offer a Ride
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.container}>
            <h2>Why Choose CarPool?</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💰</div>
                <h3>Save Money</h3>
                <p>Split costs with other passengers and reduce your transportation expenses.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌍</div>
                <h3>Eco-Friendly</h3>
                <p>Reduce your carbon footprint by sharing rides with others.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⏰</div>
                <h3>Convenient</h3>
                <p>Book rides easily and save time during your commute.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>👥</div>
                <h3>Community</h3>
                <p>Connect with like-minded people in your area.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.stats}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>2,500+</div>
                <div className={styles.statLabel}>Active Users</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>15,000+</div>
                <div className={styles.statLabel}>Completed Rides</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>$500K+</div>
                <div className={styles.statLabel}>Money Saved</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Ready to Carpool?</h2>
            <p>Join thousands of users saving money and the environment today.</p>
            <Link href="/booking" className={styles.btnPrimary}>
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
