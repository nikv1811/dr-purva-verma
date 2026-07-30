import MapCard from './MapCard';
import locationsData from '../assets/locations/locations.json';

const Locations = () => {
    return (
        <div className='relative z-10 w-full h-full'>
            <div className="grid h-full grid-cols-1 gap-8 md:gap-16">
                {locationsData.map((location) => (
                    <MapCard
                        key={location.id}
                        title={location.title}
                        mapEmbed={location.mapEmbed}
                        address={location.address}
                        description={location.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Locations;