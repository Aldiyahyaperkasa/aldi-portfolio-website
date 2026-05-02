/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: number;
  title: string;
  cat: string;
  year: string;
  img: string;
  desc: string;
  long: string;
  prob: string;
  sol: string;
  tags: string[];
  tech: string[];
}

export const PROJECTS: Project[] = [
  {id:1,title:"SIOLGA",cat:"Sistem Informasi Pemerintahan",year:"2025",
   img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
   desc:"Sistem Informasi Keolahragaan Kutai Timur — dashboard terpusat untuk Dispora.",
   long:"SIOLGA modernizes the sports management ecosystem in Kutai Timur. A comprehensive platform for Dispora to track athletic progress, manage coaching certifications, and document historical achievements across sports branches.",
   prob:"Athlete records and achievements were stored in disparate spreadsheets, making real-time reporting and credential verification extremely difficult for the agency.",
   sol:"Designed a centralized MySQL database and a responsive dashboard with role-based access control (RBAC) for administrators and sports branch representatives.",
   tags:["Dashboard","Gov System","RBAC"],
   tech:["PHP","CodeIgniter","MySQL","JavaScript","Tailwind","RBAC","API Text Editor"]},
  {id:2,title:"KUDUNGGA RUN",cat:"Sistem Manajemen Event",year:"2025",
   img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1200",
   desc:"Night Run Festival — sistem pendaftaran QR Code dan validasi pembayaran untuk 5000+ peserta.",
   long:"Kudungga Run Festival required a robust registration pipeline handling thousands of participants with secure payment gateway and unique QR code generation for every registrant.",
   prob:"Manual registration and payment verification caused long queues and the potential for fraudulent entries at previous events.",
   sol:"Automated registration with QR code generation per participant. Admin validation workflow streamlines check-in on event day, eliminating queues and fraud risks.",
   tags:["Event Reg","QR Code","Payment"],
   tech:["PHP","CodeIgniter","MySQL","QR Generator","GD Library","SMTP Mailer","Bootstrap"]},
  {id:3,title:"SANGATTA FESTIVAL RUN",cat:"Sistem Manajemen Event",year:"2025",
   img:"https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200",
   desc:"Sistem pendaftaran dengan manajemen kuota per kategori dan upload bukti pembayaran.",
   long:"Specialized registration platform for Sangatta Festival Run with category-based quota management and secure participant data handling for thousands of entrants.",
   prob:"Strict quotas for different age and distance categories were unmanageable manually, leading to overbooking and poor participant experience.",
   sol:"Real-time quota tracking system that automatically closes registration for specific categories once limits are reached. Robust admin panel for managing participant data.",
   tags:["Quota Mgmt","QR Code","Email"],
   tech:["PHP","CodeIgniter","MySQL","QR Code","SMTP Mailer","Bootstrap"]},
  {id:4,title:"E-SPP PAYMENT",cat:"Sistem Finansial",year:"2024",
   img:"https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&q=80&w=1200",
   desc:"Sistem pembayaran SPP sekolah dengan Midtrans Payment Gateway dan automated billing.",
   long:"Comprehensive financial system for educational institutions to manage student tuition fees with automated billing, payment tracking, and real-time financial reporting.",
   prob:"Manual tuition tracking and payment verification were inefficient, causing data discrepancies, delayed reporting, and reconciliation challenges.",
   sol:"Automated billing integrated with Midtrans Payment Gateway. Students pay via VA or E-Wallet with automatic status updates upon transaction completion.",
   tags:["Fintech","Payment GW","Education"],
   tech:["PHP","CodeIgniter","MySQL","Midtrans API","Snap.js","Bootstrap"]},
  {id:5,title:"TOURIST BOAT BOOKING",cat:"Sistem Reservasi",year:"2025",
   img:"https://images.unsplash.com/photo-1516091877740-fde016699f2c?auto=format&fit=crop&q=80&w=1200",
   desc:"Platform pemesanan wisata maritim ke Pulau Beras Basah dengan notifikasi WhatsApp otomatis.",
   long:"Booking engine for boat rentals to Beras Basah island. Manages the full customer journey from boat selection to payment and real-time WhatsApp status updates.",
   prob:"Managing boat availability and communicating status manually was overwhelming for admins and highly prone to miscommunication.",
   sol:"Centralized booking with WhatsApp API (Fonnte) for automated alerts including booking confirmation, DP reminders, and approval or rejection notifications.",
   tags:["Booking","WA API","Tourism"],
   tech:["PHP","CodeIgniter","MySQL","WhatsApp API (Fonnte)","Tailwind","Payment Verification"]},
  {id:6,title:"DECISION SUPPORT SYSTEM",cat:"Sistem Analisis",year:"2026",
   img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
   desc:"Sistem Pendukung Keputusan menggunakan metode SAW dan Borda untuk pemeringkatan multi-kriteria.",
   long:"Sophisticated DSS handling complex multi-criteria decision-making with a hybrid algorithm ensuring high accuracy and mathematical fairness in ranking results.",
   prob:"Subjective decision-making leads to biased results when evaluating multiple conflicting criteria across large and diverse datasets.",
   sol:"Hybrid engine using SAW for initial criterion scoring and Borda Count for final ranking aggregation — providing an objective and transparent decision output.",
   tags:["Algorithm","DSS","Analytics"],
   tech:["PHP","Laravel","MySQL","SAW Method","Borda Algorithm","Tailwind"]},
  {id:7,title:"BUILDING RENTAL",cat:"Academic",year:"2024",
   img:"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
   desc:"Sistem Informasi Peminjaman Gedung dengan alur persetujuan dan desain database berbasis ERD.",
   long:"Academic project creating a streamlined workflow for public building rentals, covering the full process from initial inquiry through final approval and scheduling.",
   prob:"Manual process was prone to double-booking and lacked public-facing transparency on facility availability.",
   sol:"Public availability calendar combined with an internal approval workflow. ERD-modeled database prevents scheduling conflicts.",
   tags:["Booking","Approval Flow"],
   tech:["PHP","CodeIgniter","MySQL","JavaScript","Bootstrap"]},
  {id:8,title:"IT ASSET MAINTENANCE",cat:"Skripsi",year:"2025",
   img:"https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
   desc:"Sistem Pemeliharaan Perangkat TI dengan QR Code di PT. Kaltim Methanol Industri — Skripsi.",
   long:"Final thesis project digitizing IT asset maintenance at PT. Kaltim Methanol Industri using QR codes to bridge physical hardware with a digital maintenance log.",
   prob:"Manual tracking led to incomplete maintenance logs and difficulty identifying specific devices during audits.",
   sol:"Each IT asset gets a unique QR code. Technicians scan to view history or log new service records, ensuring data integrity and operational efficiency.",
   tags:["Asset Mgmt","QR System","Thesis"],
   tech:["PHP","CodeIgniter","MySQL","QR Code Integration","JavaScript","Bootstrap"]}
];
