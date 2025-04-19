import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CountdownTimer from "../components/CountdownTimer";

const CherryBlossomSVG = () => (
  <svg
    width="80px"
    height="80px"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    className="iconify iconify--fxemoji"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      fill="#FFA9BA"
      d="M475.539 198.425c-2.007-5.904 2.156-13.382 10.772-21.137c3.44-3.096 3.889-8.305 1.173-12.052c-23.598-32.546-65.977-48.31-106.704-36.215a98.05 98.05 0 0 0-15.991 6.314c-6.649 3.328-14.239-2.335-12.947-9.657a98.107 98.107 0 0 0 1.487-17.055c0-44.619-29.975-82.231-70.885-93.811c-4.513-1.278-9.22 1.134-10.923 5.505c-4.717 12.101-10.84 19.411-17.533 19.411c-6.551 0-12.555-7.003-17.229-18.646c-1.759-4.38-6.669-6.634-11.157-5.172c-39.044 12.724-67.261 49.421-67.261 92.712c0 5.798.506 11.479 1.477 16.999c1.287 7.316-6.293 12.972-12.94 9.655a98.092 98.092 0 0 0-15.875-6.256c-44.043-13.08-90.014 6.42-112.081 44.489c-2.354 4.061-1.204 9.225 2.614 11.957c10.812 7.738 16.524 15.646 14.802 22.215c-1.668 6.362-10.023 10.403-22.554 11.961c-4.744.59-8.148 4.863-7.814 9.632c2.756 39.384 29.443 74.763 69.52 86.665a98.146 98.146 0 0 0 14.438 3.133c7.222 1.004 10.349 9.68 5.427 15.06a98.192 98.192 0 0 0-9.121 11.623C60.18 384.635 65.817 435.47 97.11 467.788c2.702 2.791 6.921 3.594 10.425 1.916c6.878-3.293 12.693-3.915 16.675-1.261c3.835 2.556 5.515 7.852 5.283 15.043c-.126 3.906 2.315 7.475 6.009 8.749c40.818 14.073 87.547-.377 112.714-37.935l.089-.133c3.635-5.444 11.535-5.444 15.17 0l.089.133c27.591 41.174 81.096 54.579 124.316 33.073c3.576-1.779 5.512-5.718 4.853-9.657c-1.456-8.698-.316-15.255 3.848-18.455c3.829-2.943 9.743-2.684 16.913.211c3.832 1.547 8.269.265 10.656-3.109c22.675-32.05 24.554-76.051 1.397-110.607a98.192 98.192 0 0 0-9.121-11.623c-4.922-5.38-1.796-14.056 5.427-15.06a98.146 98.146 0 0 0 14.438-3.133c44.103-13.098 71.995-54.626 69.618-98.637c-.247-4.573-3.816-8.327-8.384-8.646c-11.864-.83-19.946-4.233-21.986-10.232zm-219.59 69.373l-.057.294l-.057-.294l.354-.392l-.24.392z"
    />
    <path
      fill="#E6A4FF"
      d="M345.186 368.042a11.903 11.903 0 0 1-8.392-3.447l-89.351-88.306c-4.689-4.635-4.734-12.193-.1-16.883c4.635-4.69 12.193-4.733 16.883-.1l89.351 88.306c4.689 4.635 4.734 12.193.1 16.883a11.901 11.901 0 0 1-8.491 3.547z"
    />
    <path
      fill="#FF6E83"
      d="M351.021 238.828c-4.531-16.939-21.934-26.999-38.874-22.468l-24.598 6.579v-25.463c0-17.534-14.215-31.749-31.749-31.749s-31.749 14.215-31.749 31.749v25.656l-24.814-6.517c-16.957-4.452-34.318 5.684-38.772 22.644c-4.454 16.959 5.684 34.318 22.643 38.772l20.995 5.514l-14.293 20.843c-9.917 14.461-6.233 34.223 8.229 44.139a31.598 31.598 0 0 0 17.927 5.568c10.116 0 20.059-4.824 26.212-13.797l13.032-19.005l12.636 19.27c6.096 9.296 16.235 14.342 26.579 14.342a31.598 31.598 0 0 0 17.38-5.203c14.663-9.615 18.755-29.297 9.14-43.96l-14.51-22.127l22.117-5.915c16.941-4.528 27-21.933 22.469-38.872z"
    />
    <circle fill="#FFD469" cx={255.835} cy={267.798} r={30.165} />
    <path
      fill="#FFEED4"
      d="M367.149 291.758l-107.558-25.862l18.068-82.27a3 3 0 0 0-2.286-3.574a2.995 2.995 0 0 0-3.573 2.287l-17.254 78.562l-61.095-87.885a3 3 0 0 0-4.927 3.425l62.815 90.358l-75.379 40.281a3 3 0 1 0 2.828 5.292l77.092-41.197l109.867 26.417a3.003 3.003 0 0 0 3.618-2.216a3 3 0 0 0-2.216-3.618z"
    />
    <path
      fill="#FF473E"
      d="M208.987 174.728c0 9.941-8.059 18-18 18s-18-8.059-18-18s8.059-18 18-18s18 8.059 18 18zM378.416 308.12c7.425-6.61 8.087-17.987 1.477-25.413c-6.61-7.425-17.988-8.087-25.413-1.477c-7.425 6.61-8.087 17.987-1.477 25.413c6.61 7.425 17.987 8.087 25.413 1.477zm-90.225-137.087c-6.599-7.435-17.976-8.112-25.411-1.513c-7.435 6.599-8.112 17.976-1.513 25.411c6.599 7.435 17.976 8.112 25.411 1.513c7.435-6.599 8.112-17.976 1.513-25.411zM159.569 307.084c-1.459 9.833 5.33 18.988 15.163 20.447c9.833 1.459 18.988-5.329 20.447-15.163c1.459-9.833-5.33-18.988-15.163-20.447s-18.988 5.329-20.447 15.163z"
    />
  </svg>
);
const HeartSVG = () => (
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="80px"
  height="80px"
  viewBox="0 0 34 34"
>
  <style>
    {
      `.avocado_zestien{fill:#E598A3;}
        .avocado_vijftien{fill:#D36781;}`
    }
  </style>
  <g>
    <path
      className="avocado_vijftien"
      d="M16,27.437C17.777,26.495,29.5,19.975,29.5,12c0-4.136-3.364-7.5-7.5-7.5 
      c-2.147,0-4.197,0.93-5.625,2.551L16,7.478l-0.375-0.426C14.197,5.43,12.147,4.5,10,4.5
      c-4.136,0-7.5,3.364-7.5,7.5C2.5,19.975,14.223,26.495,16,27.437z"
    />
    <circle className="avocado_zestien" cx="8" cy="10" r="2" />
  </g>
</svg>

  );
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FloatingGraphic = ({ top, left, children }: any) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 0.4, y: 10 }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    style={{
      position: "absolute",
      top,
      left,
      pointerEvents: "none",
      zIndex: 1,
    }}
  >
    {children}
  </motion.div>
);

const WeddingPage: React.FC = () => {
  useEffect(() => {
    const rsvpButton = document.getElementById("rsvpButton");
    const hideButton = () => {
      if (rsvpButton) {
        rsvpButton.style.display = "none";
      }
    };
    if (rsvpButton) {
      rsvpButton.addEventListener("click", hideButton, false);
    }
    return () => {
      if (rsvpButton) {
        rsvpButton.removeEventListener("click", hideButton);
      }
    };
  }, []);

  return (
    <motion.div
      className="font-sans relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="font-sans relative overflow-hidden" style={{backgroundColor: "#f4f4f4"}}>
        <FloatingGraphic top="100%" left="80%">
          <CherryBlossomSVG />
        </FloatingGraphic>
        <FloatingGraphic top="80%" left="0%">
          <HeartSVG />
        </FloatingGraphic>
        {/* Hero Section */}

        <div
          className="header"
          style={{ backgroundImage: "url(/img/cover.jpeg)" }}
        >
          <h1 className="heading">
            Pallav & Surbhi
            <span className="heading-subtext"> are getting married!</span>
          </h1>
        </div>

        {/* Couple Cards */}
        <motion.section
          className="section"
          style={{
            marginTop: "40px",
            backgroundImage: "url(/img/brideandgrooom.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="couple-cards">
            {[
              {
                name: "Pallav",
                description:
                  "Pallav, beloved son of Mr. Mahesh Kumar Gupta and Mrs. Lalita Gupta, is an ambitious and kind-hearted individual. With dreams in his eyes and hope in his heart, he embarks on a beautiful new journey filled with love, joy, and togetherness.",
                image: "https://example.com/groom.jpg",
                className: "groom-card",
              },
              {
                name: "Surbhi",
                description:
                  "Surbhi, daughter of Mr. Satish and Mrs. Nisha, is a fantastic person with a warm heart and a happy nature. Her positivity and grace light up every room, making her a joy to be around.",
                image: "https://example.com/bride.jpg",
                className: "bride-card",
              },
            ].map(({ name, description, image, className }, idx) => (
              <div
                key={idx}
                className={`card ${className}`}
                style={{
                  padding: "5px",
                  //  boxShadow: "0 6px 12px rgba(34, 13, 13, 0.28)",
                  borderRadius: "12px",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  overflow: "hidden",
                  flex: "1 1 45%",
                  minWidth: "280px",
                  maxWidth: "calc(50% - 40px)",
                  margin: "10px",
                  background: "transparent",
                  zIndex: "1",
                  backgroundColor: "transparent",
                  textAlign: "center",
                  backdropFilter: "blur(1px)",
                  // boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    backgroundColor: "transparent",
                    padding: "20px",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <h3
                    className="details-heading"
                    style={{
                      color: "#fff",
                      textShadow: "1px 1px 2px #000, 0 0 5px rgba(0,0,0,0.4)",
                      fontWeight: "bold",
                    }}
                  >
                    {name}
                  </h3>
                  <p
                    style={{
                      color: "wheat",
                      textShadow: "1px 1px 2px #000, 0 0 5px rgba(0,0,0,0.4)",
                      fontWeight: "bold",
                    }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Overview Section */}
        <motion.section
          className="section overview-section"
          style={{
   
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
            margin: " 20px auto auto auto",
            maxWidth: "800px",
            textAlign: "center",
            backgroundColor: "transparent",
            backgroundImage: "url(/img/overview.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
           
          }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="sub-heading" style={{marginTop:"20px"}}>Overview</h2>
          <p
            style={{
              fontSize: "1em",
              lineHeight: "1.8",
              color: "wheat",
              margin: "0 auto",
              maxWidth: "600px",
                      textShadow: "1px 1px 2px #000, 0 0 5px rgba(0,0,0,0.4)",
                      fontWeight: "bold",
            }}
          >
  
  With the blessings of the Almighty and our beloved elders,<br /><br />
  We,<br />
  <strong>Pallav</strong> ❤️ <strong>Surbhi</strong>,<br /><br />
  joyfully invite you to join us as we tie the sacred knot<br />
  and begin a new journey of love, laughter, and lifelong togetherness.<br /><br />
  In the presence of family, friends, and cherished ones,<br />
  we wish to celebrate our union with traditions, rituals, and endless joy.<br /><br />
  Your presence will add grace to our special day<br />
  and your blessings will mean the world to us.<br /><br />
  <strong>Come join us in this celebration of love, culture, and togetherness.</strong>


          </p>
        </motion.section>

        {/* Details Section */}
        <motion.section
          className="section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <FloatingGraphic top="100%" left="80%">
            <CherryBlossomSVG />
          </FloatingGraphic>
          <h2 className="sub-heading" style={{marginTop:"25px"}}>The Details</h2>
          <div
            className="details"
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {[
             {
                title: "When",
                content: "14th May 2025, Wednesday — A day blessed by traditions, love, and new beginnings.",
                link: "#",
                linkText: null,
                image: "url(/img/when.jpeg)",
                color: "#000"
              }
              ,
              {
                title: "Location",
                content: "Hotel Sanskriti Palace, Bypass Road, Rajgarh, Madhya Pradesh — where love meets tradition in a serene and majestic setting.",
                link: "https://maps.app.goo.gl/HfCHMB3x2CeKNHoi6",
                linkText: "Hotel Sanskriti Palace ✈",
                image: "url(/img/location.jpeg)",
                color: "#000"
              }
              ,
              {
                title: "Lodging",
                content:
                  "We've arranged comfortable accommodations for our cherished guests at Hotel Sanskriti Palace. Immerse yourself in the joyful spirit of the wedding with loved ones all around.\n\nExperience vibrant traditions — from the colorful Mehendi to the lively Sangeet — all under one welcoming roof.",
                link: null,
                linkText: null,
                image: "url(/img/lodging.jpeg)",
                color: "#fff"
              }
              ,
            ].map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  position: "relative",
                  padding: "0",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                  borderRadius: "16px",
                  backgroundImage: item.image,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: item.color,
                  marginBottom: "20px",
                  overflow: "hidden",
                }}
              >
                {/* Vintage dark overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(30, 20, 10, 0.1)", // vintage dark tint
                    backdropFilter: "blur(2px)",
                    zIndex: 0,
                  }}
                ></div>

                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    padding: "24px",
                    borderRadius: "12px",
                    textAlign: "center",
                    color: item.color === "#fff" ? "#fff" : "#fdf2d1", // soft vintage cream if text is not white
                  }}
                >
                  <h3
                    className="details-heading"
                    style={{
                      color: "#fff",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
                      fontSize: "1.6rem",
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h3>

                  {item.content.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      style={{
                        color: item.color === "#fff" ? "#fff" : "#fdf2d1",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                        fontSize: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {para}
                    </p>
                  ))}

                  {item.link && item.linkText && (
                    <a
                      title={item.linkText}
                      rel="noopener"
                      href={item.link}
                      target="_blank"
                      style={{
                        color: "#ffcc00",
                        textDecoration: "none",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                        fontWeight: "bold",
                      }}
                    >
                      {item.linkText}
                    </a>
                  )}

                  {item.title === "When" && (
                    <div style={{ marginTop: "20px" }}>
                      <CountdownTimer />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <FloatingGraphic top="100%" left="80%">
              <CherryBlossomSVG />
            </FloatingGraphic>
          </div>
        </motion.section>

        <style jsx>{`
          .section,
          .card {
            padding: 30px;
            margin-bottom: 40px;
            border-radius: 20px;
            background-color: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(5px);
            border: 2px solid transparent;
            background-image: linear-gradient(to right, #fff, #fff),
              radial-gradient(circle at top left, #ffb6c1, #f8e473, #d4af37);
            background-origin: border-box;
            background-clip: padding-box, border-box;
            box-shadow: 0 0 25px rgba(212, 175, 55, 0.2);
          }

          .details-heading {
            font-size: 2.5em;
            font-family: "Caveat", cursive;
            color: #fff;
            text-shadow: 2px 2px 4px #000;
          }

          .sub-heading {
            font-family: "Caveat", cursive;
            font-size: 2.5em;
            color: #333;
          }

          .header {
            position: relative;
            background-size: cover;
            background-position: center;
            height: 75vh;
            padding: 20px;
          }

          .heading {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 3em;
            color: #fff;
            text-shadow: 0 0 10px #000;
          }

          @media only screen and (max-width: 600px) {
            .heading {
              font-size: 3em;
            }
          }

          .couple-cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0px;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .details {
            max-width: 900px;
            margin: 0 auto;
          }
        `}</style>
      </div>
    </motion.div>
  );
};

export default WeddingPage;
