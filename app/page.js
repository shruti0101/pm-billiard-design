import Hero from "@/components/Landingpage/Hero";
import Whychoose from "@/components/Landingpage/Whychoose";

import AboutUs from "@/components/Landingpage/About";
import Products from "@/components/Landingpage/Products";
import ProductCategorySection from "@/components/Landingpage/Categories";
import Cta from "@/components/Landingpage/Cta";
// import Popup from "@/components/Popup"

import Letter from "@/components/Landingpage/Letter";
import PremiumTablesSection from "@/components/Landingpage/Premium";

import Soccer from "@/components/Landingpage/Soccer";

import Faq from "@/components/Landingpage/Faq";

export default function Home() {
  return (
    <>
      {/* <Popup></Popup> */}
      <Hero></Hero>
      <ProductCategorySection></ProductCategorySection>

      <AboutUs></AboutUs>
      <Products></Products>
      <Soccer></Soccer>

      <Whychoose></Whychoose>
      <Cta></Cta>

      <Letter></Letter>
      <PremiumTablesSection></PremiumTablesSection>

      <Faq></Faq>
    </>
  );
}
