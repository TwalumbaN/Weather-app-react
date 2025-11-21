import './Weather.css';

export function AboutPage() {
    return(
        <div className="page-container">
      <h1>About This App</h1>
      <p>
        This weather application was created to make checking the weather quick,
        easy, and accessible. The goal is to provide accurate information in a
        clean and simple design.
      </p>

      <h2>Our Mission</h2>
      <p>
        To help users stay prepared with clear and reliable weather data,
        without distractions.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>Real-time weather updates</li>
        <br />
        <br />
        <li>Global city search</li>
        <br />
        <br />
        <li>Simple and easy-to-use design</li>
        <br />
        <br />
        <li>Responsive layout</li>
      </ul>
    </div>
    )
}