import './Weather.css';

export function Homepage() {
    return(
        <>
            <div className="page-container">
                <h1>Welcome to Your Weather Hub</h1>
                <p>
                    Get real-time and accurate weather information for any city worldwide.
                    Search for a location and instantly receive temperature, humidity,
                    wind speed and more.
                </p>

                <h2>Features</h2>
                <ul>
                    <li>Fast and reliable weather updates</li>
                    <br />
                    <br />
                    <li>Simple and clean interface</li>
                    <br />
                    <br />
                    <li>Global search support</li>
                    <br />
                    <br />
                    <li>No ads — just weather</li>
                </ul>
    </div>
        </>
    )
}