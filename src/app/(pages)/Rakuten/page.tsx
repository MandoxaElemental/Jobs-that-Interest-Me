import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, TabItem, Tabs } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";


import React from 'react'

const Rakuten = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#BF0000] p-10">
        <div className="flex justify-center">
        <Link href={'https://www.rakuten.com/'}>
        <Image src={"/assets/Rakuten.png"} alt='rakuten' width={300} height={30} className="p-5 hover:opacity-50"/>
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
              <Image src={"/assets/js.png"} alt='javascript' width={50} height={50}/>
              <Image src={"/assets/ts.png"} alt='typescript' width={50} height={50}/>
              <Image src={"/assets/java.png"} alt='java' width={50} height={50}/>
              <Image src={"/assets/python.png"} alt='python' width={50} height={50}/>
              <Image src={"/assets/golang.png"} alt='golang' width={50} height={25}/>
              <Image src={"/assets/react.png"} alt='react' width={50} height={25}/>
              <Image src={"/assets/next.png"} alt='node' width={50} height={25}/>
            </div>
              <p className="text-slate-500 text-left">Notes: Need to learn Java, Python, and Go</p>
            </div>
            </div>
          </div>
        </div>
  )
}

export default Rakuten