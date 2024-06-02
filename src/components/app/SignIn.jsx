import React, { useState } from 'react'; // Correct import statement
import '../css/SignIn.css'; // Importing the CSS file

const SignIn = () => {
    // State to manage form type (login or signup)
    const [formType, setFormType] = useState('login');

    return (
        <>
            <div className="wrapper">
                <div className="title-text">
                    <div className={`title ${formType}`}>{formType === 'login' ? 'Login' : 'Signup'}</div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input
                            type="radio"
                            name="slide"
                            id="login"
                            checked={formType === 'login'}
                            onChange={() => setFormType('login')}
                        />
                        <input
                            type="radio"
                            name="slide"
                            id="signup"
                            checked={formType === 'signup'}
                            onChange={() => setFormType('signup')}
                        />
                        <label htmlFor="login" className="slide login">Login</label>
                        <label htmlFor="signup" className="slide signup">Signup</label>
                        <div className="slider-tab"></div>
                    </div>
                    <div className="form-inner">
                        <form action="#" className="login" style={{ display: formType === 'login' ? 'block' : 'none' }}>
                            <div className="field">
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="pass-link"><a href="#">Forgot password?</a></div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Login" />
                            </div>
                            <div className="signup-link">Sign up if not yet registered! </div>
                        </form>
                        <form action="#" className="signup" style={{ display: formType === 'signup' ? 'block' : 'none' }}>
                            <div className="field">
                                <input type="text" placeholder="Name" required />
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Email Address" required />
                            </div>
                         <div className="field">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Confirm password" required />
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
