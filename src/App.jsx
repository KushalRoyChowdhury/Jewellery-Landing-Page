import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import NewArrivals from './components/NewArrivals';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-background text-primary font-sans">
            <Navbar />
            <Hero />
            <Categories />
            <NewArrivals />
            <About />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default App
