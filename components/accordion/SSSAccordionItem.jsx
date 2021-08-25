import React, { useState, useEffect } from "react";

function SSSAccordionItem(props) {
    const { data } = props;

    const [collapse, setCollapse] = useState(data.collapse);

    return (
        <div
            className="sss-accordion-item bg-gray-100 px-8 py-4 mb-4"
            data-collapse={collapse}
        >
            <div
                className="sss-accordion-header py-4"
                onClick={() => setCollapse(!collapse)}
            >
                <label
                    htmlFor="faq-1"
                    className="flex justify-between items-start cursor-pointer"
                >
                    <div className="sss-accordion-title text-blue-900 font-semibold text-lg">
                        {data.title}
                    </div>
                    <div className="sss-accordion-control"></div>
                </label>
            </div>

            <div className="sss-accordion-body">{data.body}</div>
        </div>
    );
}

export default SSSAccordionItem;
