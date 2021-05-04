import device from '../assets/Images/device.png'
import icon1 from '../assets/Images/trial-icon-1.png'
import SignupForm from '../components/SignupForm'

function SignupPage() {
    return (
        <div className="row">
            <div className="col-md-6">

                {/* head-info */}

                <div className="head-div container-fluid">
                    <div className="d-flex">
                        <div className="logo">
                            <h4>PandaBiz</h4>
                        </div>
                        <div className="head">
                            <span className="headfirst">Get Your FREE 30-Days Trial Now!</span><br />
                            <span className="headsecond">Sales Cloud - Professional Edition</span><br />
                            <span className="headpara">Experience why over 2 million customers choose Salesforce CRM</span>
                        </div>
                    </div>
                    <div className="main-img mt-3">
                        <img src={device} width="373px" />
                    </div>
                </div>

                {/* features */}

                <div className="features">
                    <div className="row justify-content-center">
                        <div className="col-md-6 mt-4">
                            <div className="icons-info d-flex">
                                <div className="icon">
                                    <img src={icon1} />
                                </div>
                                <div className="features-head" >
                                    <div className="features-heading flex-column">Absolutely FREE</div>
                                    <p className="features-details">No hidden charges, No credit card required</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className="icons-info d-flex">
                                <div className="icon">
                                    <img src={icon1} />
                                </div>
                                <div className="features-head">
                                    <div className="features-heading flex-column">Unlimited Features</div>
                                    <p className="features-details">Access all features of the world's #1 CRM!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 mt-4">
                            <div className="icons-info d-flex">
                                <div className="icon">
                                    <img src={icon1} />
                                </div>
                                <div className="features-head">
                                    <div className="features-heading flex-column">Fast & Easy</div>
                                    <p className="features-details">Get access instantly, no downloads required</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className="icons-info d-flex">
                                <div className="icon">
                                    <img src={icon1} />
                                </div>
                                <div className="features-head">
                                    <div className="features-heading flex-column">Your Own Data</div>
                                    <p className="features-details">Enjoy the Free Trial with your company data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact */}

                <div className="contact text-center mt-5">
                    <span className="contact-span">DO YOU PREFER TALKING TO A REPRESENTATIVE?</span>
                    <p>Call us at <b>000 800 001 6000</b></p>
                </div>
            </div>
            <div className="col-md-4"><SignupForm /></div>
        </div>

    )

}

export default SignupPage