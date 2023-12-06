import Testimonial from "../../../components/Testimonial/Testimonial.view";
import Vector from "../../../assets/Vector.svg";
import Slider from "react-slick";

const Testimonials = ({ isMobile }) => {
    const testimonials = [
        { name: "Jack F", position: "Ex Blackrock PM", description: "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”" },
        { name: "Brian J", position: "Engineering Manager", description: "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”" },
        { name: "Mathew Derek", position: "Entrepreneur", description: "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”" },
        { name: "Arthur S", position: "Ex Blackrock PM", description: "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: isMobile ? 1 : 1.5,
        slidesToScroll: 1,
        arrows: isMobile ? true : false,
    };

    return (
        <div>
            <div style={{ paddingRight: isMobile ? "" : "3.87rem", marginBottom: "2.5rem" }}>
                <p style={{ textAlign: isMobile ? "center" : 'right', color: '#F2F2F2', fontSize: 25, fontFamily: 'Inter', fontWeight: 500, lineHeight: "120%", margin: "0 0 1.25rem 0" }}>
                    Testimonials
                </p>
                <hr style={{ border: "1px solid rgba(229, 229, 230, 0.50)", margin: 0 }} />
            </div>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "center" : "flex-end", gap: "1.25rem", width: "100%" }}>
                <div style={{ order: isMobile ? 2 : 1, paddingRight: "1.25rem" }}>
                    <img src={Vector} alt="" />
                </div>
                <div style={{ order: isMobile ? 1 : 2, width: "100%", maxWidth: "44rem" }}>
                    <Slider {...settings}>
                        {testimonials.map(testimonial => (
                            <div>
                                <Testimonial isMobile={isMobile} name={testimonial.name} position={testimonial.position} description={testimonial.description} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;