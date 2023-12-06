
const Testimonial = (props) => {
    const { isMobile, name, position, description } = props;

    return (
        <div
            style={{
                width: isMobile ? "100%" : "22.0625rem",
                padding: "1.25rem",
                background: 'white',
                boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)',
                borderRadius: "0.75rem",
                display: "flex",
                flexDirection: 'column',
                gap: " 1.25rem",
                cursor: "grab",
                boxSizing: 'border-box',
            }}
        >
            <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: "0.5rem", display: 'flex' }}>
                <p style={{ color: '#19191A', fontSize: "1rem", fontFamily: 'Inter', fontWeight: '600', lineHeight: "120%", wordWrap: 'break-word', margin: 0 }}>
                    {name}
                </p>
                <p style={{ color: '#96979A', fontSize: "0.75rem", fontFamily: 'Inter', fontWeight: '500', lineHeight: "120%", wordWrap: 'break-word', margin: 0 }}>
                    {position}
                </p>
            </div>
            <p style={{ color: '#1D2129', fontSize: "1rem", fontFamily: 'Inter', fontWeight: 500, lineHeight: "120%", wordWrap: 'break-word', margin: 0 }}>
                {description}
            </p>
        </div>
    )
}

export default Testimonial