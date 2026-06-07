import ServiceDetail from "../components/ServiceDetail";
import whole from '../assets/images/whole.jpg'

function Whole() {
    return (
        <ServiceDetail
            image={whole}
            title="Whole Home Interior Painting"
            description="Transform your entire home with a complete interior repaint. This service is ideal for renovations, moving into a new home, or updating outdated colours."
            includes={[
                "All rooms painted",
                "Trim and baseboards",
                "Surface preparation",
                "Final cleanup"
            ]}
        />
    );
}

export default Whole;