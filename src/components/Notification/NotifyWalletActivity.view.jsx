import ClockIcon from "../../assets/clock.svg";
import CheckMark from "../../assets/Tick.svg";

const NotifyWalletActivity = ({ isMobile }) => {
    const timeLength = ["> 1 Day", "> 3 Days", "> 7 Days", "> 2 Weeks", "> 1 Month", "> 2 Months", "> 3 Months"];

    return (
        <div
            style={{
                width: isMobile ? "9rem" : "11.85625rem",
                height: "8.96rem",
                background: 'linear-gradient(0deg, white 0%, white 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(22, 93, 255, 0.16) 100%)',
                boxShadow: '0px 0.699999988079071px 0.699999988079071px rgba(0, 0, 0, 0.04)', borderRadius: "0.5rem",
                padding: "0.88rem"
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.88rem" }}>
                <div>
                    <img src={ClockIcon} alt="" />
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "0.875rem",
                        height: "0.875rem",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        borderRadius: "0.2625rem",
                        background: "#0071E3",
                    }}
                >
                    <img src={CheckMark} alt="" />
                </div>
            </div>
            <p style={{ color: '#19191A', fontSize: "0.7rem", fontFamily: 'Inter', fontWeight: 500, lineHeight: "120%", wordWrap: 'break-word', margin: "0  0 0.53rem 0" }}>
                Notify me when any <br /> wallet dormant for
            </p>
            <div style={{ width: "4.15rem", position: "relative", display: "inline-flex", alignItems: "center", gap: "0.175rem", padding: "0.2625rem", borderRadius: "0.175rem", background: "rgba(229, 229, 230, 0.50)", margin: "0  0 0.56rem 0" }}>
                <select style={{ flex: 1, appearance: "none", border: "none", background: "transparent", width: "100%" }}>
                    {timeLength.map(time => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
                <div style={{ position: "absolute", right: "0.2rem" }}>
                    <div style={{ width: 0, height: 0, borderLeft: "0.35rem solid transparent", borderRight: "0.35rem solid transparent", borderTop: "0.42rem solid #96979A" }}></div>
                </div>
            </div>
            <p style={{ color: '#19191A', fontSize: "0.7rem", fontFamily: 'Inter', fontWeight: 500, lineHeight: "120%", wordWrap: 'break-word', margin: "0  0 0.91rem 0" }}>
                becomes active
            </p>
        </div>
    )
}

export default NotifyWalletActivity