import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

import React from 'react'

const Costco = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-tr from-white via-white to-[#0060A9] p-10">
        <div className="flex justify-center">
        <Link href={'https://www.costco.com/'}>
        <Image src={"/assets/Costco.png"} alt='costco' width={300} height={30} className="p-4 hover:opacity-50"/>
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
  )
}

export default Costco