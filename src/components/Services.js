import React from 'react';
import { Link } from 'react-router-dom';
import serviceGroupsData from '../resourceData/serviceGroups';

const Services = () => {
    return (
        <section id="services" className="py-16 px-4 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
                <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Explore our main service categories. Each group opens to a curated list of treatment options offered by Dr. Purva Verma.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {serviceGroupsData.map((group) => (
                        <Link key={group.id} to={`/services/${group.slug}`} className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800">{group.title}</h3>
                                <p className="mt-3 text-gray-600 leading-relaxed">{group.description}</p>
                                <div className="mt-5 inline-flex items-center font-semibold text-emerald-600">
                                    Explore services
                                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="w-2/3 h-px bg-gray-300 mx-auto mt-12"></div>
        </section>
    );
};

export default Services;