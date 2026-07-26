import React from 'react';
import { Link, useParams } from 'react-router-dom';
import serviceGroupsData from '../resourceData/serviceGroups';

const ServiceCategoryPage = () => {
    const { categorySlug } = useParams();
    const group = serviceGroupsData.find((item) => item.slug === categorySlug);

    if (!group) {
        return (
            <section className="py-20 px-4 bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Service group not found</h1>
                    <p className="text-gray-600">Please return to the homepage and choose a service group.</p>
                    <Link to="/" className="inline-block mt-6 rounded-full bg-emerald-600 px-5 py-3 text-white font-semibold">
                        Back to Home
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 px-4 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <a href="/#services" className="text-emerald-700 font-semibold hover:underline">
                    ← Back to all services
                </a>

                <div className="mt-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{group.title}</h1>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">{group.description}</p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {group.services.map((service) => (
                        <Link key={service.slug} to={`/services/${group.slug}/${service.slug}`} className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
                            <div className="flex h-full flex-col">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">{service.shortDescription}</p>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <span className="text-sm font-semibold text-emerald-600">Learn more →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCategoryPage;
