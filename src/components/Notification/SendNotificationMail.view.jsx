import BellIcon2 from "../../assets/BellIcon2.svg";

const SendNotificationMail = ({ isMobile }) => {
    return (
        <div
            style={{
                width: isMobile ? "9rem" : "11.85625rem",
                height: "8.96rem",
                background: 'linear-gradient(0deg, white 0%, white 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(22, 93, 255, 0.16) 100%)',
                boxShadow: '0px 0.699999988079071px 0.699999988079071px rgba(0, 0, 0, 0.04)',
                borderRadius: "0.5rem",
                padding: "0.88rem"
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.88rem" }}>
                <div>
                    <img src={BellIcon2} alt="" />
                </div>
                <p style={{ color: '#19191A', fontSize: "0.56875rem", fontFamily: 'Inter', fontWeight: 600, lineHeight: "120%", margin: 0 }}>Save</p>
            </div>
            <p style={{ color: '#19191A', fontSize: "0.875rem", fontFamily: 'Inter', fontWeight: 500, lineHeight: "120%", margin: "0  0 0.97rem 0" }}>
                We’ll be sending <br /> notifications to you <br /> here
            </p>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    borderRadius: '0.5rem',
                    border: '1px solid #E5E5E6',
                    background: '#FFF',
                    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)'
                }}
            >
                <input
                    type="text"
                    placeholder="Your email address"
                    style={{
                        border: 'none',
                        outline: 'none',
                        width: '100%',
                        fontFamily: 'Inter',
                        fontSize: '0.875rem',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '120%',
                        padding: '0.52rem 0.7rem',
                        borderRadius: '0.5rem',
                        color: "#B0B1B3"
                    }}
                />
                <style>
                    {`::placeholder { color: #CACBCC; }`}
                </style>
            </div>
        </div>
    )
}

export default SendNotificationMail