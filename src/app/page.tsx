import { TabItem, Tabs } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <div className="overflow-x-auto">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <TabItem active title="Nvidia" >
          <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#76B900] p-10">
          <div className="flex justify-center">
        <Image src={"/assets/Nvidia.png"} alt='nvidia' width={200} height={30}/>
          </div>
          <div className="px-20 py-5 text-center">
          <p className="font-semibold text-xl">NVIDIA pioneered accelerated computing to tackle challenges no one else can solve. Their work in AI and
          digital twins is transforming the worlds largest industries and profoundly impacting society.</p>
            <Link href={'#'} className="underline text-blue-600">Job Opportunity</Link>
          </div>
          </div>
        </TabItem>
        <TabItem title="Intel">
        <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#00C7FD] p-10">
        <div className="flex justify-center">
        <Image src={"/assets/Intel.png"} alt='intel' width={200} height={30}/>
          </div>
          <div className="px-20 py-5 text-center">
          <p className="font-semibold text-xl">Create world-changing technology that improves the life of every person on the planet.
            Intel underpins everyday life. We design and manufacture technology that helps us all connect, create, and achieve great things—together.</p>
            <Link href={'#'} className="underline text-blue-600">Job Opportunity</Link>
          </div>
        </div>
        </TabItem>
        <TabItem title="Rakuten">
        <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#BF0000] p-10">
        <div className="flex justify-center">
        <Image src={"/assets/Rakuten.png"} alt='rakuten' width={300} height={30} className="p-5"/>
          </div>
          <div className="px-20 py-5 text-center">
          <p className="font-semibold text-xl">Since their founding in 1999, Rakuten has helped shape the way people shop online, offering Cash Back, deals and shopping rewards on the worlds largest selection of products and services. To date, our 20M+ members in the U.S. have earned over $3.2B in Cash Back at their favorite stores.</p>
          <Link href={'https://rakuten.wd1.myworkdayjobs.com/en-US/RakutenRewards/details/Software-Engineer---Web_1026157?q=frontend'} className="underline text-blue-600">Job Opportunity</Link>
          </div>
        </div>
        </TabItem>
        <TabItem title="Tesla">
        <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#cc0000] p-10">
        <div className="flex justify-center">
        <Image src={"/assets/Tesla.png"} alt='tesla' width={300} height={30}/>
          </div>
          <div className="px-20 py-2 text-center">
          <p className="font-semibold text-xl">We design sustainable systems that are massively scalable—resulting in the greatest environmental benefit possible. Our energy generation and storage products work together with our electric vehicles to amplify their impact.</p>
          <Link href={'https://www.tesla.com/careers/search/job/internship-backend-software-engineer-diagnostics-fall-2025--240872'} className="underline text-blue-600">Job Opportunity</Link>
          </div>
        </div>
        </TabItem>
        <TabItem title="Costco">
        <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#0060A9] p-10">
        <div className="flex justify-center">
        <Image src={"/assets/Costco.png"} alt='costco' width={300} height={30} className="p-4"/>
          </div>
          <div className="px-20 py-5 text-center">
            <p className="font-semibold text-xl">Costco is a membership warehouse club, dedicated to bringing our members the best possible prices on quality brand-name merchandise. With hundreds of locations worldwide, Costco provides a wide selection of merchandise, plus the convenience of specialty departments and exclusive member services, all designed to make your shopping experience a pleasurable one.</p>
            <Link href={'#'} className="underline text-blue-600">Job Opportunity</Link>
          </div>
        </div>
        </TabItem>
      </Tabs>
    </div>
    </div>
  );
}
