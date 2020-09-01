import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faCalendar, faChartLine } from '@fortawesome/free-solid-svg-icons'

const AdditionalFeatures = () => {

    const [features, setFeatures] = useState([
        {
            title: "Schedule",
            description: "Schedule your workouts ahead of time and plan strategically.",
            icon: faCalendar
        },
        {
            title: "Stats",
            description: "Revisit previous workouts and observe your growth",
            icon: faChartLine
        },
        {
            title: "Templates",
            description: "Create templates of your favorite workouts to schedule with ease.",
            icon: faFileAlt
        },
    ])

    return (
        <div className="additional-root-wrap">
            <div className="additional-outer-wrap">
                <div className="additional-wrap">
                    {features.map(feature => (
                        <div className="additional-wrap-contents">
                            <p className="additional-title">{feature.title}</p>
                            <FontAwesomeIcon className="additional-icon" icon={feature.icon} />
                            <p className="additional-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdditionalFeatures