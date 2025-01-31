import React from "react";
import Card from "./Card";
import { listData } from "../lib/dummydata";

function List() {
    return (
        <div className="flex flex-col gap-12">
            {listData.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
}

export default List;
