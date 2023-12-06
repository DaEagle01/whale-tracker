import SendNotificationMail from "../../components/Notification/SendNotificationMail.view";
import Signup from "../../components/SignupForm/Signup.view";
import GetNotifiedText from "./components/GetNotifiedText.view";
import WatchWhaleText from "./components/WatchWhaleText.view";
import BlueGradientBg from "../../assets/blueGradientBg.svg";
import Testimonials from "./components/Testimonials.view";
import Slider from "react-slick";
import NotifyWalletChange from "../../components/Notification/NotifyWalletChange.view";
import NotifyWalletActivity from "../../components/Notification/NotifyWalletActivity.view";
import useMediaQuery from "../../hooks/useMediaQuery";

const LandingPage = () => {
    const isMobile = useMediaQuery('(max-width: 1200px)');
    // const isLaptop = useMediaQuery('(min-width: 1000px)');
    // const isMobile = useMediaQuery('(max-width: 780px)');
    // console.log(isDesktop, isLaptop, isMobile);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 1,
        cssEase: "linear"
    };

    return (
        <div style={{ maxWidth: isMobile ? "100%" : "90rem", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", width: "100%" }}>
                <div
                    style={{
                        width: isMobile ? "100%" : "55.56%",
                        backgroundImage: `url(${BlueGradientBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: "black",
                        padding: isMobile ? "3rem 2rem" : "5.37rem 0 3.81rem 3.75rem",
                        boxSizing: 'border-box',
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            justifyContent: "space-between",
                            gap: "2.87rem",
                            marginBottom: "4.5rem",
                            width: "100%"
                        }}
                    >
                        <div style={{ width: isMobile ? "100%" : "50%" }}>
                            <GetNotifiedText isMobile={isMobile} />
                        </div>
                        <div style={{ width: isMobile ? "100%" : "50%" }}>
                            <div style={{}}>
                                <div style={{ width: "100%", maxWidth: "44rem" }}>
                                    <Slider {...settings} style={{}}>
                                        <SendNotificationMail isMobile={isMobile} />
                                        <NotifyWalletChange isMobile={isMobile} />
                                        <NotifyWalletActivity isMobile={isMobile} />
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingRight: isMobile ? "" : "3.87rem", marginBottom: isMobile ? "3rem" : "1.37rem" }}>
                        <WatchWhaleText isMobile={isMobile} />
                    </div>
                    <div style={{}}>
                        <Testimonials isMobile={isMobile} />
                    </div>
                </div>
                <div style={{ width: isMobile ? "100%" : "44.44%", }}>
                    <Signup isMobile={isMobile} />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;