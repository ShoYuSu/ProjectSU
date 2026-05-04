import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="max-w-[1200px] mx-auto animate-in fade-in duration-500 pb-10 space-y-6">
      
      <div class="flex justify-between items-start mb-8">
        <div>
           <div class="flex items-center gap-3 mb-2">
             <div class="w-1.5 h-6 bg-[#F9BD15] rounded-full"></div>
             <h2 class="font-black text-[#2A1D1A] text-xl uppercase tracking-widest">Plans / Projects</h2>
           </div>
           <h2 class="text-2xl font-black text-[#2A1D1A] mb-2 mt-6">คลังข้อมูลแผนงานและโครงการต่างๆของคณะ</h2>
           <p class="text-sm text-gray-400 font-bold">ศูนย์รวมแผนงานและโครงการของคณะ สำหรับจัดเก็บ ค้นหาและแสดงผลอย่างเป็นระบบ</p>
        </div>
        <button routerLink="/admin/plans/add" class="bg-[#F9BD15] text-[#2A1D1A] px-6 py-3.5 rounded-xl font-black text-sm hover:brightness-105 active:scale-95 transition-all shadow-sm flex items-center gap-2 mt-6">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
           เพิ่มสรุปแผนงาน
        </button>
      </div>

      <div class="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 mb-8">
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

      <div class="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden relative">
         <div class="p-8 border-b border-gray-50 flex items-center gap-3">
            <div class="text-[#F9BD15]">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
            </div>
            <h3 class="font-black text-[#2A1D1A] text-lg">ข้อมูลแผนงาน/โครงการ</h3>
         </div>
         
         <div class="overflow-x-auto min-h-[300px] custom-scrollbar">
            <table class="w-full text-left min-w-[1800px]">
               <thead class="bg-gray-50 text-xs text-gray-500 font-bold">
                  <tr>
                     <th class="py-5 px-8 w-64 sticky left-0 bg-gray-50 z-10 border-r border-gray-100 shadow-[inset_-4px_0_10px_-6px_rgba(0,0,0,0.1)]">ชื่อโครงการ</th>
                     
                     <th class="py-5 px-4 w-56">กิจกรรมย่อย</th>
                     <th class="py-5 px-4 w-48">ยุทธศาสตร์</th>
                     <th class="py-5 px-4 w-48">แผนงาน</th>
                     <th class="py-5 px-4 w-48">ผู้รับผิดชอบ</th>
                     <th class="py-5 px-4 w-32 text-right">งบประมาณอนุมัติ</th>
                     <th class="py-5 px-4 w-32 text-right">งบประมาณใช้จริง</th>
                     <th class="py-5 px-8 w-40 text-center">สถานะโครงการ</th>
                     <th class="py-5 px-8 w-64">รายละเอียด</th>
                  </tr>
               </thead>
               <tbody class="divide-y divide-gray-50">
                  @if (mockPlans.length > 0) {
                     @for (plan of mockPlans; track plan.id) {
                        <tr class="group hover:bg-gray-50/50 transition-colors">
                           
                           <td class="py-6 px-8 text-sm font-bold text-[#2A1D1A] align-top sticky left-0 bg-white group-hover:bg-gray-50 z-10 border-r border-gray-50 transition-colors shadow-[inset_-4px_0_10px_-6px_rgba(0,0,0,0.1)] leading-relaxed">
                              {{ plan.projectName }}
                           </td>
                           
                           <td class="py-6 px-4 text-sm font-bold text-gray-500 align-top leading-relaxed">{{ plan.subActivity }}</td>
                           <td class="py-6 px-4 text-sm font-bold text-gray-500 align-top">{{ plan.strategy }}</td>
                           <td class="py-6 px-4 text-sm font-bold text-gray-500 align-top">{{ plan.planType }}</td>
                           <td class="py-6 px-4 text-sm font-bold text-gray-500 align-top">{{ plan.responsible }}</td>
                           <td class="py-6 px-4 text-sm font-black text-[#2A1D1A] align-top text-right">{{ plan.approvedBudget | number }}</td>
                           <td class="py-6 px-4 text-sm font-black text-[#2A1D1A] align-top text-right">{{ plan.usedBudget | number }}</td>
                           
                           <td class="py-6 px-8 align-top text-center">
                              <span class="inline-block whitespace-nowrap px-4 py-1.5 rounded-full text-[10px] font-black"
                                 [ngClass]="{
                                    'bg-yellow-100 text-yellow-700': plan.status === 'อยู่ระหว่างดำเนินการ',
                                    'bg-green-100 text-green-700': plan.status === 'เสร็จสิ้น',
                                    'bg-gray-100 text-gray-500': plan.status === 'ยังไม่ได้ดำเนินการ'
                                 }">
                                 {{ plan.status }}
                              </span>
                           </td>
                           
                           <td class="py-6 px-8 text-sm font-bold text-gray-500 align-top leading-relaxed">{{ plan.details }}</td>
                        </tr>
                     }
                  } @else {
                     <tr>
                        <td colspan="9" class="py-20 text-center text-gray-400 font-bold">ยังไม่มีข้อมูลแผนงาน/โครงการ</td>
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
    
    /* แต่ง Scrollbar แนวนอน */
    .custom-scrollbar::-webkit-scrollbar {
      height: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f9fafb;
      border-radius: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #e5e7eb;
      border-radius: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #d1d5db;
    }
  `]
})
export class PlansComponent {
  // ข้อมูลจำลองสำหรับหน้า Plans
  mockPlans = [
    {
      id: 1,
      projectName: 'การพัฒนาแอปพลิเคชันจัดการขยะ "Reach You"',
      subActivity: 'พัฒนาและทดสอบระบบบน Android',
      strategy: 'ยุทธศาสตร์ที่ 2: นวัตกรรม',
      planType: 'แผนงานวิจัยและพัฒนา',
      responsible: 'จรรยา แหยมเจริญ',
      approvedBudget: 150000,
      usedBudget: 125000,
      status: 'อยู่ระหว่างดำเนินการ',
      details: 'กำลังดำเนินการในเฟสที่ 2 (การทดสอบ UAT กับกลุ่มตัวอย่าง 50 คน)'
    },
    {
      id: 2,
      projectName: 'แพลตฟอร์ม IoT สำหรับการจัดการน้ำอัจฉริยะ',
      subActivity: 'จัดซื้ออุปกรณ์เซ็นเซอร์และบอร์ด Arduino',
      strategy: 'ยุทธศาสตร์ที่ 1: การเรียนการสอน',
      planType: 'แผนงานปฏิบัติการ',
      responsible: 'รศ.ดร. สมชาย ใจดี',
      approvedBudget: 50000,
      usedBudget: 50000,
      status: 'เสร็จสิ้น',
      details: 'ติดตั้งอุปกรณ์เสร็จสิ้นและส่งมอบงานเรียบร้อยแล้ว'
    }
  ];
}