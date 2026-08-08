import React from 'react';

const OnlineConsultation = () => {
    // Replace with your actual Google Forms URL
    const googleFormsUrl = "https://docs.google.com/forms/d/e/1FAIpQLScUylFRvvCyzQCrPgdS94DL2okJ4dlvUS_y69Qzcpl7Qw6Lzg/viewform?embedded=true";

    return (
        <div className="relative z-10 w-full h-full min-h-[420px] rounded-2xl bg-white p-6 shadow-lg md:p-8 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center w-full">Book your consultation with us (worldwide)</h2>
            <div className="w-full flex-1 min-h-[420px] overflow-hidden rounded-lg">
                <iframe
                    src={googleFormsUrl}
                    width="100%"
                    height="100%"
                    title="Consultation Form"
                    className="rounded-lg"
                >
                    Loading...
                </iframe>
            </div>
        </div>
    );
};

export default OnlineConsultation;
