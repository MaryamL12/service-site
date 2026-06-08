import ServiceDetail from "../components/ServiceDetail";
import interior from '../assets/images/interior.jpg'

function Interior() {
    return (
        <ServiceDetail
            image={interior}
            title="Interior Room Painting"
            description="Give any room in your home a fresh new look with our Interior Room Painting service. Whether you are updating a bedroom, living room, kitchen, or home office, our team provides clean and professional results."
            includes={[
                "Wall preparation",
                "Surface repairs and patching",
                "Professional paint application",
                "Complete cleanup after the project"
            ]}
        />
    );
}

export default Interior;