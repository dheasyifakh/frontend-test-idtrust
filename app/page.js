import Hero from "./_components/Hero";
import Category from "./_components/Category";
import TabContent from "./_components/TabContent";
import Voucher from "./_components/Voucher";
import Discount from "./_components/Discount";
import Recommendation from "./_components/Recommendation";

export default function Home() {
  return (
   <div>
      <Hero/>
      <Category/>
      <TabContent/>
      <Voucher/>
      <Discount/>
      <Recommendation/>
   </div>
  );
}
