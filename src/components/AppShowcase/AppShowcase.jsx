import React from 'react';
import { motion } from 'motion/react';
import './appshowcase.css';

import fLogo from '../../assets/app_showcase_ss/fraikin/fraikin_logo.png';
import fCardLogo from '../../assets/app_showcase_ss/fraikin/fraikin_card_logo.jpg';
import f1 from '../../assets/app_showcase_ss/fraikin/fraikin_ss1.jpeg';
import f2 from '../../assets/app_showcase_ss/fraikin/fraikin_ss2.jpeg';
import f3 from '../../assets/app_showcase_ss/fraikin/fraikin_ss3.jpeg';
import f4 from '../../assets/app_showcase_ss/fraikin/fraikin_ss4.jpeg';
import f5 from '../../assets/app_showcase_ss/fraikin/fraikin_ss5.jpeg';
import f6 from '../../assets/app_showcase_ss/fraikin/fraikin_ss6.jpeg';
import f7 from '../../assets/app_showcase_ss/fraikin/fraikin_ss7.jpeg';
import f8 from '../../assets/app_showcase_ss/fraikin/fraikin_ss8.jpeg';
import f9 from '../../assets/app_showcase_ss/fraikin/fraikin_ss9.jpeg';
import f10 from '../../assets/app_showcase_ss/fraikin/fraikin_ss10.jpeg';

import rsCardLogo from '../../assets/app_showcase_ss/rentalshare/rs_card_logo.jpg';
import rs1 from '../../assets/app_showcase_ss/rentalshare/rs_ss1.jpg';
import rs2 from '../../assets/app_showcase_ss/rentalshare/rs_ss2.jpg';
import rs3 from '../../assets/app_showcase_ss/rentalshare/rs_ss3.jpg';
import rs4 from '../../assets/app_showcase_ss/rentalshare/rs_ss4.jpg';
import rs5 from '../../assets/app_showcase_ss/rentalshare/rs_ss5.jpg';
import rs6 from '../../assets/app_showcase_ss/rentalshare/rs_ss6.jpg';
import rs7 from '../../assets/app_showcase_ss/rentalshare/rs_ss7.jpg';
import rs8 from '../../assets/app_showcase_ss/rentalshare/rs_ss8.jpg';
import rs9 from '../../assets/app_showcase_ss/rentalshare/rs_ss9.jpg';
import rs10 from '../../assets/app_showcase_ss/rentalshare/rs_ss10.jpg';
import rs11 from '../../assets/app_showcase_ss/rentalshare/rs_ss11.jpg';
import rs12 from '../../assets/app_showcase_ss/rentalshare/rs_ss12.jpg';
import rs13 from '../../assets/app_showcase_ss/rentalshare/rs_ss13.jpg';
import rs14 from '../../assets/app_showcase_ss/rentalshare/rs_ss14.jpg';
import rs15 from '../../assets/app_showcase_ss/rentalshare/rs_ss15.jpg';
import rs16 from '../../assets/app_showcase_ss/rentalshare/rs_ss16.jpg';
import rs17 from '../../assets/app_showcase_ss/rentalshare/rs_ss17.jpg';
import rs18 from '../../assets/app_showcase_ss/rentalshare/rs_ss18.jpg';
import rs19 from '../../assets/app_showcase_ss/rentalshare/rs_ss19.jpg';
import rs20 from '../../assets/app_showcase_ss/rentalshare/rs_ss20.jpg';
import rs21 from '../../assets/app_showcase_ss/rentalshare/rs_ss21.jpg';
import rs22 from '../../assets/app_showcase_ss/rentalshare/rs_ss22.jpg';
import rs23 from '../../assets/app_showcase_ss/rentalshare/rs_ss23.jpg';
import rs24 from '../../assets/app_showcase_ss/rentalshare/rs_ss24.jpg';
import rs25 from '../../assets/app_showcase_ss/rentalshare/rs_ss25.jpg';
import rs26 from '../../assets/app_showcase_ss/rentalshare/rs_ss26.jpg';

import gmCardLogo from '../../assets/app_showcase_ss/green_mountains/gm_card_logo.jpg';
import gm1 from '../../assets/app_showcase_ss/green_mountains/gm_ss1.jpg';
import gm2 from '../../assets/app_showcase_ss/green_mountains/gm_ss2.jpg';
import gm3 from '../../assets/app_showcase_ss/green_mountains/gm_ss3.jpg';
import gm4 from '../../assets/app_showcase_ss/green_mountains/gm_ss4.jpg';
import gm5 from '../../assets/app_showcase_ss/green_mountains/gm_ss5.jpg';
import gm6 from '../../assets/app_showcase_ss/green_mountains/gm_ss6.jpg';
import gm7 from '../../assets/app_showcase_ss/green_mountains/gm_ss7.jpg';
import gm8 from '../../assets/app_showcase_ss/green_mountains/gm_ss8.jpg';
import gm9 from '../../assets/app_showcase_ss/green_mountains/gm_ss9.jpg';
import gm10 from '../../assets/app_showcase_ss/green_mountains/gm_ss10.jpg';
import gm11 from '../../assets/app_showcase_ss/green_mountains/gm_ss11.jpg';
import gm12 from '../../assets/app_showcase_ss/green_mountains/gm_ss12.jpg';
import gm13 from '../../assets/app_showcase_ss/green_mountains/gm_ss13.jpg';
import gm14 from '../../assets/app_showcase_ss/green_mountains/gm_ss14.jpg';
import gm15 from '../../assets/app_showcase_ss/green_mountains/gm_ss15.jpg';
import gm16 from '../../assets/app_showcase_ss/green_mountains/gm_ss16.jpg';
import gm17 from '../../assets/app_showcase_ss/green_mountains/gm_ss17.jpg';
import gm18 from '../../assets/app_showcase_ss/green_mountains/gm_ss18.jpg';

import rgCardLogo from '../../assets/app_showcase_ss/rentegrate/rg_card_logo.jpg';
import rg1 from '../../assets/app_showcase_ss/rentegrate/rg_ss1.jpeg';
import rg2 from '../../assets/app_showcase_ss/rentegrate/rg_ss2.jpeg';
import rg3 from '../../assets/app_showcase_ss/rentegrate/rg_ss3.jpeg';
import rg4 from '../../assets/app_showcase_ss/rentegrate/rg_ss4.jpeg';
import rg5 from '../../assets/app_showcase_ss/rentegrate/rg_ss5.jpeg';
import rg6 from '../../assets/app_showcase_ss/rentegrate/rg_ss6.jpeg';
import rg7 from '../../assets/app_showcase_ss/rentegrate/rg_ss7.jpeg';
import rg8 from '../../assets/app_showcase_ss/rentegrate/rg_ss8.jpeg';
import rg9 from '../../assets/app_showcase_ss/rentegrate/rg_ss9.jpeg';
import rg10 from '../../assets/app_showcase_ss/rentegrate/rg_ss10.jpeg';
import rg11 from '../../assets/app_showcase_ss/rentegrate/rg_ss11.jpeg';
import rg12 from '../../assets/app_showcase_ss/rentegrate/rg_ss12.jpeg';
import rg13 from '../../assets/app_showcase_ss/rentegrate/rg_ss13.jpeg';
import rg14 from '../../assets/app_showcase_ss/rentegrate/rg_ss14.jpeg';
import rg15 from '../../assets/app_showcase_ss/rentegrate/rg_ss15.jpeg';

import klCardLogo from '../../assets/app_showcase_ss/kpi_leads/kl_card_logo.jpg';
import kl1 from '../../assets/app_showcase_ss/kpi_leads/kl_ss1.jpeg';
import kl2 from '../../assets/app_showcase_ss/kpi_leads/kl_ss2.jpeg';
import kl3 from '../../assets/app_showcase_ss/kpi_leads/kl_ss3.jpeg';
import kl4 from '../../assets/app_showcase_ss/kpi_leads/kl_ss4.jpeg';
import kl5 from '../../assets/app_showcase_ss/kpi_leads/kl_ss5.jpeg';
import kl6 from '../../assets/app_showcase_ss/kpi_leads/kl_ss6.jpeg';
import kl7 from '../../assets/app_showcase_ss/kpi_leads/kl_ss7.jpeg';

import zfCardLogo from '../../assets/app_showcase_ss/zahib_foods/zf_card_logo.jpg';
import zf1 from '../../assets/app_showcase_ss/zahib_foods/zf_ss1.jpeg';
import zf2 from '../../assets/app_showcase_ss/zahib_foods/zf_ss2.jpeg';
import zf3 from '../../assets/app_showcase_ss/zahib_foods/zf_ss3.jpeg';
import zf4 from '../../assets/app_showcase_ss/zahib_foods/zf_ss4.jpeg';
import zf5 from '../../assets/app_showcase_ss/zahib_foods/zf_ss5.jpeg';
import zf6 from '../../assets/app_showcase_ss/zahib_foods/zf_ss6.jpeg';
import zf7 from '../../assets/app_showcase_ss/zahib_foods/zf_ss7.jpeg';
import zf8 from '../../assets/app_showcase_ss/zahib_foods/zf_ss8.jpeg';

import dymCardLogo from '../../assets/app_showcase_ss/dayim/dym_card_logo.jpg';
import dym1 from '../../assets/app_showcase_ss/dayim/dym_ss1.jpeg';
import dym2 from '../../assets/app_showcase_ss/dayim/dym_ss2.jpeg';
import dym3 from '../../assets/app_showcase_ss/dayim/dym_ss3.jpeg';
import dym4 from '../../assets/app_showcase_ss/dayim/dym_ss4.jpeg';
import dym5 from '../../assets/app_showcase_ss/dayim/dym_ss5.jpeg';
import dym6 from '../../assets/app_showcase_ss/dayim/dym_ss6.jpeg';
import dym7 from '../../assets/app_showcase_ss/dayim/dym_ss7.jpeg';
import dym8 from '../../assets/app_showcase_ss/dayim/dym_ss8.jpeg';
import dym9 from '../../assets/app_showcase_ss/dayim/dym_ss9.jpeg';
import dym10 from '../../assets/app_showcase_ss/dayim/dym_ss10.jpeg';
import dym11 from '../../assets/app_showcase_ss/dayim/dym_ss11.jpeg';
import dym12 from '../../assets/app_showcase_ss/dayim/dym_ss12.jpeg';
import dym13 from '../../assets/app_showcase_ss/dayim/dym_ss13.jpeg';
import dym14 from '../../assets/app_showcase_ss/dayim/dym_ss14.jpeg';
import dym15 from '../../assets/app_showcase_ss/dayim/dym_ss15.jpeg';
import dym16 from '../../assets/app_showcase_ss/dayim/dym_ss16.jpeg';
import dym17 from '../../assets/app_showcase_ss/dayim/dym_ss17.jpeg';
import dym18 from '../../assets/app_showcase_ss/dayim/dym_ss18.jpeg';
import dym19 from '../../assets/app_showcase_ss/dayim/dym_ss19.jpeg';

import ewCardLogo from '../../assets/app_showcase_ss/emirates_water/ew_card_logo.jpg';
import ew1 from '../../assets/app_showcase_ss/emirates_water/ew_ss1.jpeg';
import ew2 from '../../assets/app_showcase_ss/emirates_water/ew_ss2.jpeg';
import ew3 from '../../assets/app_showcase_ss/emirates_water/ew_ss3.jpeg';
import ew4 from '../../assets/app_showcase_ss/emirates_water/ew_ss4.jpeg';
import ew5 from '../../assets/app_showcase_ss/emirates_water/ew_ss5.jpeg';
import ew6 from '../../assets/app_showcase_ss/emirates_water/ew_ss6.jpeg';
import ew7 from '../../assets/app_showcase_ss/emirates_water/ew_ss7.jpeg';


const AppsShowcase = ({ onOpenModal }) => {
  const cards = [
    {
      id: 1,
      title: 'Truck Servicing App',
      img: fCardLogo,
      showStory: true,
      intro: 'Fraikin simplifies vehicle rental needs across Europe, operating in ten countries with a commitment to providing seamless, flexible solutions tailored to diverse business requirements. Wherever one operates within the European network, expect consistent quality and adaptable fleet solutions.',
      challenge: 'With dozens of vehicles out for rental, some are bound to run into issues while out on the road and in order to provide an uninterruptible service to their customers Fraikin sends out technicians equipped with the necessary tools to perform checks and repairs on these vehicles.',
      solution: 'To enhance Fraikin\'s roadside assistance operations and ensure faster, more reliable service for customers across their 10-country European network, we developed a dedicated mobile app for their field technicians. The app enables real-time tracking of technicians on the field, provides digital checklists for systematic vehicle inspections and repairs, manages spare parts inventory with usage logging, includes a built-in timer to record job duration, allows capturing and attaching high-quality vehicle images for documentation, and captures client signatures directly on the device to confirm completion and acceptance of the work.',
      outcome: 'The mobile app significantly improved response efficiency and service quality, enabling better coordination of technicians, reduced paperwork, faster job documentation, and complete digital audit trails. Technicians can now handle roadside checks and repairs more consistently and transparently, while clients benefit from quicker resolutions and verifiable proof of service — all contributing to uninterrupted fleet availability and higher customer satisfaction across Fraikin\'s extensive rental operations.',
      screenshots: [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10],
      story: [
        {
          images: f3,
          description: 'Truck & Equipment Servicing App revolutionizes the service management process with an intuitive mobile app designed for modern service centers. The platform streamlines appointment scheduling, work order management, and parts inventory tracking in real-time.',
        },
        {
          images: f3,
          description: 'Sales representatives can access customer databases, track orders on-the-go, and generate reports instantly. The app integrates with backend systems to ensure data consistency across all touchpoints.',
        },
        {
          images: f3,
          description: 'Distribution managers benefit from advanced route optimization, automatic scheduling, and real-time GPS tracking. This ensures timely deliveries and maximizes operational efficiency.',
        },
        {
          images: f3,
          description: 'Analytics and insights dashboards provide actionable data on sales trends, customer preferences, and distribution performance. Businesses can make informed decisions to grow their market presence.',
        },
      ],
    },
    {
      id: 2,
      title: 'Equipment & Trucks Rental Marketplace App',
      img: rsCardLogo,
      showStory: true,
      intro: 'At Dayim Equipment Rental, we provide dependable heavy-equipment solutions across Saudi Arabia. With advanced telematics, skilled maintenance, and professional operator training, we keep your projects moving without delays. Our focus is on maximizing uptime, controlling costs, and supporting your success. From start to finish, we’re the partner you can rely on to deliver the right equipment, on time and on budget.',
      challenge: 'With so many construction projects all around the Middle East the task was to design and build a full-featured mobile-first marketplace application where buyers and sellers of commercial trucks, heavy equipment, and fleet vehicles could connect, transact, and manage listings — filling a gap left by general-purpose platforms that lacked industry-specific filtering, compliance tools, and trust signals critical to high-value B2B equipment deals.',
      solution: 'To address the gap in industry-specific equipment trading across the Middle East, we designed and developed a comprehensive mobile-first marketplace application tailored specifically for Dayim Equipment Rental and the broader B2B heavy equipment sector. We built separate authenticated login flows for customers and suppliers, ensuring each user type accessed a role-appropriate experience from the outset. The app featured dynamic listing and categorization of commercial trucks, heavy equipment, and fleet vehicles, allowing suppliers to upload detailed equipment profiles with full specifications, images, and pricing. We integrated real-time chat to enable direct communication between buyers and sellers, eliminating the friction of off-platform negotiations. To keep users engaged and informed throughout the transaction lifecycle, we implemented push notifications for listing updates, inquiries, and deal activity. Recognizing the diverse markets across Saudi Arabia and the wider Middle East, we also built in full localization support to ensure the platform resonated with users across different regions and languages.',
      outcome: 'The delivered marketplace application gave Dayim Equipment Rental and its network a purpose-built platform that general-purpose listing sites could not match. Suppliers gained a streamlined channel to showcase and manage their inventory, while buyers could efficiently discover, filter, and evaluate high-value equipment with the confidence of industry-specific trust signals. The real-time chat and push notification features accelerated deal cycles by keeping both parties connected and responsive throughout negotiations. Localization expanded the platform\'s reach across multilingual markets, broadening the potential buyer and seller base significantly. Overall, the application positioned Dayim as a forward-thinking industry leader, enabling faster transactions, stronger supplier-buyer relationships, and a scalable foundation for continued growth across the region\'s booming construction sector.',
      screenshots: [rs1, rs2, rs3, rs4, rs5, rs6, rs7, rs8, rs9, rs10, rs11, rs12, rs13, rs14, rs15, rs16, rs17, rs18, rs19, rs20, rs21, rs22, rs23, rs24, rs25, rs26],
      story: [
        {
          images: '/assets/portfolio2_screen1.jpg',
          description: 'Emirates On-Demand Sales brings convenience to customers with instant ordering and delivery services.',
        },
      ],
    },
    {
      id: 3,
      title: 'Maintenance, Inspection & Repair Management App',
      img: rgCardLogo,
      showStory: false,
      intro: 'An app for managing waste collection and disposal services.',
      challenge: 'Inefficient waste management processes led to environmental concerns.',
      solution: 'Developed an app to streamline maintenance, inspection, and repair tracking.',
      outcome: 'Improved maintenance tracking efficiency by 50% and reduced downtime.',
      screenshots: [rg1, rg2, rg3, rg4, rg5, rg6, rg7, rg8, rg9, rg10, rg11, rg12, rg13, rg14, rg15],
      story: [
        {
          images: '/assets/portfolio5_screen1.jpg',
          description: 'Track maintenance schedules and repair history for equipment efficiently.',
        },
      ],
    },
    {
      id: 4,
      title: 'Waste Management App',
      img: gmCardLogo,
      showStory: true,
      intro: 'Green Mountains, one of the largest privately owned providers of liquid and solid waste treatment and disposal services in the UAE, faced challenges in efficiently managing their operations. Specializing in the collection, transportation, treatment, and disposal of both hazardous and non-hazardous waste materials, the company relied on manual processes for tracking collections, which led to inaccuracies in documentation, delays in reporting, and difficulties in verifying waste details like images and weights on-site.',
      challenge: 'To streamline their waste management workflow, Green Mountains needed a digital solution that could enable real-time tracking of waste collections, secure storage of photographic evidence of collected waste, and accurate recording of waste weights. The goal was to improve operational efficiency, ensure compliance with regulatory standards, and enhance data accuracy for better decision-making and reporting.',
      solution: 'Our team developed a custom mobile app tailored to Green Mountains\' needs. The app integrated GPS tracking for real-time recording of location of collections and allowed field operatives to capture and upload high-resolution images of waste materials directly from the site. We incorporated user-friendly interfaces for quick data entry, and automated reporting features to generate compliance-ready summaries. The development process involved close collaboration with Green Mountains\' operations team to iterate on features, ensuring seamless adoption through training sessions and pilot testing.',
      outcome: 'The mobile app transformed Green Mountains\' operations, reducing documentation errors and cutting reporting time in half. Field teams could now verify and record waste details instantly, leading to faster processing and improved regulatory compliance. Overall, the solution enhanced productivity, minimized disputes over waste verification, and positioned Green Mountains as a more agile leader in the UAE\'s waste management sector, with positive feedback from users highlighting its ease of use and reliability.',
      screenshots: [gm1, gm2, gm3, gm4, gm5, gm6, gm7, gm8, gm9, gm10, gm11, gm12, gm13, gm14, gm15, gm16, gm17, gm18],
      story: [
        {
          images: '/assets/portfolio4_screen1.jpg',
          description: 'Connect equipment owners with renters in a seamless marketplace experience.',
        },
      ],
    },
    {
      id: 5,
      title: 'Leads App',
      img: klCardLogo,
      showStory: true,
      intro: 'Many businesses, regardless of size or industry, are operating below their potential — not because of a lack of effort, but because of accumulated inefficiencies that have gone unexamined. Owners and managers are often so consumed by the day-to-day demands of running their business that they rarely have the opportunity to step back and assess whether their financial practices, internal processes, team structures, and use of technology are actually working in their favor. Manual tasks are repeated without question, data is generated but never fully leveraged, and pain points in productivity or cash flow are treated as unavoidable realities rather than solvable problems. It was within this context that KPI Business Advisors & Consultants identified a clear and pressing need — businesses required a trusted, knowledgeable partner who could sit down with them, take the time to genuinely understand their operations from the inside out, and surface the gaps, bottlenecks, and missed opportunities that owners themselves were too close to see. The demand was not just for advice, but for a structured, consultative approach that examined every layer of the business — from the transactions being processed daily, to the data being generated but left unused, to the repetitive manual workflows quietly draining hours from the working week — and translated those findings into practical, tailored solutions that would save time, reduce friction, and meaningfully enhance productivity.',
      challenge: 'With a major industry conference approaching, the task was to design and deliver a mobile application that would allow attendees and sales representatives to capture and share contact information with potential clients as quickly and frictionlessly as possible. The app needed to eliminate the inefficiencies of manually entering contact details on a busy conference floor by enabling users to instantly share their own information through a generated QR code, scan and automatically extract details from a physical business card, and maintain a centralized, searchable record of every lead collected throughout the event — ensuring that no potential client relationship was lost due to the fast-paced nature of conference networking.',
      solution: 'To address the client\'s need for a faster, more efficient approach to conference networking, KPI Business Advisors & Consultants designed and delivered a fully functional mobile application tailored specifically to the demands of a high-paced event environment. The development process began with a thorough understanding of the friction points sales representatives faced when capturing leads manually, which informed every design and functionality decision made throughout the build. The resulting app equipped users with the ability to instantly generate and display a personal QR code that prospects could scan to receive their contact information in seconds, eliminating the need for manual data entry on both sides. A business card scanning feature was also built directly into the app, using optical character recognition to automatically extract and record key contact details from a physical card the moment it was captured through the device\'s camera. All collected contacts were stored in a centralized, searchable in-app directory, giving representatives a clean and organized record of every lead gathered throughout the event. To further streamline post-conference follow-up, the app also enabled users to share and download contacts as vCards, making it simple to transfer new connections directly into existing CRM systems or personal address books.',
      outcome: 'The mobile application transformed the way the client\'s team engaged with potential clients at the conference, replacing a slow and error-prone manual process with one that was fast, accurate, and consistent from the first interaction to the last. Sales representatives were able to exchange contact information in a matter of seconds using QR codes, capture business card details without the risk of transcription errors, and leave the event with a complete, well-organized lead list rather than a scattered collection of cards and handwritten notes. The ability to share and download vCards meant that follow-up workflows could begin immediately after the event without any additional data entry, reducing the lag time between initial contact and meaningful outreach. Overall, the app directly addressed one of the core inefficiencies KPI had identified in the client\'s operations — the quiet but costly drain of repetitive manual tasks — and delivered a tangible improvement in both productivity and the quality of lead capture during one of their most important business development opportunities of the year.',
      screenshots: [kl1, kl2, kl3, kl4, kl5, kl6, kl7],
      story: [
        {
          images: '/assets/portfolio5_screen1.jpg',
          description: 'Connect equipment owners with renters in a seamless marketplace experience.',
        },
      ],
    },
    {
      id: 6,
      title: 'Sales and Distribution App',
      img: zfCardLogo,
      showStory: false,
      intro: 'An app for managing sales and distribution processes.',
      challenge: 'Sales teams needed a better way to manage and track sales opportunities.',
      solution: 'Developed an app to streamline sales tracking, distribution management, and performance monitoring.',
      outcome: 'Improved sales tracking efficiency by 40% and reduced distribution delays by 30%.',
      screenshots: [zf1, zf2, zf3, zf4, zf5, zf6, zf7, zf8],
      story: [
        {
          images: '/assets/portfolio5_screen1.jpg',
          description: 'Connect equipment owners with renters in a seamless marketplace experience.',
        },
      ],
    },
    {
      id: 7,
      title: 'Truck & Heavy Equipment Servicing App',
      img: dymCardLogo,
      showStory: false,
      intro: 'An app for managing truck and equipment servicing processes.',
      challenge: 'Inefficient equipment servicing processes led to downtime and reduced productivity.',
      solution: 'Developed an app to streamline truck and equipment servicing, tracking, and maintenance.',
      outcome: 'Improved equipment servicing efficiency by 45% and reduced downtime by 35%.',
      screenshots: [dym1, dym2, dym3, dym4, dym5, dym6, dym7, dym8, dym9, dym10, dym11, dym12, dym13, dym14, dym15, dym16, dym17, dym18, dym19],
      story: [
        {
          images: '/assets/portfolio5_screen1.jpg',
          description: 'Connect equipment owners with renters in a seamless marketplace experience.',
        },
      ],
    },
    {
      id: 8,
      title: 'On-Demand Sales App',
      img: ewCardLogo,
      showStory: false,
      intro: 'An app for managing on-demand sales and distribution processes.',
      challenge: 'Sales teams needed a better way to manage and track on-demand sales opportunities.',
      solution: 'Developed an app to streamline on-demand sales tracking, distribution management, and performance monitoring.',
      outcome: 'Improved on-demand sales tracking efficiency by 40% and reduced distribution delays by 30%.',
      screenshots: [ew1, ew2, ew3, ew4, ew5, ew6, ew7],
      story: [
        {
          images: '/assets/portfolio5_screen1.jpg',
          description: 'Connect equipment owners with renters in a seamless marketplace experience.',
        },
      ],
    },
  ];

  return (
    <section className="appshowcase section" id="appshowcase">
      <h2 className="section__title">App Showcase</h2>

      <div className="appshowcase__container container grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className="appshowcase__card"
          >
            <div className="appshowcase__bg" style={{ backgroundImage: `url(${card.img})` }} />
            <h3 className="appshowcase__title">{card.title}</h3>
            
            <div className="appshowcase__hoverButtons">
              {card.showStory && <button
                className="appshowcase__btn appshowcase__btnStory"
                onClick={() => onOpenModal(card, 'details')}
              >
                View Story
              </button>}
              <button
                className="appshowcase__btn appshowcase__btnScreenshots"
                onClick={() => onOpenModal(card, 'screenshots')}
              >
                View Screenshots
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppsShowcase;