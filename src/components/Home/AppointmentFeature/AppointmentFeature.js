import React from 'react';
import Flat1 from '../../../images/Flat1.jpg';
import Flat2 from "../../../images/Flat2.jpg";
import Flat3 from "../../../images/Flat3.jpg";
import Flat4 from "../../../images/Flat4.jpg";
import AppointmentFeatureDetails from '../AppointmentFeatureDetails/AppointmentFeatureDetails';

const AppointmentFeature = () => {
    const featureInfo = [
        {
            appointmentHeading:'Boutique Space Greenville',
            image: Flat1,
            price:'৳ 85,50,000',
            description: 'Downtown Frederick hot spot. Top location for local entertainment. All fixtures are included. Liquor license can be included. Price includes 3 leased apartments on the second floor income $2,200 per month.[more]'
        },
        {
            appointmentHeading:'Boutique Space Greenville',
            image:Flat2,
            price:'৳ 85,50,000',
            description: 'Downtown Frederick hot spot. Top location for local entertainment. All fixtures are included. Liquor license can be included. Price includes 3 leased apartments on the second floor income $2,200 per month.[more]'
        },
        {
            appointmentHeading:'Boutique Space Greenville',
            image:Flat3,
            price:'৳ 85,50,000',
            description: 'Downtown Frederick hot spot. Top location for local entertainment. All fixtures are included. Liquor license can be included. Price includes 3 leased apartments on the second floor income $2,200 per month.[more]'
        },
        {
            appointmentHeading:'Boutique Space Greenville',
            image:Flat4,
            price:'৳ 85,50,000',
            description: 'Downtown Frederick hot spot. Top location for local entertainment. All fixtures are included. Liquor license can be included. Price includes 3 leased apartments on the second floor income $2,200 per month.[more]'
        },
    ]
    
    return (
        <div>
            {
                featureInfo.map(feature=><AppointmentFeatureDetails feature={feature}></AppointmentFeatureDetails>)
            }
        </div>
    );
};

export default AppointmentFeature;