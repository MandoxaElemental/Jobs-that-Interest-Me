import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, TabItem, Tabs } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

import React from 'react'

const Intel = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#00C7FD] p-10">
        <div className="flex justify-center">
        <Link href={'https://www.intel.com/content/www/us/en/homepage.html'}>
        <Image src={"/assets/Intel.png"} alt='intel' width={200} height={30} className="hover:opacity-50"/>
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
  )
}

export default Intel