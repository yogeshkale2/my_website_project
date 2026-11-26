function Services() {
  return (
    <>
      {/* Section 1: Services Heading */}
      <section className="container-fluid bg-light py-5 text-center backgoundcolor-black">
        <div className="container">
          <h5 className="text-primary">OUR SERVICES</h5>
          <h1 className="fw-bold">What We Offer</h1>
          <p className="text-muted">
            We provide quality services to help you grow your business.
          </p>
        </div>
      </section>

      {/* Section 2: Services Cards */}
      <section className="container py-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="card p-4 h-100">
              <h2>💻</h2>
              <h4>Web Development</h4>
              <p>
                We create modern and responsive websites using the latest
                technologies.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 h-100">
              <h2>📱</h2>
              <h4>App Development</h4>
              <p>
                We develop user-friendly mobile applications for Android and
                other platforms.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 h-100">
              <h2>🎨</h2>
              <h4>UI/UX Design</h4>
              <p>
                We design attractive and easy-to-use interfaces for better user
                experience.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
