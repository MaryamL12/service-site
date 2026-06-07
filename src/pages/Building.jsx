import ServiceDetail from "../components/ServiceDetail";
import building from '../assets/images/building.jpg'

function Building() {
    return (
        <ServiceDetail
            image={building}
            title="Commercial Building Painting"
            description="Large-scale painting solutions for commercial properties and business facilities."
            includes={[
                "Interior and exterior painting",
                "Surface preparation",
                "Safety-compliant work practices",
                "Project completion review"
            ]}
        />
    );
}

export default Building;