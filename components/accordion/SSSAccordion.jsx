import React from "react";
import SSSAccordionItem from "./SSSAccordionItem";

function SSSAccordion(props) {
    return (
        <div className="sss-accordion">
            {props.items.map((item, index) => (
                <SSSAccordionItem data={item} key={index} />
            ))}
        </div>
    );
}

export default SSSAccordion;
