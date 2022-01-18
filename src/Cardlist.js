import React from "react";
import Card from "./Card";

const Cardlist = ({ Robots }) => {
    const CardArray = Robots.map((user, i) => {
        return (
            <Card
                key={i}
                id={Robots[i].id}
                name={Robots[i].name}
                email={Robots[i].email}
            />
        );
    });
    return <div>{CardArray}</div>;
};
export default Cardlist;
