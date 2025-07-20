import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {testimonials} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";

const Testimonials = () => {
    return (
        <section id={"testimonials"} className={"flex-center section-padding"}>
            <div className={"w-full h-full md:px-10 px-5"}>
                <TitleHeader
                    title={"What People Say About Me"}
                    sub={"Feedback Highlights"}
                />
                <div className={"lg:columns-3 md:columns-2 columns-1 mt-16"}>
                    {testimonials.map((testimonial, index) => (
                        <GlowCard key={`${testimonial.name}-${index}`} card={testimonial} index={index}>
                            <div className={"flex items-center gap-3"}>
                                <div>
                                    <img src={testimonial.imgPath} alt={testimonial.name}/>
                                </div>
                                <div>
                                    <p>{testimonial.name}</p>
                                    <p>{testimonial.mentions}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials