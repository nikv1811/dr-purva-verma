import React from 'react';

const OnlineConsultation = () => {
    // Replace with your actual Google Forms URL
    const googleFormsUrl = "https://docs.google.com/forms/d/e/1FAIpQLScUylFRvvCyzQCrPgdS94DL2okJ4dlvUS_y69Qzcpl7Qw6Lzg/viewform?embedded=true";

    return (
        // <section id="onlineconsultation" className=" px-4 bg-gray-100">
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 mx-auto flex flex-col items-center gap-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center w-full">Book your consultation with us (worldwide)</h2>
            {/* Left Card: Google Forms Embed */}
            <div className="w-full rounded-lg shadow-lg overflow-hidden">
                <iframe
                    src={googleFormsUrl}
                    width="100%"
                    height="400"
                    title="Consultation Form"
                    className="rounded-lg"
                >
                    Loading...
                </iframe>
            </div>

        </div>
        // </section>
    );
};

export default OnlineConsultation;
