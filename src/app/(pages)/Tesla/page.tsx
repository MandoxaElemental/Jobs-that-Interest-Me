import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, TabItem, Tabs } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

import React from 'react'

const Tesla = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#cc0000] p-10">
        <div className="flex justify-center">
        <Link href='https://www.tesla.com/'>
        <Image src={"/assets/Tesla.png"} alt='tesla' width={300} height={30} className="hover:opacity-50"/>
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
  )
}

export default Tesla