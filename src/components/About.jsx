import React from "react";

// About Page Component
const About = () => {
    return (
        <>
            {/* About Hero Section */}
            <section className="container-fluid bg-dark text-white py-5">
                <div className="container text-center py-4">
                    <h6 className="text-warning fw-bold">ABOUT US</h6>
                    <h1 className="display-4 fw-bold">
                        Welcome To Our Restaurant
                    </h1>
                    <p className="lead">
                        Discover our story, passion and delicious food.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="container py-5">
                <div className="row align-items-center g-4">

                    {/* Restaurant Image */}
                    <div className="col-md-6">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
                            className="img-fluid rounded shadow"
                            alt="Restaurant Interior"
                        />
                    </div>

                    {/* About Content */}
                    <div className="col-md-6">
                        <h6 className="text-warning fw-bold">
                            OUR STORY
                        </h6>

                        <h2 className="fw-bold mb-3">
                            We Serve Delicious Food With Love
                        </h2>

                        <p className="text-muted">
                            Our restaurant is a perfect place to enjoy
                            delicious food with your family and friends.
                            We believe in quality, freshness and excellent
                            hospitality.
                        </p>

                        <p className="text-muted">
                            Every dish is prepared with fresh ingredients
                            and passion to give you an unforgettable
                            dining experience.
                        </p>

                        <button className="btn btn-warning px-4">
                            Contact Us
                        </button>
                    </div>

                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="container-fluid bg-light py-5">
                <div className="container text-center">
                    <h6 className="text-warning fw-bold">
                        WHY CHOOSE US
                    </h6>

                    <h2 className="fw-bold mb-5">
                        What Makes Us Special?
                    </h2>

                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card border-0 shadow h-100 p-4">
                                <h1>🍽️</h1>
                                <h4>Quality Food</h4>
                                <p className="text-muted">
                                    Fresh and delicious food every day.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow h-100 p-4">
                                <h1>👨🍳</h1>
                                <h4>Expert Chefs</h4>
                                <p className="text-muted">
                                    Food prepared by experienced chefs.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow h-100 p-4">
                                <h1>⭐</h1>
                                <h4>Best Service</h4>
                                <p className="text-muted">
                                    Friendly service and comfortable dining.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
