const ApartmentSpec = ({ index, label, value }: {
    index: number,
    label: string,
    value: string|number,
}) => {
    return (
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden card-container spec" key={index}>
            <div className="p-6">
                <p className="leading-none text-gray-700 text-base mb-4 capitalize">
                    {label}
                </p>
                <h3 className=" font-bold mb-2 text-center">{value}</h3>
            </div>
        </div>
    );
}

export default ApartmentSpec;