import React, { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./Form.css";

const Form = (props) => {
    const { user } = useAuth();
    const { _id, name, price, days, nights } = props.data;
    const phoneRef = useRef(null);
    const addressRef = useRef(null);
    const [checkOrder, setCheckOrder] = useState(false);

    //   Find if this is already booked
    useEffect(() => {
        fetch(
            `https://travel-guru-server-rho-two.vercel.app/booked?userEmail=${user.email}&&id=${_id}`
        )
            .then((res) => res.json())
            .then((data) => setCheckOrder(Boolean(data.res)));
    }, [_id, user.email]);
    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        fetch("https://travel-guru-server-rho-two.vercel.app/booked", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                id: _id,
                userName: user.displayName,
                userEmail: user.email,
                destinationName: name,
                price: price,
                days: days,
                nights: nights,
                phone: phone,
                address: address,
                status: "PENDING",
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setCheckOrder(data);
                props.added();
                phoneRef.current.value = "";
                addressRef.current.value = "";
            });
    };

    //   Handle name and email input
    const [userName, setUserName] = useState(user.displayName);
    const [userEmail, setUserEmail] = useState(user.email);
    const handleName = (e) => {
        setUserName(e.target.value);
    };
    const handleEmail = (e) => {
        setUserEmail(e.target.value);
    };
    return (
        <div>
            <div className="limiter book-limiter">
                <div className="container-login100 align-items-start py-0">
                    <div className="wrap-login100">
                        <form
                            className="login100-form validate-form"
                            onSubmit={handleSubmit}
                        >
                            {/* Input Name  */}
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100 p-0">Name</span>
                                <input
                                    required
                                    onChange={handleName}
                                    className="input100 book-input"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={userName}
                                />
                                <span className="focus-input100 fa"></span>
                            </div>
                            {/* Input Email  */}
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100 p-0">
                                    Email
                                </span>
                                <input
                                    required
                                    onChange={handleEmail}
                                    className="input100 book-input"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={userEmail}
                                />
                                <span className="focus-input100 fa"></span>
                            </div>
                            {/* Input Phone Number  */}
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100 p-0">
                                    Phone No.
                                </span>
                                <input
                                    required
                                    ref={phoneRef}
                                    className="input100 book-input"
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                />
                                <span className="focus-input100 fa"></span>
                            </div>
                            {/* Input for address  */}
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100 p-0">
                                    Address
                                </span>
                                <textarea
                                    required
                                    ref={addressRef}
                                    className="input100 book-input book-address"
                                    type="text"
                                    name="address"
                                    placeholder="Enter your address"
                                />
                                <span className="focus-input100 fa"></span>
                            </div>

                            <div className="container-login100-form-btn mt-4">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    {checkOrder ? (
                                        <input
                                            disabled
                                            type="submit"
                                            value="ALREADY BOOKED"
                                            className="login100-form-btn book-btn"
                                        />
                                    ) : (
                                        <input
                                            type="submit"
                                            value="BOOK NOW"
                                            className="login100-form-btn book-btn"
                                        />
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
