import ServiceDetail from "../components/ServiceDetail";
import retail from '../assets/images/retail.jpg'

function Retail() {
    return (
        <ServiceDetail
            image={retail}
            title="Retail Store Painting"
            description="Improve the appearance of your retail space and create a welcoming environment for customers."
            includes={[
                "Interior painting",
                "Exterior painting",
                "Feature walls",
                "Minimal disruption to business operations"
            ]}
        />
    );
}

export default Retail;