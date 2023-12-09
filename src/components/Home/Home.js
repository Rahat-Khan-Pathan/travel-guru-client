import React from "react";
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Offers from "../Offers/Offers";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [offers, setOffers] = useState([]);
    // Change Title
    useEffect(() => {
        document.title = "Travel Guru | Home";
        window.scrollTo(0, 0);
        fetch("https://travel-guru-server-rho-two.vercel.app/offers")
            .then((res) => res.json())
            .then((data) => {
                setOffers(data);
                setLoading(false);
            });
    }, []);
    return (
        <div className="home-container">
            {loading ? (
                <div className="spinner d-flex align-items-center justify-content-center">
                    <button className="btn btn-primary" type="button" disabled>
                        <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                        ></span>
                        <span className="ms-2">Loading...</span>
                    </button>
                </div>
            ) : (
                <>
                    <Banner></Banner>
                    <WhyChooseUs></WhyChooseUs>
                    <Offers offers={offers}></Offers>
                    <Contact></Contact>
                </>
            )}
        </div>
    );
};

export default Home;
