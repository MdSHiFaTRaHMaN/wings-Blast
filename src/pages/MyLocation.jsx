import FindLocation from "../components/FindLocation";

const MyLocation = () => {
    return (
        <section className="bg-white">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                    <div>
                       <FindLocation></FindLocation>
                    </div>
                    <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                        <iframe width="100%" height="600" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3176555.1867630924!2d-77.84453647741707!3d38.96727779702811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNew%20Yorker!5e0!3m2!1sen!2sus!4v1729453362319!5m2!1sen!2sus" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyLocation;