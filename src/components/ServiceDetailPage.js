import React from 'react';
import { Link, useParams } from 'react-router-dom';
import serviceGroupsData from '../resourceData/serviceGroups';

const ServiceDetailPage = () => {
    const { categorySlug, serviceSlug } = useParams();
    const group = serviceGroupsData.find((item) => item.slug === categorySlug);

    if (!group) {
        return null;
    }

    const service = group.services.find((item) => item.slug === serviceSlug);

    if (!service) {
        return (
            <section className="py-20 px-4 bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Service not found</h1>
                    <Link to={`/services/${group.slug}`} className="inline-block mt-6 rounded-full bg-emerald-600 px-5 py-3 text-white font-semibold">
                        Back to {group.title}
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 px-4 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <Link to={`/services/${group.slug}`} className="text-emerald-700 font-semibold hover:underline">
                    ← Back to {group.title}
                </Link>

                <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                    <h1 className="text-4xl font-bold text-gray-800">{service.title}</h1>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">{service.description}</p>

                    {service.highlights?.length > 0 && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-800">Key Highlights</h2>
                            <ul className="mt-4 space-y-3 text-gray-700">
                                {service.highlights.map((highlight, index) => (
                                    <li key={index} className="flex gap-3">
                                        <span className="text-emerald-600 font-bold">•</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailPage;
