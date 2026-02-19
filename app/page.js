import Hero from "@/components/Landingpage/Hero";
import Whychoose from "@/components/Landingpage/Whychoose";

import AboutUs from "@/components/Landingpage/About";
import Products from "@/components/Landingpage/Products";
// import ProductCategorySection from "@/components/Landingpage/Categories";
import Cta from "@/components/Landingpage/Cta";
// import Popup from "@/components/Popup"
// import Enquiry from "@/components/Enquiry"


import Letter from "@/components/Landingpage/Letter";
import PremiumTablesSection from "@/components/Landingpage/Premium";

import Soccer from "@/components/Landingpage/Soccer";

import Faq from "@/components/Landingpage/Faq";





export default function Home() {
  return (
<>


{/* <Popup></Popup> */}
<Hero></Hero> 
{/* <ProductCategorySection></ProductCategorySection> */}

{/* <Enquiry></Enquiry> */}
<AboutUs></AboutUs>
{/* <Products></Products> */}
<Soccer></Soccer>

<Whychoose></Whychoose>
{/* <Cta></Cta> */}
{/* <Cta2></Cta2> */}
<Letter></Letter>
{/* <PremiumTablesSection></PremiumTablesSection> */}






{/* <Formsection></Formsection> */}


<Faq></Faq>

</>
  );
}
