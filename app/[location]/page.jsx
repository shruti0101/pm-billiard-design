import { serviceCity } from "@/Data";
import { notFound } from "next/navigation";
import Location from "./Location";


export async function generateMetadata({ params }) {
    const { location } = await params;

    const rawCity = location.split("in-").pop();

    const cityName = rawCity
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    return {
        title: `Billiard Table in ${cityName} | Pool & Snooker Table `,
        description: `Looking for a billiard table in  ${cityName} PM Billiards offers premium pool, snooker & billiard tables with customization, delivery & installation.`,
    };
}

const Page = async ({ params }) => {
    const { location } = await params;
    const validCity = serviceCity.find(
        (c) => c.href.replace("/", "") === location
    );

    if (!validCity) {
        notFound();
    }
    let city =location.split("in-")
    console.log(city)
    city=city[1].replace("-"," ")
    console.log(city)

    return <Location city={city} />;
};

export default Page;