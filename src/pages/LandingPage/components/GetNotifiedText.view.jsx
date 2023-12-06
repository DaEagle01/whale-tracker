import BellIcon1 from "../../../assets/BellIcon1.svg";

const GetNotifiedText = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
                <img src={BellIcon1} alt="" />
            </div>
            <h4
                style={{
                    color: '#F2F2F2',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    fontFamily: 'Inter',
                    fontSize: '1.9375rem',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '120%',
                    margin: 0
                }}
            >
                Get notified when a highly correlated whale makes a move
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
                    margin: 0
                }}
            >
                Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.
            </p>
        </div>
    )
}

export default GetNotifiedText