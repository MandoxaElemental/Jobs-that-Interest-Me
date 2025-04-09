import { TabItem, Tabs } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <div className="overflow-x-auto">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <TabItem active title="Nvidia" >
          <div className="flex justify-center">
        <Image src={"/assets/Nvidia.png"} alt='nvidia' width={200} height={30}/>
          </div>
          <div className="p-10">
            <Link href={''}>Job Opportunity</Link>
          </div>
        </TabItem>
        <TabItem title="Intel">
        <div className="flex justify-center">
        <Image src={"/assets/Intel.png"} alt='intel' width={200} height={30}/>
          </div>
          <div className="p-10">
            <Link href={''}>Job Opportunity</Link>
          </div>
        </TabItem>
        <TabItem title="Costco">
        <div className="flex justify-center">
        <Image src={"/assets/Costco.png"} alt='costco' width={200} height={30}/>
          </div>
          <div className="p-10">
            <Link href={''}>Job Opportunity</Link>
          </div>
        </TabItem>
        <TabItem title="Rakuten">
        <div className="flex justify-center">
        <Image src={"/assets/Rakuten.png"} alt='rakuten' width={200} height={30}/>
          </div>
          <div className="p-10">
          <Link href={'https://rakuten.wd1.myworkdayjobs.com/en-US/RakutenRewards/details/Software-Engineer---Web_1026157?q=frontend'}>Job Opportunity</Link>
          </div>
        </TabItem>
        <TabItem title="Tesla">
        <div className="flex justify-center">
        <Image src={"/assets/Tesla.png"} alt='tesla' width={200} height={30}/>
          </div>
          <div className="p-10">
          <Link href={'https://www.tesla.com/careers/search/job/internship-backend-software-engineer-diagnostics-fall-2025--240872'}>Job Opportunity</Link>
          </div>
        </TabItem>
      </Tabs>
    </div>
    </div>
  );
}
