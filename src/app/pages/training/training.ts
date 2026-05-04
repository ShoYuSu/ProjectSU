import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-[1200px] mx-auto animate-in fade-in duration-500 pb-10 space-y-6">
      
      <div class="mb-8 flex items-center gap-3">
        <div class="w-1.5 h-6 bg-[#F9BD15] rounded-full"></div>
        <h2 class="font-black text-[#2A1D1A] text-xl uppercase tracking-widest">Training & Seminars</h2>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-black text-[#2A1D1A] mb-2">คลังข้อมูลการอบรมและสัมมนา</h2>
        <p class="text-sm text-gray-400 font-bold">ศูนย์รวมการอบรมและสัมมนาในคณะ สำหรับจัดเก็บ ค้นหา และแสดงผลการอบรมวิชาการอย่างเป็นระบบ</p>
      </div>

      <div class="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
        <div class="flex gap-4">
          <div class="relative flex-1">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <input type="text" placeholder="พิมพ์เพื่อค้นหา..." class="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-xl text-sm font-bold border border-transparent focus:border-[#F9BD15] focus:bg-white outline-none transition-all">
          </div>
          <button class="w-[52px] h-[52px] bg-[#2A1D1A] text-[#F9BD15] rounded-xl flex items-center justify-center hover:bg-black transition-colors active:scale-95 shadow-sm shrink-0">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>
          </button>
        </div>
      </div>

      <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 md:items-start">
         <span class="text-sm font-bold text-gray-500 whitespace-nowrap mt-2">ภาควิชา</span>
         <div class="flex flex-wrap gap-3">
            <button class="px-6 py-2.5 rounded-full bg-[#F9BD15] text-[#2A1D1A] font-bold text-sm shadow-sm transition-transform active:scale-95">ทั้งหมด</button>
            <button class="px-6 py-2.5 rounded-full bg-gray-50 text-gray-500 font-bold text-sm hover:bg-gray-100 transition-colors">ภาควิชาคณิตศาสตร์</button>
            <button class="px-6 py-2.5 rounded-full bg-gray-50 text-gray-500 font-bold text-sm hover:bg-gray-100 transition-colors">ภาควิชาเคมี</button>
            <button class="px-6 py-2.5 rounded-full bg-gray-50 text-gray-500 font-bold text-sm hover:bg-gray-100 transition-colors">ภาควิชาเทคโนโลยีการอาหาร</button>
            <button class="px-6 py-2.5 rounded-full bg-gray-50 text-gray-500 font-bold text-sm hover:bg-gray-100 transition-colors">ภาควิชาฟิสิกส์</button>
            <button class="px-6 py-2.5 rounded-full bg-gray-50 text-gray-500 font-bold text-sm hover:bg-gray-100 transition-colors">ภาควิชาวิทยาการคอมพิวเตอร์</button>
         </div>
      </div>

      <div class="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden relative">
         <div class="p-8 border-b border-gray-50 flex items-center gap-3">
            <div class="text-[#F9BD15]">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 class="font-black text-[#2A1D1A] text-lg">สรุปการอบรมสัมมนา</h3>
         </div>
         
         <div class="overflow-x-auto min-h-[300px] custom-scrollbar">
            <table class="w-full text-left min-w-[1800px]">
               <thead class="bg-gray-50 text-xs text-gray-500 font-bold">
                  <tr>
                     <th class="py-5 px-8 w-20">ลำดับ</th>
                     
                     <th class="py-5 px-4 w-48 sticky left-0 bg-gray-50 z-10 border-r border-gray-100 shadow-[inset_-4px_0_10px_-6px_rgba(0,0,0,0.1)]">รายชื่อ</th>
                     
                     <th class="py-5 px-4 w-64">หัวข้ออบรม สัมมนา</th>
                     <th class="py-5 px-4 w-32">วันที่เข้าร่วม</th>
                     <th class="py-5 px-4 w-56">หน่วยงานที่จัด/สถานที่</th>
                     
                     <th class="py-5 px-4 w-64">ประโยชน์ที่ได้รับ</th>
                     <th class="py-5 px-4 w-64">รายละเอียดการนำไปใช้</th>
                     <th class="py-5 px-4 w-48">หมายเหตุ</th>
                     
                     <th class="py-5 px-8 w-32 text-right">ค่าใช้จ่าย (บาท)</th>
                  </tr>
               </thead>
               <tbody class="divide-y divide-gray-50">
                  @if (mockTrainings.length > 0) {
                     @for (training of mockTrainings; track training.id) {
                        <tr class="group hover:bg-gray-50/50 transition-colors">
                           <td class="py-6 px-8 text-sm font-bold text-gray-500 align-top">{{ training.id }}</td>
                           
                           <td class="py-6 px-4 text-sm font-bold text-[#2A1D1A] align-top sticky left-0 bg-white group-hover:bg-gray-50 z-10 border-r border-gray-50 transition-colors shadow-[inset_-4px_0_10px_-6px_rgba(0,0,0,0.1)]">{{ training.staffName }}</td>
                           
                           <td class="py-6 px-4 text-sm font-bold text-gray-500 leading-relaxed align-top">{{ training.topic }}</td>
                           <td class="py-6 px-4 text-sm font-bold text-gray-500 align-top">{{ training.date }}</td>
                           <td class="py-6 px-4 text-sm font-bold text-gray-500 leading-relaxed align-top">{{ training.location }}</td>
                           
                           <td class="py-6 px-4 text-sm font-bold text-gray-500 leading-relaxed align-top">{{ training.benefits }}</td>
                           <td class="py-6 px-4 text-sm font-bold text-gray-500 leading-relaxed align-top">{{ training.implementation }}</td>
                           <td class="py-6 px-4 text-sm font-bold text-gray-500 leading-relaxed align-top">{{ training.remarks }}</td>
                           
                           <td class="py-6 px-8 text-sm font-black text-[#2A1D1A] text-right align-top">{{ training.cost | number }}</td>
                        </tr>
                     }
                  } @else {
                     <tr>
                        <td colspan="9" class="py-20 text-center text-gray-400 font-bold">ยังไม่มีข้อมูลการอบรม</td>
                     </tr>
                  }
               </tbody>
            </table>
         </div>

         <div class="p-6 border-t border-gray-50 flex justify-between items-center">
            
            <div class="flex gap-2">
               <button class="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/></svg></button>
               <button class="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F9BD15] text-[#2A1D1A] shadow-sm hover:brightness-105 active:scale-95 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/></svg></button>
            </div>

            <div class="flex items-center gap-2">
               <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
               <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F9BD15] text-[#2A1D1A] font-black text-xs shadow-sm">1</button>
               <button class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 font-bold text-xs hover:bg-gray-50 transition-colors">2</button>
               <button class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 font-bold text-xs hover:bg-gray-50 transition-colors">3</button>
               <span class="text-gray-400">...</span>
               <button class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 font-bold text-xs hover:bg-gray-50 transition-colors">10</button>
               <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
            </div>
         </div>
      </div>

    </div>
  `,
  styles: [`
    .animate-in { animation: fadeIn 0.4s ease-out forwards; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* แต่ง Scrollbar แนวนอนให้ดูมินิมอลเข้ากับดีไซน์ */
    .custom-scrollbar::-webkit-scrollbar {
      height: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f9fafb; /* gray-50 */
      border-radius: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #e5e7eb; /* gray-200 */
      border-radius: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #d1d5db; /* gray-300 */
    }
  `]
})
export class TrainingComponent {
  mockTrainings = [
    {
      id: 1,
      staffName: 'ผศ.ดร. สมชาย ใจดี',
      topic: 'การประยุกต์ใช้ AI ในการเรียนการสอนยุคดิจิทัล',
      date: '15 พ.ค. 2568',
      location: 'โรงแรมเซ็นทารา แกรนด์ แอท เซ็นทรัลเวิลด์',
      benefits: 'เข้าใจเทคนิคการเขียน Prompt ที่มีประสิทธิภาพ และสามารถประยุกต์ใช้ AI เพื่อสร้างสื่อการสอนได้อย่างรวดเร็ว',
      implementation: 'นำไปปรับใช้ในรายวิชา CS101 ให้นักศึกษาใช้ AI เป็นผู้ช่วยในการแก้ไขปัญหา (Debugging) โค้ดเบื้องต้น',
      remarks: '-',
      cost: 4500
    },
    {
      id: 2,
      staffName: 'อ. สมหญิง รักเรียน',
      topic: 'อบรมเชิงปฏิบัติการ การเขียนขอทุนวิจัยระดับชาติ',
      date: '20-22 เม.ย. 2568',
      location: 'สำนักงานการวิจัยแห่งชาติ (วช.)',
      benefits: 'ได้เรียนรู้กรอบการประเมินโครงการวิจัย และเทคนิคการเขียนข้อเสนอโครงการ (Proposal) ที่ตรงใจแหล่งทุนมากขึ้น',
      implementation: 'เตรียมนำมาใช้ในการเขียนยื่นขอทุนวิจัย วช. ในหมวดเทคโนโลยีและนวัตกรรม ประจำปีงบประมาณ 2569',
      remarks: 'ได้รับประกาศนียบัตรผ่านการอบรม',
      cost: 0
    }
  ];
}