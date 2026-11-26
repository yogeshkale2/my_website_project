function Contact() {
  return (
    <>
      {/* Section 1: Contact Heading */}
      <section className="container-fluid bg-light py-5 text-center">
        <div className="container">
          <h5 className="text-primary">CONTACT US</h5>
          <h1 className="fw-bold">Get In Touch With Us</h1>
          <p className="text-muted">
            Have any questions? Feel free to contact us. We are always ready to
            help you.
          </p>
        </div>
      </section>

      {/* Section 2: Contact Form */}
      <section className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3 className="fw-bold">Contact Information</h3>
            <p>We would love to hear from you.</p>

            <h5>📍 Address</h5>
            <p>Pune, Maharashtra, India</p>

            <h5>📞 Phone</h5>
            <p>+91 9876543210</p>

            <h5>✉️ Email</h5>
            <p>info@example.com</p>
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold mb-4">Send Us a Message</h3>

            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter subject"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60365.32959822621!2d75.71677189828407!3d18.982976943616904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc52b20818bd2d3%3A0x5d6c6b3e2c7dae70!2sBeed%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1795679964094!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </>
  );
}

export default Contact;
