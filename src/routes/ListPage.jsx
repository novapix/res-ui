import { listData } from "../lib/dummydata";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Map from "../components/Map";

function ListPage() {
    const data = listData;

    return (
        <div className="flex min-h-screen">
            <div className="flex-3 h-full">
                <div className="h-full pr-12 flex flex-col gap-12 overflow-y-scroll pb-12">
                    <Filter />
                    {data.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>

            <div className="flex-2 h-full bg-[#fcf5f3] hidden md:block">
                <Map items={data} />
            </div>
        </div>
    );
}

export default ListPage;
