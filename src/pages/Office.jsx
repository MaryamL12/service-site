import ServiceDetail from "../components/ServiceDetail";
import office from '../assets/images/office.jpg'

function Office() {
    return (
        <ServiceDetail
            image={office}
            title="Office Painting"
            description="Create a professional and welcoming workspace with our office painting services."
            includes={[
                "Office walls and ceilings",
                "Conference rooms",
                "Reception areas",
                "After-hours scheduling available"
            ]}
        />
    );
}

export default Office;