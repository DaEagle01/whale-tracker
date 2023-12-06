import { useState } from "react";

const Signup = ({ isMobile }) => {
    const [isHovered, setHovered] = useState(false);
    const [isFocused, setFocused] = useState(false);
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmitEmail = (event) => {
        event.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email.');
            return;
        }
        setErrorMessage('');
        window.open('https://app.loch.one/welcome', '_blank');
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "", minHeight: "100vh" }}>
            <div style={{ padding: isMobile ? "0 15% 0 15%" : "0 21.43% 0 21.43%", boxSizing: 'border-box', }}>
                <h3
                    style={{
                        fontFamily: "Inter",
                        fontSize: "2.4375rem",
                        fontWeight: 500,
                        lineHeight: "120%",
                        color: "#B0B1B3",
                        margin: "0 0 2rem 0"
                    }}
                >
                    Sign up for exclusive access.
                </h3>
                <div style={{ marginBottom: errorMessage ? "0.7rem" : "1.5rem" }}>
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
                            onChange={e => setEmail(e.target.value)}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            type="text"
                            placeholder="Your email address"
                            style={{
                                border: `1px solid ${(isHovered || isFocused) ? '#2f19cb' : '#E5E5E6'}`,
                                outline: 'none',
                                width: '100%',
                                fontFamily: 'Inter',
                                fontSize: '1rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '120%',
                                padding: '1.25rem 1.5rem',
                                borderRadius: '0.5rem',
                                color: "#B0B1B3"
                            }}
                        />
                        <style>
                            {`::placeholder { color: #CACBCC; }`}
                        </style>
                    </div>
                    {errorMessage && (
                        <p
                            style={{
                                fontFamily: "Inter",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                lineHeight: "120%",
                                color: "red",
                                marginTop: "0.5rem",
                            }}
                        >
                            Please enter a valid email.
                        </p>
                    )}
                </div>

                <button
                    onClick={handleSubmitEmail}
                    type="submit"
                    style={{
                        display: 'flex',
                        width: '100%',
                        height: '3.6875rem',
                        padding: '1.125rem 1.75rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.75rem',
                        flexShrink: 0,
                        borderRadius: '0.5rem',
                        border: '1px solid var(--grey-900, #19191A)',
                        background: 'var(--grey-900, #19191A)',
                        color: '#FFF',
                        fontFamily: 'Inter',
                        fontSize: '1rem',
                        fontWeight: 500,
                        cursor: 'pointer'
                    }}
                >
                    Get started
                </button>
            </div>
            <p
                style={{
                    color: 'var(--grey-900, #19191A)',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '1rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '120%',
                    marginTop: "2.63rem",
                    padding: "0 5% 0 5%"
                }}
            >
                You’ll receive an email with an invite link to join.
            </p>
        </div>
    );
};

export default Signup;
