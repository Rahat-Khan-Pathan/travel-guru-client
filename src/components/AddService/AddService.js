import React, { useEffect, useRef } from "react";
import Modal from "../Modal/Modal";
import "./AddService.css";

const AddService = () => {
    const nameRef = useRef(null);
    const priceRef = useRef(null);
    const descriptionRef = useRef(null);
    const detailsRef = useRef(null);
    const daysRef = useRef(null);
    const nightsRef = useRef(null);
    const imageRef = useRef(null);
    const detailsImageRef = useRef(null);
    // Change Title
    useEffect(() => {
        document.title = "Admin Panel | Add Offer";
        window.scrollTo(0, 0);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            detailsImage: detailsImageRef.current.value,
            image: imageRef.current.value,
            price: priceRef.current.value,
            description: descriptionRef.current.value,
            details: detailsRef.current.value,
            days: daysRef.current.value,
            nights: nightsRef.current.value,
        };
        fetch("https://travel-guru-server-rho-two.vercel.app/offers", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => added());
    };
    const added = () => {
        document.getElementById("modal-btn").click();
        setTimeout(() => {
            document.getElementById("modal-close").click();
            nameRef.current.value = "";
            detailsImageRef.current.value = "";
            imageRef.current.value = "";
            priceRef.current.value = "";
            descriptionRef.current.value = "";
            detailsRef.current.value = "";
            daysRef.current.value = "";
            nightsRef.current.value = "";
        }, 2000);
    };
    return (
        <div className="container add-service-container">
            <Modal text={"Offer Added"}></Modal>
            <h1 className="booking-header">Add Offer</h1>
            <hr />
            <div className="limiter book-limiter">
                <div className="container-login100 align-items-start py-0">
                    <div className="wrap-login100">
                        <form
                            className="login100-form validate-form"
                            onSubmit={handleSubmit}
                        >
                            {/* Input Destination Name  */}
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100 p-0">Name</span>
                                <input
                                    required
                                    ref={nameRef}
                                    className="input100 book-input"
                                    type="text"
                                    name="name"
                                    placeholder="Enter destination name"
                                />
                                <span className="focus-input100 fa"></span>
                            </div>
                            {/* Input Price  */}
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100 p-0">
                                    Price
                                </span>
                                <input
                                    required
                                    ref={priceRef}
                                    className="input100 book-input"
                                    type="number"
                                    name="price"
                                    placeholder="Enter offer price"
                                />
                                <span className="focus-input100 fa"></span>
                            </div>
                            {/* Input Image Url  */}
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100 p-0">
                                    Image url
                                </span>
                                <input
                                    required
                                    ref={imageRef}
                                    className="input100 book-input"
                                    type="text"
                                    name="imageUrl"
                                    placeholder="Enter image url"
                                />
                                <span className="focus-input100 fa"></span>
                            </div>
                            {/* Input Details Image  */}
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100 p-0">
                                    Second Image Url
                                </span>
                                <input
                                    required
                                    ref={detailsImageRef}
                                    className="input100 book-input"
                                    type="text"
                                    name="detailsImage"
                                    placeholder="Enter second image url"
                                />
                                <span className="focus-input100 fa"></span>
                            </div>
                            {/* Input Description */}
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100 p-0">
                                    Description
                                </span>
                                <textarea
                                    required
                                    ref={descriptionRef}
                                    className="input100 book-address book-input"
                                    type="text"
                                    name="description"
                                    placeholder="Enter place description"
                                />
                                <span className="focus-input100 fa"></span>
                            </div>
                            {/* Input Details */}
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100 p-0">
                                    Details
                                </span>
                                <textarea
                                    required
                                    ref={detailsRef}
                                    className="input100 book-input book-address"
                                    type="text"
                                    name="details"
                                    placeholder="Enter tour details"
                                />
                                <span className="focus-input100 fa"></span>
                            </div>
                            {/* Input Tour Duration */}
                            <div className="d-flex align-items-end">
                                <div className="wrap-input100 validate-input">
                                    <span className="label-input100 p-0">
                                        Duration
                                    </span>
                                    <input
                                        required
                                        ref={daysRef}
                                        className="input100 book-input book-address"
                                        type="number"
                                        name="days"
                                        placeholder="Enter days"
                                    />
                                    <span className="focus-input100 fa"></span>
                                </div>
                                <div className="wrap-input100 validate-input">
                                    <input
                                        required
                                        ref={nightsRef}
                                        className="input100 book-input book-address"
                                        type="number"
                                        name="nights"
                                        placeholder="Enter nights"
                                    />
                                    <span className="focus-input100 fa"></span>
                                </div>
                            </div>

                            <div className="container-login100-form-btn mt-4">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <input
                                        type="submit"
                                        value="ADD OFFER"
                                        className="login100-form-btn book-btn"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;
