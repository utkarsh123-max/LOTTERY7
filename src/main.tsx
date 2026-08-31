import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ChevronDown,
  Gamepad2,
  Gift,
  LogIn,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  UserPlus,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import "./styles.css";

type Game = {
  name: string;
  category: string;
  icon: string;
  color: string;
  players: string;
};

const games: Game[] = [
  { name: "Neon Rush", category: "Arcade", icon: "⚡", color: "blue", players: "12.8K" },
  { name: "Pixel Quest", category: "Adventure", icon: "🧩", color: "violet", players: "9.4K" },
  { name: "Sky Dash", category: "Action", icon: "🚀", color: "orange", players: "8.1K" },
  { name: "Cyber Cards", category: "Strategy", icon: "🃏", color: "pink", players: "6.7K" },
];

const faqs = [
  ["What is LOTTERY7?", "Lottery 7 is a popular betting game where players select 7 numbers from a designated pool. If your selected numbers match the drawn numbers, you win based on the prize tier"],
  ["Can I Earn Real Money?", "Yes. This Game is designed for Real Money gameplay and uses money only for the on-site experience."],
  ["Can I use it on mobile?", "Yes. The layout is responsive and designed for phones, tablets and desktop screens."],
  ["Can Login and Register be connected later?", "Yes. The buttons are ready to connect to your own authentication pages or backend."],
];

function App() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(null);
  const [auth, setAuth] = useState<"login" | "register" | null>(null);
  const [footerModal, setFooterModal] = useState<string | null>(null);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div className="app">
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />
      <div className="bg-grid" />

      <header className="navbar">
        <div className="nav">
          <button className="brand" onClick={() => go("home")} type="button">
            <img src="/logo.png" alt="LOTTERY7 logo" />
            <span>
              <b>LOTTERY7</b>
              <small>REAL GAMING HUB</small>
            </span>
          </button>

          <nav className={menu ? "links open" : "links"}>
            {["home", "games", "features", "about", "faq"].map((item) => (
              <button key={item} onClick={() => go(item)} type="button">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <button
  className="login-btn"
  onClick={() => window.location.href = "https://www.lottery7qq.com/#/register?invitationCode=7635119395225"}
  type="button"
>
  <LogIn size={17} />
  Login
</button>
            <button
  className="register-btn"
  onClick={() => window.location.href = "https://www.lottery7qq.com/#/register?invitationCode=7635119395225"}
  type="button"
>
  <UserPlus size={17} />
  Register
</button>
            <button
              className="menu-btn"
              onClick={() => setMenu((v) => !v)}
              type="button"
              aria-label="Toggle navigation"
            >
              {menu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero wrap">
          <div className="hero-copy"> 

  <motion.div 
    className="eyebrow" 
    initial={{ opacity: 0, y: 12 }} 
    animate={{ opacity: 1, y: 0 }} 
  > 
    <Sparkles size={15} /> 
    PLAY AND EARN REAL CASH 
  </motion.div>

  <div className="lottery7-image">
    <img src="/lottery7-game.png" alt="Lottery 7 Gaming" />
  </div>

  <motion.h1
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
  >
    Lottery 7
  </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
            >
              Join Lottery 7 and start winning big with exciting games and fast payouts. Sign up now and enjoy your free bonus in your wallet instantly!
            </motion.p>

            <div className="hero-actions">
  <button
    className="primary"
     onClick={() => window.location.href = "https://www.lottery7qq.com/#/register?invitationCode=7635119395225"}
    type="button"
  >
    <UserPlus size={17} />
    Register
    <ArrowRight size={17} />
  </button>

  <button
    className="secondary"
    onClick={() => window.location.href = "https://www.lottery7qq.com/#/register?invitationCode=7635119395225"}
    type="button"
  >
    <LogIn size={17} />
    Login
  </button>
</div>
            <div className="trust-row">
              <span><ShieldCheck size={17} />Earn Real Cash</span>
              <span><Zap size={17} /> Fast experience</span>
              <span><Gamepad2 size={17} /> Casual games</span>
            </div>
          </div>

          <motion.div
            className="hero-card-wrap"
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-card">
              <div className="card-top">
                <span>LOTTERY7</span>
                <span className="online"><i /> ONLINE</span>
              </div>

              <div className="hero-art">
                <div className="art-glow" />
                <div className="floating-badge badge-one"><Gift size={14} /> +250 XP</div>
                <div className="floating-badge badge-two"><Trophy size={14} /> TOP SCORE</div>
                <div className="floating-badge badge-three"><Star size={14} /> 4.9</div>
                <img src="/logo.png" alt="DLOTTERY7" />
                <div className="art-caption">
                  <small>WELCOME TO</small>
                  <strong>LOTTERY7</strong>
                  <span>REAL GAMING EXPERIENCE</span>
                </div>
              </div>

              <div className="score-bar">
                <div><small>PLAYER SCORE</small><b>24,680</b></div>
                <div><small>LEVEL</small><b>18</b></div>
                <div><small>STREAK</small><b>07 🔥</b></div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="quick-strip wrap">
          <div><Gift size={20} /><span><b>Daily Challenges</b> — earn VIP XP and unlock achievements</span></div>
          <button onClick={() => setAuth("register")} type="button">Join Free <ArrowRight size={16} /></button>
        </section>

        <section id="features" className="wrap section">
          <div className="feature-shell">
            <div className="feature-copy">
              <span className="eyebrow">WHY LOTTERY7</span>
              <h2>Built for a <span>better</span> gaming experience</h2>
              <p>
                A polished interface, smooth motion and clear navigation make
                the Real feel like a real modern gaming product.
              </p>
              <button
  className="primary"
  onClick={() => window.location.href = "https://www.lottery7qq.com/#/register?invitationCode=7635119395225"}
  type="button"
>
  Get Started <ArrowRight size={17} />
</button>
            </div>

            <div className="feature-grid">
              {[
                [Gamepad2, "Instant Play", "Simple game discovery with a clean, distraction-free interface."],
                [Trophy, "Achievements", "Track progress, personal bests and non-monetary XP."],
                [Zap, "Smooth Motion", "Lightweight transitions and interactions for a premium feel."],
                [ShieldCheck, "Player First", "Responsive design with clear, accessible navigation."],
              ].map(([Icon, title, text]) => {
                const FeatureIcon = Icon as typeof Gamepad2;
                return (
                  <motion.div className="feature-card" key={String(title)} whileHover={{ y: -6 }}>
                    <div className="feature-icon"><FeatureIcon size={21} /></div>
                    <h3>{String(title)}</h3>
                    <p>{String(text)}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="wrap section">
          <div className="about-shell">
            <div className="about-visual">
              <div className="ring ring-a" />
              <div className="ring ring-b" />
              <div className="logo-card">
                <img src="/logo.png" alt="DLOTTERY7 logo" />
                <strong>DLOTTERY7</strong>
                <small>REAL GAMING HUB</small>
              </div>
              <span className="mini-tag tag-a">FREE PLAY</span>
              <span className="mini-tag tag-b">24/7 ACCESS</span>
            </div>

            <div className="about-copy">
              <span className="eyebrow">ABOUT THE PLATFORM</span>
              <h2>Simple outside.<br /><span>Powerful inside</span></h2>
              <p>
                LOTTERY7 is presented as a Real gaming landing-page concept
                for a better gaming experience. The structure is ready to connect to your
                own games, authentication system, profiles and backend later.
              </p>

              <div className="numbers">
                <div><b>04+</b><small>Game concepts</small></div>
                <div><b>24/7</b><small>Free access</small></div>
                <div><b>100%</b><small>Real money Game</small></div>
              </div>
            </div>
          </div>
        </section>
        <section id="gaming-guide" className="wrap section seoContent">
  <div className="seoIntro">
    <span className="eyebrow">LOTTERY7 GAMING GUIDE</span>

    <h2>
      Discover a better
      <span> Real money gaming experience</span>
    </h2>

    <p>
      DLOTTERY7 is a modern real money gaming platform created for
      players who enjoy betting games, challenges, achievements and
      score-based progression in one place. it’s a gateway to high-quality casino games and on-the-go entertainment. Available through mobile and online formats, it caters to users looking for fun, fast, and real-money games in one place
    </p>

    <p>
      Whether you are using a smartphone, tablet or desktop, DLOTTERY7
      provides a clean and responsive interface designed to make
      discovering games simple and enjoyable.
    </p>
  </div>

  <div className="seoGrid">

    <article className="seoCard">
      <span className="seoIcon">🎮</span>
      <h3>Free-to-Play Games</h3>
      <p>
        Explore casual gaming experiences designed for quick sessions,
        easy replayability and enjoyable gameplay.
      </p>
    </article>

    <article className="seoCard">
      <span className="seoIcon">🏆</span>
      <h3>Scores & Achievements</h3>
      <p>
        Improve your personal scores, complete challenges and unlock
        achievements as you progress through the platform.
      </p>
    </article>

    <article className="seoCard">
      <span className="seoIcon">📱</span>
      <h3>Mobile Gaming</h3>
      <p>
        DLOTTERY7 is designed to work smoothly across smartphones,
        tablets, laptops and desktop screens.
      </p>
    </article>

    <article className="seoCard">
      <span className="seoIcon">⚡</span>
      <h3>Fast Experience</h3>
      <p>
        Lightweight layouts, simple navigation and responsive
        interactions keep the gaming experience easy to explore.
      </p>
    </article>

  
  </div>

  <div className="seoArticle">

    <h2>What is DLOTTERY7?</h2>

    <p>
      DLOTTERY7 is a free gaming hub that brings casual games,
      challenges, achievements and score-based progression together
      in one modern platform.
    </p>

    <p>
      The platform focuses on simple navigation and an accessible
      interface so players can quickly discover different gaming
      experiences without complicated menus.
    </p>

    <h2>Explore Different Game Genres</h2>

    <p>
      The DLOTTERY7 game library can include multiple categories,
      giving players different types of experiences to explore.
    </p>

    <ul>
      <li>🎰 Casino Games like Roulette, Blackjack, and Baccarat</li>
      <li>🎯 Mini-Games including Crash, Aviator, Plinko, and Hilo</li>
      <li>🎣 Fishing Games such as Golden Trawler and Fish Hunter</li>
      <li>🏆 Challenge games with objectives and achievements</li>
      <li>⚽ Sports Betting covering Cricket, Football, and Tennis</li>
    </ul>

    <h2>Play on Any Screen</h2>

    <p>
      DLOTTERY7 uses a responsive design approach, allowing the
      interface to adapt to smartphones, tablets and desktop
      computers. Players can browse the platform comfortably across
      different screen sizes.
    </p>

    <h2>Points, Challenges and Achievements</h2>

    <p>
      Players can work toward higher scores, complete challenges and
      collect non-monetary achievements. These progression features
      are designed to make free gameplay more engaging while keeping
      the experience focused on entertainment.
    </p>

    <h2>How to Get Started</h2>

    <ol>
      <li>Visit the DLOTTERY7 platform.</li>
      <li>Explore the available game categories.</li>
      <li>Choose a game that interests you.</li>
      <li>Start playing and complete available challenges.</li>
      <li>Track your scores and improve your personal best.</li>
    </ol>

    <h2>Payment Method & Cashout</h2>

    <p>
      Depositing and withdrawing on Lottery 7 is refreshingly quick and user-friendly. Once logged in, players can access a variety of trusted payment options that are built for speed and simplicity.
    </p>
    <h3>Payment Methods</h3>
    <ol>
<li>UPI</li>
<li>Paytm</li>
<li>Google Pay</li>
<li>PhonePe</li>
<li>Bank Transfer</li>
</ol>

<h2>Withdrawing Your Winning</h2>
<ol>
  <li>Navigate to the Wallet section after logging in</li>
  <li>Select Withdraw and enter your preferred payout method</li>
  <li>Input the amount you wish to withdraw</li>
  <li>Confirm and submit — most payments are processed swiftly within hours</li>
</ol>

<h2>Earning through referals</h2>
<p>
  Want to boost your balance without playing a single game? The Referral Program on Lottery 7 rewards players for spreading the word.

You’ll receive a unique referral code once you register. Share it with your contacts, and when someone signs up and starts playing using your code, you earn rewards — usually in the form of commission or bonus cash. It’s passive income at its most fun.

Top performers often receive additional perks like bonus spins or exclusive invite-only tournaments.
</p>

<h2>VIP and Loyalty benefits</h2>
<p>Players can unlock exclusive rewards by reaching higher levels and completing challenges. The VIP-style rewards system recognizes consistent engagement and gives players additional perks as they progress</p>
<ol>
  <li>Increased deposit/withdrawal limits</li>
  <li>Early access to new game releases</li>
  <li>Personalized customer service</li>
  <li>Exclusive tournaments and challenges</li>
</ol>
<p>There are usually multiple VIP tiers, each unlocking better rewards and giving long-term players a sense of progress beyond just gaming wins.</p>

<h2>Popular Games On Lottery7</h2>
<p>DLOTTERY7 offers a diverse collection of games, giving players plenty of options to explore. Whether you prefer quick casual challenges, strategy-based experiences, or fast-paced action, there’s something for every type of player</p>

<h3>Casino Games</h3>
<ol>
<li>Roulette: Bet on numbers, colors, and even odd/even — excitement guaranteed</li>
<li>Blackjack: Play your cards right and beat the dealer to 21</li>
</ol>
<h3>Mini Games</h3>
<p>Fast-paced and perfect for quick wins</p>
<ol>
  <li>Crash: Pull out before the line “crashes” to lock in profit</li>
  <li>Aviator: Watch the plane climb — cash out before it flies too far</li>
  <li>Plinko: Drop a ball and win based on where it lands — all luck, all fun</li>
</ol>

<h2>How to Register and Login</h2>
<p>Getting started with Lottery 7 is simple. Follow these quick steps:</p>
<ol>
  <li>Visit the official Lottery 7 website or open the app</li>
  <li>Click on the “Register” button on the homepage</li>
  <li>Fill in your mobile number and verify it via OTP</li>
  <li>Create a strong password and a unique username</li>
  <li>Hit Sign Up and you’re in!</li>
</ol>

<p>Returning players can use the Lottery 7 login option to access their accounts instantly. If you forget your password, use the “Forgot Password” tool for a quick reset via mobile verification</p>

  </div>
</section>

        <section id="faq" className="wrap section faq-section">
          <div className="center-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Questions, <span>answered.</span></h2>
          </div>

          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div className={`faq-item ${faq === index ? "active" : ""}`} key={question}>
                <button onClick={() => setFaq(faq === index ? null : index)} type="button">
                  <span>{question}</span>
                  <motion.span animate={{ rotate: faq === index ? 180 : 0 }}>
                    <ChevronDown size={19} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {faq === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p>{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        <section className="wrap section">
  <motion.div
    className="tashan-feature"
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="tashan-bg-glow" />

    <div className="tashan-image-wrap">
      <div className="tashan-image-card">
  <img
    src="/tashan-win.jpeg"
    alt="Tashan Win"
    className="tashan-game-image"
  />
  <div className="tashan-light" />
</div>
</div>

    <div className="tashan-feature-content">
      <span className="eyebrow">FEATURED EXPERIENCE</span>

      <h2>
        Tashan <span>Win</span>
      </h2>

      <p>
        Create your free account and explore the experience.
      </p>

      <button
        className="tashan-register"
        type="button"
        onClick={() => window.location.href = "http://www.dgclub.cc/#/register?invitationCode=546251860261"}
      >
        <UserPlus size={18} />
        Register Now
        <ArrowRight size={18} />
      </button>

      <small>Get 3X extra cash bonus</small>
    </div>
  </motion.div>
</section>
      </main>

     <footer className="lottery-footer">
  <div className="lottery-footer-links">
    <button
  type="button"
  onClick={() => setFooterModal("contact")}
>
  Contact Us
</button>
    <button
  type="button"
  onClick={() => setFooterModal("referral")}
>
  Referral Guide
</button>
    <button
  type="button"
  onClick={() => setFooterModal("agent")}
>
  Agent Guide
</button>
    <button
  type="button"
  onClick={() => setFooterModal("terms")}
>
  Terms & Conditions
</button>
  </div>

  <div className="lottery-footer-copy">
    © 2026 <a href="#home">LOTTERY 7</a>
  </div>
</footer>
      <AnimatePresence>
        {auth && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAuth(null)}
          >
            <motion.div
              className="auth-modal"
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
  className="primary"
  onClick={() => window.location.href = "https://www.lottery7qq.com/#/register?invitationCode=7635119395225"}
  type="button"
>
  Get Started <ArrowRight size={17} />
</button>
              <div className="modal-logo"><img src="/logo.png" alt="" /></div>
              <span className="eyebrow">{auth === "login" ? "WELCOME BACK" : "JOIN DLOTTERY7"}</span>
              <h2>{auth === "login" ? "Login to your account." : "Create your free account."}</h2>
              <p>This is a front-end. Connect these fields to your own authentication system.</p>
              <input placeholder="Username or email" />
              <input placeholder="Password" type="password" />
              {auth === "register" && <input placeholder="Confirm password" type="password" />}
              <button className="primary full" onClick={() => setAuth(null)} type="button">
                {auth === "login" ? "Continue" : "Create Account"}
                <ArrowRight size={17} />
              </button>
              <small className="note">Play real money game and earn real cash · real-money transactions</small>
            </motion.div>
          </motion.div>
        )}
        
      </AnimatePresence>
        <AnimatePresence>
  {/* CONTACT */}
  {footerModal === "contact" && (
    <motion.div
      className="footer-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setFooterModal(null)}
    >
      <motion.div
        className="footer-modal"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="footer-modal-close"
          onClick={() => setFooterModal(null)}
          type="button"
        >
          <X size={20} />
        </button>

        <span className="eyebrow">CONTACT US</span>

        <h2>Get in touch.</h2>

        <p>
          For updates, announcements and support,
          connect with us through our official Telegram channel.
        </p>

        <a
          className="telegram-contact"
          href="https://t.me/bigwin7380"
          target="_blank"
          rel="noreferrer"
        >
          Join Telegram
          <ArrowRight size={17} />
        </a>
      </motion.div>
    </motion.div>
  )}

  {/* REFERRAL GUIDE */}
  {footerModal === "referral" && (
    <motion.div
      className="footer-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setFooterModal(null)}
    >
      <motion.div
        className="footer-modal"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="footer-modal-close"
          onClick={() => setFooterModal(null)}
          type="button"
        >
          <X size={20} />
        </button>

        <span className="eyebrow">REFERRAL GUIDE</span>

        <h2>Invite Play Earn</h2>

        <p>
           Welcome to the Lottery 7 Referral Guide — your go-to resource for understanding how to earn rewards by inviting friends to join the fun on Lottery 7. Whether you’re a seasoned player or just getting started, our referral program is a simple and rewarding way to boost your earnings without even placing a bet!
        </p>
        <h2>What is the Referral Program?</h2>
        <p>The Lottery 7 Referral Program lets you earn bonuses every time someone joins the platform using your unique referral link. When your friends sign up and start playing, you get rewarded</p>
        <h2>How it works</h2>
        <p>Follow these three easy steps to start referring and earning:</p>
        <h3>1. Get Your Referral Link</h3>
        <ol>
          <li>Log in to your account on Lottery 7</li>
          <li>Go to the Referral section in your dashboard</li>
          <li>Copy your unique referral link</li>

        </ol>
        <h3>2. Share Your Link</h3>
        <ol>
          <li>Send your link to friends and family</li>
          <li>Share it on social media, WhatsApp groups, forums — wherever you’re connected with potential players</li>
          <li>Encourage them to sign up and start playing</li>
        </ol>
        <h3>
          3. Earn Rewards
        </h3>
        <ol>
          <li>Each time someone registers and starts using the platform through your link, you’ll receive a percentage of their activity as a reward</li>
        <li>The more your referrals play, the more you earn</li>
        </ol>

        <h2>Referral Tiers & Bonus Percentages</h2>
        <p>Lottery 7 offers a multi-tier referral system. The more your referral network grows, the more opportunities you have to earn:</p>
        <ol>
          <li>Level 1: Direct referrals — highest bonus percentage</li>
          <li>Level 2: Referrals invited by your direct referrals</li>
          <li>Level 3: Referrals invited by Level 2 users</li>
        </ol>
        <p>Stay active, grow your network, and you could be earning even while you sleep!</p>

        <h2>Why Share Lottery 7?</h2>
        <p>Not only are you helping others discover a premier betting and casino experience, you’re unlocking long-term earning potential for yourself. Here’s why our players love referring</p>
        <ol>
          <li>Instant payouts</li>
          <li>No limit on referrals</li>
          <li>Recurring commission</li>
          <li>Trusted and transparent platform</li>
        </ol>

        <h2>Start Earning Today</h2>
        <p>Don’t miss your chance to turn your network into real rewards. Visit your dashboard on Lottery 7 and start sharing your referral link now.

Your winnings are just one share away!</p>

        <div className="footer-info-card">
          <strong></strong>
          <span>
            

          </span>
        </div>
      </motion.div>
    </motion.div>
  )}
  {footerModal === "agent" && (
  <motion.div
    className="footer-modal-backdrop"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setFooterModal(null)}
  >
    <motion.div
      className="footer-modal agent-modal"
      initial={{ opacity: 0, scale: 0.94, y: 22 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 22 }}
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="footer-modal-close"
        onClick={() => setFooterModal(null)}
        type="button"
      >
        <X size={20} />
      </button>

      <div className="agent-hero">
        <div className="agent-icon">
          <Gamepad2 size={25} />
        </div>

        <div>
          <span className="eyebrow">AGENT GUIDE</span>
          <h2>Build the <span>community</span></h2>
        </div>
      </div>

      <p className="agent-intro">
        The DLOTTERY7 Agent Program is designed for community members
        who want to help others discover the platform, its games and
        its features.
      </p>

      <div className="agent-steps">

        <div className="agent-step">
          <div className="agent-number">01</div>
          <div>
            <h3>Join the Community</h3>
            <p>
              Create your profile and become familiar with the
              DLOTTERY7 gaming experience.
            </p>
          </div>
        </div>

        <div className="agent-step">
          <div className="agent-number">02</div>
          <div>
            <h3>Share the Experience</h3>
            <p>
              Introduce friends and community members to the available
              free-to-play games and platform features.
            </p>
          </div>
        </div>

        <div className="agent-step">
          <div className="agent-number">03</div>
          <div>
            <h3>Help New Players</h3>
            <p>
              Guide new members through navigation, profiles,
              challenges and other available features.
            </p>
          </div>
        </div>

        <div className="agent-step">
          <div className="agent-number">04</div>
          <div>
            <h3>Grow Together</h3>
            <p>
              Build an active gaming community by sharing useful
              updates and encouraging friendly participation.
            </p>
          </div>
        </div>

      </div>

      <div className="agent-highlight">
        <div className="agent-highlight-icon">
          <Trophy size={20} />
        </div>

        <div>
          <strong>Community First</strong>
          <span>
            Help create a welcoming, friendly and enjoyable
            Real gaming.
          </span>
        </div>
      </div>

      <button
        className="primary agent-close-btn"
        onClick={() => setFooterModal(null)}
        type="button"
      >
        Explore LOTTERY7
        <ArrowRight size={17} />
      </button>

    </motion.div>
  </motion.div>
)}
{footerModal === "terms" && (
  <motion.div
    className="footer-modal-backdrop"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setFooterModal(null)}
  >
    <motion.div
      className="footer-modal"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="footer-modal-close"
        onClick={() => setFooterModal(null)}
        type="button"
      >
        <X size={20} />
      </button>

      <span className="eyebrow">TERMS & CONDITIONS</span>

      <h2>Play fair <span>Play smart</span></h2>

      <p>
        Welcome to DLOTTERY7. By accessing and using our website,
        services and Real Money gaming platform, you agree to follow the
        terms and conditions outlined below.
      </p>

      <h3>1. Eligibility</h3>
      <ul>
        <li>You must meet the minimum age requirements applicable to your location.</li>
        <li>You are responsible for ensuring that your use of the platform is permitted in your region.</li>
      </ul>

      <h3>2. Responsible Gaming</h3>
      <ul>
        <li>LOTTERY7 is designed as a Real cash play gaming experience.</li>
        <li>Players should use the platform responsibly and take appropriate breaks.</li>
      </ul>

      <h3>3. Account Registration</h3>
      <ul>
        <li>Information provided during registration should be accurate and up to date.</li>
        <li>You are responsible for keeping your account credentials secure.</li>
      </ul>

      <h3>4. Fair Play & Anti-Fraud</h3>
      <ul>
        <li>Cheating, exploiting bugs, automated abuse and fraudulent activity are prohibited.</li>
        <li>Accounts involved in abusive behaviour may be restricted or suspended.</li>
      </ul>

      <h3>5. Game Rules</h3>
      <ul>
        <li>Each game may have its own rules and gameplay mechanics.</li>
        <li>Players are responsible for understanding the rules before playing.</li>
        <li>Game availability and features may change from time to time.</li>
      </ul>

      <h3>6. Rewards & Promotions</h3>
      <ul>
        <li>Any points, badges, achievements or promotional features are part of the platform experience.</li>
        <li>Promotional features may have additional rules displayed with the relevant offer.</li>
      </ul>

      <h3>7. Platform Availability</h3>
      <ul>
        <li>We aim to keep the platform available and functional, but uninterrupted access cannot be guaranteed.</li>
        <li>Features may be updated, modified or temporarily unavailable for maintenance.</li>
      </ul>

      <h3>8. Intellectual Property</h3>
      <ul>
        <li>Website content, branding, graphics, text and software belong to their respective owners.</li>
        <li>Content may not be copied, reproduced or redistributed without appropriate permission.</li>
      </ul>

      <h3>9. Changes to Terms</h3>
      <ul>
        <li>These terms may be updated from time to time.</li>
        <li>Continued use of the platform after an update means you acknowledge the revised terms.</li>
      </ul>

      <h3>10. Contact</h3>
      <p>
        If you have questions about these Terms & Conditions,
        please contact us through the official contact channel
        provided on the website.
      </p>

    </motion.div>
  </motion.div>
)}
</AnimatePresence>

    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);