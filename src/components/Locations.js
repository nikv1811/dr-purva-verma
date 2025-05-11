import MapCard from './MapCard';
import locationsData from '../assets/locations/locations.json';
const Locations = () => {

    return (
        <div className='relative z-10 max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-16'>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center w-full col-span-full">Or visit us at...</h2>
            {locationsData.map((location) => (
                <MapCard
                    key={location.id}
                    title={location.title}
                    mapEmbed={location.mapEmbed}
                    address={location.address}
                    timings={location.timings}
                    description={location.description}
                />
            ))}
        </div>
        // </section>
    );
};

export default Locations;