import React from "react";

const BoxExperience = ({ date, organization, description }) => {
    return (
        <div>
            <div className="flex gap-10 mt-10 justify-between">
                <div className="flex flex-col gap-5 w-4/6">
                    <p className="text-xl font-semibold">{organization}</p>
                    <p className="text-sm">{date}</p>
                </div>
                <p>
                    <p className="">{description}</p>
                </p>
            </div>
        </div>
    )
}

export default BoxExperience;