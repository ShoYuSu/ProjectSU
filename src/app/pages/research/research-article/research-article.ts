import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-research-article',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-[1200px] mx-auto animate-in fade-in duration-500 pb-10 space-y-6">
      
      <div class="mb-8 flex items-center gap-3">
        <div class="w-1.5 h-6 bg-[#F9BD15] rounded-full"></div>
        <h2 class="font-black text-[#2A1D1A] text-xl uppercase tracking-widest">Research Article</h2>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-black text-[#2A1D1A] mb-2">คลังข้อมูลบทความวิจัย</h2>
        <p class="text-sm text-gray-400 font-bold">ศูนย์รวมบทความวิจัยของบุคลากรในคณะ สำหรับจัดเก็บ ค้นหา และแสดงผลงานทางวิชาการอย่างเป็นระบบ</p>
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
         <div class="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex items-center gap-3">
               <div class="text-[#F9BD15]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
               </div>
               <h3 class="font-black text-[#2A1D1A] text-lg">บทความวิจัย</h3>
            </div>

            <div class="bg-gray-50 p-1.5 rounded-2xl flex items-center border border-gray-100">
               <button (click)="activeTab = 'conference'" 
                       [class.bg-white]="activeTab === 'conference'" [class.shadow-sm]="activeTab === 'conference'" [class.text-[#2A1D1A]]="activeTab === 'conference'"
                       [class.text-gray-400]="activeTab !== 'conference'"
                       class="px-8 py-2.5 rounded-xl font-bold text-sm transition-all">
                  ประชุมวิจัย
               </button>
               <button (click)="activeTab = 'journal'" 
                       [class.bg-white]="activeTab === 'journal'" [class.shadow-sm]="activeTab === 'journal'" [class.text-[#2A1D1A]]="activeTab === 'journal'"
                       [class.text-gray-400]="activeTab !== 'journal'"
                       class="px-8 py-2.5 rounded-xl font-bold text-sm transition-all">
                  วารสาร
               </button>
            </div>
         </div>
         
         <div class="overflow-x-auto">
            <table class="w-full text-left min-w-[1000px]">
               <thead class="bg-gray-50 text-xs text-gray-500 font-bold">
                  <tr>
                     <th class="py-5 px-8 w-20">ลำดับ</th>
                     <th class="py-5 px-4 w-64">ชื่อเรื่อง</th>
                     <th class="py-5 px-4 w-48">ชื่อผู้เขียนบทความ</th>
                     <th class="py-5 px-4 w-56">ชื่อการประชุม</th>
                     <th class="py-5 px-4 w-48">สถานที่จัด</th>
                     <th class="py-5 px-8 w-32">วันเดือนปีที่นำเสนอ</th>
                  </tr>
               </thead>
               <tbody class="divide-y divide-gray-50">
                  @for (article of mockArticles; track article.id) {
                     <tr class="hover:bg-gray-50/50 transition-colors">
                        <td class="py-6 px-8 text-sm font-bold text-gray-500 align-top">{{ article.id }}</td>
                        <td class="py-6 px-4 text-sm font-bold text-[#2A1D1A] leading-relaxed align-top">{{ article.title }}</td>
                        <td class="py-6 px-4 text-sm font-bold text-gray-500 leading-relaxed align-top whitespace-pre-line">{{ article.authors }}</td>
                        <td class="py-6 px-4 text-sm font-bold text-gray-500 leading-relaxed align-top">{{ article.conferenceName }}</td>
                        <td class="py-6 px-4 text-sm font-bold text-gray-500 leading-relaxed align-top">{{ article.location }}</td>
                        <td class="py-6 px-8 text-sm font-bold text-[#2A1D1A] align-top">{{ article.date }}</td>
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
export class ResearchArticleComponent {
  // สร้างตัวแปรคุม Tab (ประชุมวิจัย / วารสาร)
  activeTab = 'conference'; 

  // ข้อมูลจำลองสำหรับบทความวิจัย
  mockArticles = [
    {
      id: 1,
      title: 'การพัฒนาแอปพลิเคชัน "Reach You" สำหรับการบริหารจัดการขยะก่อสร้างบนแพลตฟอร์มแอนดรอยด์',
      authors: 'จรรยา แหยมเจริญ,\nพัสรัฐ อาจหาญศิริวงศ์,\nอัตพล ยมพ้วย\nและ ณพงษ์ สมัครกิจ',
      conferenceName: 'การประชุมวิชาการระดับชาติ ครั้งที่ 17 มหาวิทยาลัยราชภัฏนครปฐม',
      location: 'โรงแรม ไมด้า แกรนด์ ทวารวดี นครปฐม',
      date: '3 กรกฎาคม 2568'
    }
  ];
}