import BarChat from "../../assets/bar-chart-2.svg";
import CheckMark from "../../assets/Tick.svg";

const NotifyWalletChange = ({ isMobile }) => {
    const amounts = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.8rem" }}>
                <div>
                    <img src={BarChat} alt="" />
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
            <p style={{ color: '#19191A', fontSize: "0.7rem", fontFamily: 'Inter', fontWeight: 500, lineHeight: "120%", wordWrap: 'break-word', margin: "0  0 0.91rem 0" }}>
                Notify me when any wallets <br /> move more than
            </p>
            <div style={{ width: "4.15rem", position: "relative", display: "inline-flex", alignItems: "center", gap: "0.175rem", padding: "0.2625rem", borderRadius: "0.175rem", background: "rgba(229, 229, 230, 0.50)" }}>
                <select style={{ flex: 1, appearance: "none", border: "none", background: "transparent", width: "100%" }}>
                    {amounts.map(amount => (
                        <option key={amount} value={amount}>${amount}</option>
                    ))}
                </select>
                <div style={{ position: "absolute", right: "0.7rem" }}>
                    <div style={{ width: 0, height: 0, borderLeft: "0.35rem solid transparent", borderRight: "0.35rem solid transparent", borderTop: "0.42rem solid #96979A" }}></div>
                </div>
            </div>
        </div>
    )
}

export default NotifyWalletChange