import { Link } from "react-router-dom";
import clg1 from "../assets/clg1.png";
import clg2 from "../assets/clg2.png";
import clg3 from "../assets/clg3.png";

const slides = [
  {
    image: clg1,
    title: "Shrihari Vidhalaya, Wahegaon (Amla)",
    description:
      "A welcoming campus dedicated to academic excellence and holistic student growth.",
  },
  {
    image: clg2,
    title: "Modern Library & Digital Learning",
    description:
      "Well-stocked bookshelves, smart boards, and collaborative spaces for curious minds.",
  },
  {
    image: clg3,
    title: "Cultural Arts & Science Center",
    description:
      "Interactive science exhibits and creative arts facilities that inspire innovation.",
  },
];

const cards = [
  {
    image: clg1,
    icon: "bi-mortarboard-fill",
    title: "Quality Education",
    text: "Experienced faculty and student-centered learning focused on strong fundamentals and character building.",
    link: "/about",
    buttonText: "Learn More",
  },
  {
    image: clg2,
    icon: "bi-book-half",
    title: "Smart Library",
    text: "Quiet reading zones, digital tablets, and rich academic resources to support research and self-study.",
    link: "/services",
    buttonText: "Explore Facilities",
  },
  {
    image: clg3,
    icon: "bi-palette-fill",
    title: "Arts & Science Hub",
    text: "Interactive STEM displays, cultural programs, and co-curricular activities for all-round development.",
    link: "/contact",
    buttonText: "Visit Campus",
  },
];

const Home = () => {
  return (
    <>
      {/* Slider Section */}
      <section>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : undefined}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={slide.title}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={slide.image}
                  className="d-block w-100"
                  alt={slide.title}
                  style={{ maxHeight: "520px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                  <h5>{slide.title}</h5>
                  <p className="mb-0">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="container-fluid bg-light py-5">
        <div className="row justify-content-center text-center">
          <div className="col-12 px-4">
            <h6 className="text-primary fw-bold text-uppercase">
              About Our School
            </h6>

            <h1 className="fw-bold mb-4">
              Welcome to Shrihari Vidhalaya, Wahegaon (Amla)
            </h1>

            <p className="text-muted mx-auto" style={{ maxWidth: "900px" }}>
              We are committed to nurturing young minds through quality
              education, modern facilities, and strong moral values. Our campus
              provides a safe, inspiring environment where every student is
              encouraged to learn and grow.
            </p>

            <p className="text-muted mx-auto" style={{ maxWidth: "900px" }}>
              With dedicated teachers, a well-equipped library, and interactive
              science and cultural programs, we prepare students for a bright
              and confident future.
            </p>

            <Link to="/about" className="btn btn-primary px-5 mt-3">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container py-5">
        <div className="text-center mb-4">
          <h6 className="text-primary fw-bold text-uppercase">
            Campus Highlights
          </h6>
          <h2 className="fw-bold">Explore Our Facilities</h2>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cards.map((card) => (
            <div className="col" key={card.title}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={card.image}
                  className="card-img-top"
                  alt={card.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">
                    <i className={`bi ${card.icon} text-primary me-2`}></i>
                    {card.title}
                  </h5>
                  <p className="card-text text-muted flex-grow-1">
                    {card.text}
                  </p>
                  <Link to={card.link} className="btn btn-outline-primary mt-2">
                    {card.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Home;
