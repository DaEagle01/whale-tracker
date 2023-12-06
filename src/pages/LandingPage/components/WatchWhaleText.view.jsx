import LochDashboardImage from "../../../assets/LochDashboardImage.png";
import EyeIcon from "../../../assets/Eye.svg";

const WatchWhaleText = ({ isMobile }) => {
    return (
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: "2.37rem", width: "100%" }}>
            <div style={{ width: isMobile ? "100%" : '20.9375rem' }} >
                <img
                    src={LochDashboardImage}
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        border: "1.5px solid rgba(255, 255, 255, 0.68)",
                        borderRadius: "0.75rem", boxShadow: "0px 14px 64px -4px rgba(24, 39, 75, 0.12), 0px 8px 22px -6px rgba(24, 39, 75, 0.12)"
                    }}
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1rem", width: isMobile ? "100%" : '50%', }}>
                <div>
                    <img src={EyeIcon} alt="" />
                </div>
                <h4
                    style={{
                        color: '#F2F2F2',
                        fontFamily: 'Inter',
                        fontSize: '1.9375rem',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '120%',
                        margin: 0,
                        textAlign: "right"
                    }}
                >
                    Watch what the whales are doing
                </h4>
                <p
                    style={{
                        color: '#F2F2F2',
                        fontFamily: 'Inter',
                        fontSize: '1rem',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '120%',
                        opacity: 0.7,
                        textAlign: "right",
                        margin: 0
                    }}
                >
                    All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.
                </p>
            </div>
        </div >
    )
}

export default WatchWhaleText