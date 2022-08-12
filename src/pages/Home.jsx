import React from 'react'

export default function Home() {
    return (
        <>
        {/* logo section start */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="card border-0 bg">
                           <div className="d-flex justify-content-center image">
                            <img className='img' src="/image/logo.png" alt="" height={160} width={600} />
                           </div>
                        </div>
                    </div>
                </div>
                {/* logo section end */}
                {/* side by side  two cotaint start */}
                <div className="row">
                    <div className="col-md-4 col-sm-8">
                        <div className="card border-0 bg">
                            <div className="card-body">
                            <div className="d-flex justify-content-center image1">
                                <img src="/image/1.png" alt="" height={565} width={300} />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <div className="card border-0 bg">
                            <strong> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong>
                            <div className="card-body">
                            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                            <div className="d-flex justify-content-center">
                            <img className='img-fluid' src="/image/2.png" alt="" height={450} width={800} />
                            </div>
                            <p>	Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* side by side  two cotaint end */}
                    {/* second part electronic content start */}
                    <div className="card border-0 bg">
                        <div className="card-body">
                            <div className="align-items-center">
                                <div className="d-flex">
                                    <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
                                </div>
                                <div className="d-flex justify-content-center image3">
                                    <img src="/image/3.png" alt="" height={400} />
                                </div>
                                <p className="my-3 text-center">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
                                </p>
                                <hr style={{border:"2px solid red"}} />
                                <p className='text-center'><strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong></p>
                                <p className="text-center">CHEMICALS <span style={{borderLeft:"2px solid red"}}></span> PROCESS POWER WATER <span style={{borderLeft:"2px solid red"}}></span> WASTE WATER OILS <span style={{borderLeft:"2px solid red"}}></span> GAS PHARMA SUGARS <span style={{borderLeft:"2px solid red"}}></span> DISTILLERIES PAPER <span style={{borderLeft:"2px solid red"}}></span> PULP MARINE <span style={{borderLeft:"2px solid red"}}></span> DEFENCE METAL <span style={{borderLeft:"2px solid red"}}></span> MINING FOOD <span style={{borderLeft:"2px solid red"}}></span> BEVERAGE PETROCHEMICAL<span style={{borderLeft:"2px solid red"}}></span>REFINERIES SOLAR BUILDING<span style={{borderLeft:"2px solid red"}}></span>HVAC<span style={{borderLeft:"2px solid red"}}></span>FIRE<span style={{borderLeft:"2px solid red"}}></span>FIGHTING<span style={{borderLeft:"2px solid red"}}></span>AGRICULTURE<span style={{borderLeft:"2px solid red"}}></span>RESIDENTIAL
                            </p>
                            </div>
                            <div className="card backgrounds">
                                <div className="card-body backgrounds">
                                    <div className="row">
                                        <div className="col-sm-4 col-md-4 text-light backgrounds">
                                        <span className='text-dark bg-none'><i className="bi bi-telephone">&nbsp;&nbsp;</i> Toll free 1800 200 1234</span>
                                        </div>
                                        <div className="col-sm-4 col-md-4 text-light backgrounds">
                                        <span className='text-dark bg-none'><i className="bi bi-facebook">&nbsp;&nbsp;</i> www.facebook.com/crimpums</span>
                                        </div>
                                        <div className="col-sm-4 col-md-4 text-light backgrounds">
                                        <span className='text-dark bg-none'><i className="bi bi-globe2">&nbsp;&nbsp;</i> www.crigroups.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* electronic content end */}
                </div>
                {/* side by side  two cotaint end */}
        </>
    )
}
