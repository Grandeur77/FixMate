import React from 'react';
import { FaCheckCircle, FaShieldAlt, FaStar, FaDollarSign } from 'react-icons/fa';

const About = () => {
    return (
        <div className="bg-gradient-to-b from-blue-200 via-blue-100 to-sky-100 min-h-screen flex flex-col p-6">
            {/* Header with gradient background */}
            <header className="bg-gradient-to-r from-blue-900 via-blue-300 to-blue-200 shadow-md py-4 mb-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-sky-700 to-blue-900">
                    About FixMate
                </h1>
            </header>

            <main className="flex-grow">
                {/* Mission Section with gradient background and hover effects */}
                <section className="bg-gradient-to-r from-blue-200 via-sky-200 to-blue-300 p-6 rounded-lg shadow-md mb-6 transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 transition-transform transform hover:scale-105 duration-300">
                        Our Mission
                    </h2>
                    <p className="text-gray-600 mb-4 transition-transform transform hover:scale-105 duration-300">
                        At FixMate, we are dedicated to streamlining the way services are delivered and received by connecting individuals with trusted professionals across a range of needs. Our platform is built on the values of convenience, reliability, and excellence, ensuring that every interaction on FixMate moves you one step closer to getting the job done right.                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gold mb-4 transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-transform transform hover:scale-105 duration-300">
                            Key Principles
                        </h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li className="flex items-center mb-2 transition-transform transform hover:scale-105 duration-300">
                                <FaCheckCircle className="text-gold hover:text-red-500 transition-colors duration-300 mr-2" />
                                <span><strong>Efficiency:</strong> Streamlined processes for quick and easy interactions.</span>
                            </li>
                            <li className="flex items-center mb-2 transition-transform transform hover:scale-105 duration-300">
                                <FaShieldAlt className="text-gold hover:text-red-500 transition-colors duration-300 mr-2" />
                                <span><strong>Trust:</strong> Transparent practices to ensure a secure experience.</span>
                            </li>
                            <li className="flex items-center mb-2 transition-transform transform hover:scale-105 duration-300">
                                <FaStar className="text-gold hover:text-red-500 transition-colors duration-300 mr-2" />
                                <span><strong>Quality:</strong> A commitment to excellence in every project.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Vision Section with gradient background */}
                <section className="bg-gradient-to-r from-blue-300 via-sky-200 to-blue-200 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                    <p className="text-gray-600 mb-4">
                        Bridging the gap between talent and opportunity, FixMate strives to redefine how people collaborate—creating a dynamic ecosystem where quality, trust, and innovation drive every successful partnership. </p>
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gold">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Us?</h3>
                        <table className="min-w-full text-left text-gray-600">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="py-2 px-4 border-b">Feature</th>
                                    <th className="py-2 px-4 border-b">Benefit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="transform hover:scale-105 transition-transform duration-300">
                                    <td className="py-2 px-4 border-b flex items-center">
                                        <FaDollarSign className="text-gold hover:text-red-500 transition-colors duration-300 mr-2" />
                                        Efficient Matching
                                    </td>
                                    <td className="py-2 px-4 border-b">Quickly find the right freelancer for your needs.</td>
                                </tr>
                                <tr className="transform hover:scale-105 transition-transform duration-300">
                                    <td className="py-2 px-4 border-b flex items-center">
                                        <FaShieldAlt className="text-gold hover:text-red-500 transition-colors duration-300 mr-2" />
                                        Secure Transactions
                                    </td>
                                    <td className="py-2 px-4 border-b">Safe and transparent payment processes.</td>
                                </tr>
                                <tr className="transform hover:scale-105 transition-transform duration-300">
                                    <td className="py-2 px-4 border-b flex items-center">
                                        <FaStar className="text-gold hover:text-red-500 transition-colors duration-300 mr-2" />
                                        Quality Assurance
                                    </td>
                                    <td className="py-2 px-4 border-b">High standards for all freelancers and projects.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            {/* Footer with blended background */}
            <footer className="bg-gradient-to-r from-blue-900 via-sky-300 to-blue-900 text-white py-4 mt-6 rounded-lg">
                <div className="container mx-auto text-center">
                    <p>Thank you for growing with us. At FixMate, we believe in building meaningful connections and remain dedicated to creating a space where professionals and clients succeed together.</p>
                </div>
            </footer>
        </div>
    );
}

export default About;


