import ServiceDetail from "../components/ServiceDetail";
import exterior from '../assets/images/exterior.jpg'

function Exterior() {
    return (
        <ServiceDetail
            image={exterior}
            title="Exterior House Painting"
            description="Protect and refresh your home's exterior with high-quality paint designed to withstand Canadian weather conditions."
            includes={[
                "Exterior surface preparation",
                "Pressure washing",
                "Professional paint application",
                "Cleanup and inspection"
            ]}
        />
    );
}

export default Exterior;