import React from 'react'
import {Link, useLocation} from "react-router-dom"

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    
    return (
        <footer className={`${isHomePage ? 'homePage_footer' : 'otherPage_footer'} bg-custom-dark text-white py-16`}>
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h4 className="text-2xl font-bold font-rufina text-custom-gray">PROPERTY RENTAL</h4>
                        <p className="text-custom-gray leading-relaxed">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sed quae vel illo iste, amet adipisci ad dolorem voluptatem ea doloribus labore accusamus explicabo maiores minus, excepturi est dolorum ullam?
                        </p>
                        <ul className="flex flex-wrap gap-6">
                            <li>
                                <Link to={'/'} className="text-custom-gray hover:text-white transition-colors">Home</Link>    
                            </li>
                            <li>
                                <Link to={'/termsandconditions'} className="text-custom-gray hover:text-white transition-colors">Terms And Conditions</Link>    
                            </li>
                            <li>
                                <Link to={'/contact'} className="text-custom-gray hover:text-white transition-colors">Contact</Link>    
                            </li>    
                        </ul>    
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-2xl font-bold font-rufina text-custom-gray">Connect with us</h4>
                        <p className="text-custom-gray">+91 000 000 0000</p>
                        <p className="text-custom-gray">rs@gmail.com</p>
                        <p className="text-custom-gray mt-8">All Rights Reserved By RS</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer