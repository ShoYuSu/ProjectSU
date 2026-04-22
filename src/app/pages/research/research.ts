import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-[1200px] mx-auto animate-in fade-in duration-500 pb-10 space-y-6">
      
      <div class="mb-8">
        <h2 class="text-2xl font-black text-[#2A1D1A] mb-2">คลังข้อมูลโครงการวิจัย</h2>
        <p class="text-sm text-gray-400 font-bold">ศูนย์รวมโครงการวิจัยของบุคลากรในคณะ สำหรับจัดเก็บ ค้นหา และแสดงผลงานทางวิชาการอย่างเป็นระบบ</p>
      </div>

      <div class="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <input type="text" placeholder="ค้นหาชื่อบทความ" class="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-xl text-sm font-bold border border-transparent focus:border-[#F9BD15] focus:bg-white outline-none transition-all">
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

      <div class="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
         <div class="p-8 border-b border-gray-50 flex items-center gap-3">
            <div class="text-[#F9BD15]">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
            </div>
            <h3 class="font-black text-[#2A1D1A] text-lg">โครงการวิจัย</h3>
         </div>
         
         <div class="overflow-x-auto">
            <table class="w-full text-left min-w-[800px]">
               <thead class="bg-gray-50 text-xs text-gray-500 font-bold">
                  <tr>
                     <th class="py-5 px-8 w-20">ลำดับ</th>
                     <th class="py-5 px-4">ชื่อโครงการวิจัย</th>
                     <th class="py-5 px-4 w-40">ผู้จัดทำ</th>
                     <th class="py-5 px-4 w-32 text-center">ปีที่ได้รับทุน</th>
                     <th class="py-5 px-4 w-56">แหล่งทุน</th>
                     <th class="py-5 px-8 w-40 text-right">งบประมาณวิจัย</th>
                  </tr>
               </thead>
               <tbody class="divide-y divide-gray-50">
                  @for (project of mockProjects; track project.id) {
                     <tr class="hover:bg-gray-50/50 transition-colors">
                        <td class="py-6 px-8 text-sm font-bold text-gray-500">{{ project.id }}</td>
                        <td class="py-6 px-4 text-sm font-bold text-[#2A1D1A] pr-10 leading-relaxed">{{ project.name }}</td>
                        <td class="py-6 px-4 text-sm font-bold text-gray-500">{{ project.author }}</td>
                        <td class="py-6 px-4 text-sm font-bold text-gray-500 text-center">{{ project.year }}</td>
                        <td class="py-6 px-4 text-sm font-bold text-gray-500 leading-relaxed">{{ project.fundSource }}</td>
                        <td class="py-6 px-8 text-sm font-black text-[#2A1D1A] text-right">{{ project.budget | number }}</td>
                     </tr>
                  }
               </tbody>
            </table>
         </div>

         <div class="p-6 border-t border-gray-50 flex justify-center items-center gap-2">
            <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F9BD15] text-[#2A1D1A] font-black text-xs shadow-sm">1</button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 font-bold text-xs hover:bg-gray-50 transition-colors">2</button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 font-bold text-xs hover:bg-gray-50 transition-colors">3</button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 font-bold text-xs hover:bg-gray-50 transition-colors">4</button>
            <span class="text-gray-400">...</span>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 font-bold text-xs hover:bg-gray-50 transition-colors">10</button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
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
  `]
})
export class ResearchComponent {
  // ข้อมูลจำลองสำหรับตารางวิจัย
  mockProjects = [
    {
      id: 1,
      name: 'การศึกษาผลของการคั่วโดยใช้ไอน้ำร้อนยวด ยิ่งที่มีต่อคุณภาพของเมล็ดกาแฟโรบัสต้าที่สกัดคาเฟอีนออกโดยกระบวนการที่ใช้น้ำ',
      author: 'ผศ.ดร.ณฐมล จินดาพรรณ',
      year: '2566',
      fundSource: 'สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ',
      budget: 600000
    },
    // เพิ่มข้อมูลหลอกๆ แถวที่ 2 เพื่อให้เห็นความสวยงามของตาราง
    {
      id: 2,
      name: 'การพัฒนาแพลตฟอร์ม IoT สำหรับการจัดการน้ำในแปลงเกษตรอัจฉริยะ',
      author: 'รศ.ดร. สมชาย ใจดี',
      year: '2566',
      fundSource: 'กองทุนวิจัยมหาวิทยาลัยสยาม',
      budget: 150000
    }
  ];
}