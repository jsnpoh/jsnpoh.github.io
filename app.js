// Navbar Component
const Navbar = () => {
    return (
        <nav>
            <a href="#contact">Contact Us</a>
            <a href="#portfolio">Portfolio</a>
        </nav>
    );
};

// Banner Component
const Banner = () => {
    return (
        <div id="banner">
            Extemix
        </div>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer>
            <p>Copyright 2022-2024</p>
        </footer>
    );
};

// Main App
const App = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Footer />
        </div>
    );
};

// Render App to the DOM
ReactDOM.render(<App />, document.getElementById('root'));