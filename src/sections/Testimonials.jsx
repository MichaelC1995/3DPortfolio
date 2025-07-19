import React from "react";
import { testimonials } from "../constants/index.js";

const Testimonials = () => {
    return (
        <section id="testimonials" className="section-padding">
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id || `${testimonial.author}-${index}`}
                        className="testimonial-card"
                    >
                        <p>{testimonial.text}</p>
                        <p>{testimonial.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;