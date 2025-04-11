import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, TabItem, Tabs } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Jobs() {
  return (
    <div>
    <div className="overflow-x-auto">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <TabItem active title="Nvidia" >
          <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#76B900] p-10">
          <div className="flex justify-center">
          <Link href={'https://www.nvidia.com/en-us/'}>
        <Image src={"/assets/Nvidia.png"} alt='nvidia' width={200} height={30}/>
          </Link>
          </div>
          <div className="px-20 py-5 text-center">
          <p className='pb-3 font-semibold text-lg'>Salary Range: $165,000 - $320,000</p>
          <p className="font-semibold text-xl pb-5">NVIDIA pioneered accelerated computing to tackle challenges no one else can solve. Their work in AI and
          digital twins is transforming the world`&apos;`s largest industries and profoundly impacting society.</p>

          <Accordion collapseAll className='bg-white'>
            <AccordionPanel>
            <AccordionTitle>Why do I Want to Work at: Nvidia?</AccordionTitle>
              <AccordionContent>
                <div className='p-2'>
                <ul className='list-disc text-left'>
                    <li>Headquarters located in Santa Clara</li>
                    <li>One of the leading tech companies in the industry</li>
                    <li>Great Benefits</li>
                    <li>Opportunity to make connections within the industry</li>
                </ul>
                </div>
              </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
              <AccordionTitle>Benefits</AccordionTitle>
              <AccordionContent>
                <ul className="grid grid-cols-2 text-left">
                  <li>
                    Basic Employee Life Insurance
                  </li>
                <li>
                  401{'(k)'}
                </li>
                <li>
                Health Savings Account
                </li>
                <li>
                Commuter Account
                </li>
                <li>
                Business Travel Accident Insurance
                </li>
                <li>
                Medical Plans
                </li>
                <li>
                LegalEase Legal Plan
                </li>
                <li>
                Home Loans
                </li>
                <li>
                Disability Insurance
                </li>
                <li>
                Vision Coverage
                </li>
                <li>
                Chubb Long Term Care
                </li>
                <li>
                Identity Theft Protection
                </li>
                <li>
                GuidanceResources EAP
                </li>
                <li>
                Dental Coverage
                </li>
                <li>
                Student Loan Repayment Program
                </li>
                <li>
                Basic Spouse/Child Life Insurance
                </li>
                <li>
                Flexible Spending Accounts
                </li>
                <li>
                Pet Insurance
                </li>
                <li>
                Basic AD&D Insurance
                </li>
                <li>
                Supplemental Employee and Spouse/Child Life Insurance
                </li>
                <li>
                Personal Loans
                </li>
                <li>
                Home and Family Care Support
                </li>
                <li>
                Critical Illness, Hospital & Accident Insurance
                </li>
                <li>
                Developmental Disabilities Support
                </li>
                <li>
                Expert Medical Services	 	 	 
                </li>
                <li>
                Donation Matching of up to $10,000 Each Year	 	 	 
                </li>
                <li>
                Company Gear Store	 	 	 
                </li>
                <li>
                Holidays, Free Days, and Paid Time Off	 	 	 
                </li>
                <li>
                Discounts for Fitness, Entertainment, and Other Services 
                </li>
                </ul>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
            <AccordionTitle>Personal Goals</AccordionTitle>
              <AccordionContent>
                <div className='p-2'>
                <ul className='list-disc text-left'>
                    <li>Make Connections</li>
                    <li>Use this as an opportunity to springboard into either a higher position or another company</li>
                    <li>Keep up to date with the latest developments in the industry</li>
                    <li>Further my Education</li>
                </ul>
                </div>
              </AccordionContent>
              </AccordionPanel>
          </Accordion>
          <div className='flex justify-center'>
            <div className='w-[500px] border-solid border-1 border-black p-5 m-2 rounded-xl shadow-lg/30 bg-slate-100'>
          <p className='p-3 text-xl font-semibold'>Software Engineer</p>
            <Link href={'https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/details/Software-Engineer_JR1991613?q=software+engineer'} className="underline text-blue-600">Job Opportunity</Link>
            <div className='flex justify-around py-5'>
              <Image src={"/assets/cpp.png"} alt='c++' width={50} height={50}/>
              <Image src={"/assets/python.png"} alt='python' width={50} height={50}/>
            </div>
            <p className="text-slate-500 text-left">Notes: Need to learn C++ and Python</p>
            </div>
            </div>
          </div>
          </div>
        </TabItem>
        <TabItem title="Intel">
        <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#00C7FD] p-10">
        <div className="flex justify-center">
        <Link href={'https://www.intel.com/content/www/us/en/homepage.html'}>
        <Image src={"/assets/Intel.png"} alt='intel' width={200} height={30}/>
        </Link>
          </div>
          <div className="px-20 py-5 text-center">
            <p className='pb-3 font-semibold text-lg'>Salary Range: $155,000 - $225,000 </p>
          <p className="font-semibold text-xl pb-5">Create world-changing technology that improves the life of every person on the planet.
            Intel underpins everyday life. We design and manufacture technology that helps us all connect, create, and achieve great things—together.</p>
            <Accordion collapseAll className='bg-white'>
            <AccordionPanel>
            <AccordionTitle>Why do I Want to Work at: Intel?</AccordionTitle>
              <AccordionContent>
                <div className='p-2'>
              <ul className='list-disc text-left'>
                    <li>Headquarters Located in Santa Clara</li>
                    <li>One of the leading tech companies in the industry</li>
                    <li>Lower skill ceiling to join compared with other companies</li>
                    <li>Great Benefits</li>
                    <li>Opportunity to make connections within the industry</li>
                </ul>
                </div>
              </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
              <AccordionTitle>Benefits</AccordionTitle>
              <AccordionContent>
                <ul className="grid grid-cols-2 text-left">
                <li>
                Annual & Quarterly Bonuses
                </li>
                <li>
                Stock Programs
                </li>
                <li>
                Retirement Programs
                </li>
                <li>
                Flexible Work Options
                </li>
                <li>
                Extra Vacation Boost
                </li>
                <li>
                Additional Leaves
                </li>
                <li>
                Sabatical Program
                </li>
                <li>
                Life-Long Learning and Tuition Assistance
                </li>
                <li>
                Job Rotations
                </li>
                <li>
                Relocation Services
                </li>
                <li>
                Recognitions
                </li>
                <li>
                Health Plans
                </li>
                <li>
                Holistic Wellness Services
                </li>
                <li>
                Employee Assistance Plan
                </li>
                <li>
                Family Building Benefits
                </li>
                <li>
                Family Support
                </li>
                <li>
                Education Benefits
                </li>
                <li>
                Peace of Mind
                </li>
                <li>
                Community Involvement
                </li>
                <li>
                Employee Resource Groups
                </li>
                </ul>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
            <AccordionTitle>Personal Goals</AccordionTitle>
              <AccordionContent>
                <div className='p-2'>
                <ul className='list-disc text-left'>
                    <li>Make Connections</li>
                    <li>Use this as an opportunity to springboard into either a higher position or another company</li>
                    <li>Keep up to date with the latest developments in the industry</li>
                    <li>Further my Education</li>
                </ul>
                </div>
              </AccordionContent>
              </AccordionPanel>
          </Accordion>
          <div className='flex justify-center'>
            <div className='w-[500px] border-solid border-1 border-black p-5 m-2 rounded-xl shadow-lg/30 bg-slate-100'>
          <p className='p-3 text-xl font-semibold'>Software Application Engineer</p>
            <Link href={'https://intel.wd1.myworkdayjobs.com/en-US/External/details/Software-Application-Engineer_JR0271818?q=frontend'} className="underline text-blue-600">Job Opportunity</Link>
            <div className='flex justify-around py-5'>
              <Image src={"/assets/c.png"} alt='c' width={50} height={50}/>
              <Image src={"/assets/cs.png"} alt='c#' width={50} height={50}/>
              <Image src={"/assets/cpp.png"} alt='c++' width={50} height={50}/>
              <Image src={"/assets/python.png"} alt='python' width={50} height={50}/>
            </div>
              <p className="text-slate-500 text-left">Notes: Need to learn C, C++ and Python</p>
            </div>
            </div>
          </div>
        </div>
        </TabItem>
        <TabItem title="Rakuten">
        <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#BF0000] p-10">
        <div className="flex justify-center">
        <Link href={'https://www.rakuten.com/'}>
        <Image src={"/assets/Rakuten.png"} alt='rakuten' width={300} height={30} className="p-5"/>
        </Link>
          </div>
          <div className="px-20 py-5 text-center">
          <p className='pb-3 font-semibold text-lg'>Salary Range: $96,500 to $165,000  </p>
          <p className="font-semibold text-xl pb-5">Since their founding in 1999, Rakuten has helped shape the way people shop online, offering Cash Back, deals and shopping rewards on the worlds largest selection of products and services. To date, our 20M+ members in the U.S. have earned over $3.2B in Cash Back at their favorite stores.</p>
          <Accordion collapseAll className='bg-white'>
          <AccordionPanel>
            <AccordionTitle>Why do I Want to Work at: Rakuten?</AccordionTitle>
              <AccordionContent>
                <div className='p-2'>
              <ul className='list-disc text-left'>
                    <li>Located in Japan; Opportunity to work internationally</li>
                    <li>Good Benefits</li>
                    <li>Further my horizons out of the US</li>
                </ul>
                </div>
              </AccordionContent>
              </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>Benefits</AccordionTitle>
              <AccordionContent>
                <ul className="grid grid-cols-2 text-left">
                <li>
                Employee pension insurance 
                </li>
                <li>
                Health insurance 
                </li>
                <li>
                Worker`&apos;`s accident compensation insurance 
                </li>
                <li>
                Unemployment insurance 
                </li>
                <li>
                Annual paid leave
                </li>
                <li>
                Bereavement leave
                </li>
                <li>
                Commuting allowance 
                </li>
                <li>
                Retirement benefit system 
                </li>
                <li>
                Welfare services {'(Relo Club)'}
                </li>
                <li>
                Health counseling services 
                </li>
                <li>
                Relocation support {'(visa support, moving)'} 
                </li>
                <li>
                Employee discounts {'(moving, language classes, etc.)'}
                </li>
                </ul>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
            <AccordionTitle>Personal Goals</AccordionTitle>
              <AccordionContent>
                <div className='p-2'>
                <ul className='list-disc text-left'>
                    <li>Make International Connections</li>
                    <li>Work out of the US for at least a year</li>
                    <li>Learn a second language</li>
                    <li>Further my Education</li>
                </ul>
                </div>
              </AccordionContent>
              </AccordionPanel>
          </Accordion>
          <div className='flex justify-center'>
            <div className='w-[500px] border-solid border-1 border-black p-5 m-2 rounded-xl shadow-lg/30 bg-slate-100'>
          <p className='p-3 text-xl font-semibold'>Software Engineer - Web</p>
          <Link href={'https://rakuten.wd1.myworkdayjobs.com/en-US/RakutenRewards/details/Software-Engineer---Web_1026157?q=frontend'} className="underline text-blue-600">Job Opportunity</Link>
            <div className='flex justify-around py-5'>
              <Image src={"/assets/java.png"} alt='java' width={50} height={50}/>
              <Image src={"/assets/python.png"} alt='python' width={50} height={50}/>
              <Image src={"/assets/golang.png"} alt='golang' width={50} height={25}/>
            </div>
              <p className="text-slate-500 text-left">Notes: Need to learn Java, Python, and Go</p>
            </div>
            </div>
          </div>
        </div>
        </TabItem>
        <TabItem title="Tesla">
        <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#cc0000] p-10">
        <div className="flex justify-center">
        <Link href='https://www.tesla.com/'>
        <Image src={"/assets/Tesla.png"} alt='tesla' width={300} height={30}/>
        </Link>
          </div>
          <div className="px-20 py-2 text-center">
          <p className='pb-3 font-semibold text-lg'>Salary Range: $90,000 - $166,000  </p>
          <p className="font-semibold text-xl pb-5">We design sustainable systems that are massively scalable—resulting in the greatest environmental benefit possible. Our energy generation and storage products work together with our electric vehicles to amplify their impact.</p>

          <div>
          <Accordion collapseAll className='bg-white'>
          <AccordionPanel>
            <AccordionTitle>Why do I Want to Work at: Tesla?</AccordionTitle>
              <AccordionContent>
                <div className='p-2'>
              <ul className='list-disc text-left'>
                    <li>One of the largest and leading EV companies in the world</li>
                    <li>Innovative Business</li>
                    <li>Good Benefits</li>
                </ul>
                </div>
              </AccordionContent>
              </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>Benefits</AccordionTitle>
              <AccordionContent>
                <ul className="grid grid-cols-2 text-left">
                <li>
                Aetna PPO and HSA plans {'>'} 2 medical plan options with $0 payroll deduction
                </li>
                <li>
                Family-building, fertility, adoption and surrogacy benefits
                </li>
                <li>
                Dental {'(including orthodontic coverage)'} and vision plans. Both have an option with a $0 payroll contribution
                </li>
                <li>
                Company Paid {'(Health Savings Account)'} HSA Contribution when enrolled in the High Deductible Medical Plan with HSA
                </li>
                <li>
                Healthcare and Dependent Care Flexible Spending Accounts {'(FSA)'}
                </li>
                <li>
                401{'(k)'}, Employee Stock Purchase Plans, and other financial benefits
                </li>
                <li>
                Company Paid Basic Life, AD&D, and short-term disability insurance
                </li>
                <li>
                Employee Assistance Program
                </li>
                <li>
                Sick time after 90 days of employment and Paid Holidays
                </li>
                <li>
                Back-up childcare and parenting support resources
                </li>
                <li>
                Voluntary benefits to include: critical illness, hospital indemnity, accident insurance, theft & legal services, and pet insurance
                </li>
                <li>
                Commuter benefits
                </li>
                <li>
                Employee discounts and perks program
                </li>
                </ul>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
            <AccordionTitle>Personal Goals</AccordionTitle>
              <AccordionContent>
                <div className='p-2'>
                <ul className='list-disc text-left'>
                    <li>Make Connections</li>
                    <li>Further Education</li>
                    <li>Own a Tesla</li>
                </ul>
                </div>
              </AccordionContent>
              </AccordionPanel>
          </Accordion>
            
          </div>
          <div className='flex justify-center'>
            <div className='w-[500px] border-solid border-1 border-black p-5 m-2 rounded-xl shadow-lg/30 bg-slate-100'>
                
          <p className='p-3 text-xl font-semibold'>Backend Software Engineer, Diagnostics</p>
          <Link href={'https://www.tesla.com/careers/search/job/internship-backend-software-engineer-diagnostics-fall-2025--240872'} className="underline text-blue-600">Job Opportunity</Link>
            <div className='flex justify-around py-5'>
              <Image src={"/assets/python.png"} alt='python' width={50} height={50}/>
              <Image src={"/assets/golang.png"} alt='golang' width={50} height={25}/>
              <Image src={"/assets/django.png"} alt='django' width={50} height={50}/>
            </div>
              <p className="text-slate-500 text-left">Notes: Need to learn Python, Go and Django</p>
            </div>
            </div>
          </div>
        </div>
        </TabItem>
        <TabItem title="Costco">
        <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#0060A9] p-10">
        <div className="flex justify-center">
        <Link href={'https://www.costco.com/'}>
        <Image src={"/assets/Costco.png"} alt='costco' width={300} height={30} className="p-4"/>
        </Link>
          </div>
          <div className="px-20 py-5 text-center">
            <p className='pb-3 font-semibold text-lg'>Salary Range: $31,600 - $78,000</p>
            <p className="font-semibold text-xl pb-5">Costco is a membership warehouse club, dedicated to bringing our members the best possible prices on quality brand-name merchandise. With hundreds of locations worldwide, Costco provides a wide selection of merchandise, plus the convenience of specialty departments and exclusive member services, all designed to make your shopping experience a pleasurable one.</p>
            <Accordion collapseAll className='bg-white'>
            <AccordionPanel>
            <AccordionTitle>Why do I Want to Work at: Costco?</AccordionTitle>
              <AccordionContent>
                <div className='p-2'>
              <ul className='list-disc text-left'>
                    <li>Doesnt require a background in web development</li>
                    <li>Stable Job while looking for a job in programing</li>
                    <li>Great Benefits</li>
                    <li>Chicken Paremsan</li>
                </ul>
                </div>
              </AccordionContent>
              </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>Benefits</AccordionTitle>
              <AccordionContent>
                <ul className="grid grid-cols-2 text-left">
                <li>
                Health care
                </li>
                <li>
                Pharmacy program
                </li>
                <li>
                Dental care
                </li>
                <li>
                Vision program
                </li>
                <li>
                Paid bonding leave
                </li>
                <li>
                Health care reimbursement account
                </li>
                <li>
                Dependent care reimbursement account
                </li>
                <li>
                Voluntary short-term disability
                </li>
                <li>
                Long-term disability
                </li>
                <li>
                Life insurance and AD&D insurance
                </li>
                <li>
                Employee assistance program
                </li>
                <li>
                Employee stock purchase plan
                </li>
                <li>
                401{'(k)'} plan
                </li>
                <li>
                Programs to support physical, emotional, and financial well-being
                </li>
                <li>
                Paid time-off policies include:
                </li>
                <li>
                Paid sick and vacation time
                </li>
                <li>
                Eight paid holidays
                </li>
                <li>
                One paid floating holiday to allow employees to observe a day that`&apos;`s meaningful to them, e.g., Juneteenth, Indigenous Peoples Day, Veterans Day
                </li>
                </ul>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
            <AccordionTitle>Personal Goals</AccordionTitle>
              <AccordionContent>
                <div className='p-2'>
                <ul className='list-disc text-left'>
                    <li>Get a stable income</li>
                    <li>Get hands on work experience that does not involve coding</li>
                    <li>Chicken Parmesan</li>
                </ul>
                </div>
              </AccordionContent>
              </AccordionPanel>
          </Accordion>
          <div className='flex justify-center'>
            <div className='w-[500px] border-solid border-1 border-black p-5 m-2 rounded-xl shadow-lg/30 bg-slate-100'>
          <p className='p-3 text-xl font-semibold'>Any Position</p>
            <Link href={'https://cta.cadienttalent.com/index.jsp?POSTING_ID=9129789790&LOCATION_ID=9129639552&locale=en_US&SEQ=postingLocationDetails&applicationName=CostcoNonReqExt'} className="underline text-blue-600">Job Opportunity</Link>
            <p className="text-slate-500 text-left">Notes: Not strictly coding related, it would be nice to work at Costco</p>
            </div>            
          </div>
          </div>
        </div>
        </TabItem>
      </Tabs>
    </div>
    </div>
  );
}
