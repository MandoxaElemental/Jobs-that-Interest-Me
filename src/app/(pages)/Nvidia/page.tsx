import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

import React from 'react'

const Nvidia = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#76B900] p-10">
    <div className="flex justify-center">
    <Link href={'https://www.nvidia.com/en-us/'}>
  <Image src={"/assets/Nvidia.png"} alt='nvidia' width={200} height={30} className="hover:opacity-50"/>
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
  )
}

export default Nvidia