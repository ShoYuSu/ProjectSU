import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="max-w-[1200px] mx-auto animate-in fade-in duration-500 pb-10 relative">
      
      <div class="flex items-center gap-3 mb-8">
        <div class="w-1.5 h-6 bg-[#F9BD15] rounded-full"></div>
        <h2 class="font-black text-[#2A1D1A] text-xl uppercase tracking-widest">Add User</h2>
      </div>

      <div class="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100">
        <div class="flex justify-between items-start mb-10 pb-8 border-b border-gray-50">
           <div>
              <h2 class="text-2xl font-black text-[#2A1D1A] mb-2">เพิ่มบุคลากรใหม่</h2>
              <p class="text-sm text-gray-400 font-bold">จัดการข้อมูลพื้นฐานและกำหนดขอบเขตสิทธิ์การใช้งานระบบ</p>
           </div>
           <div class="flex items-center gap-4">
             <button routerLink="/admin/staff" class="text-gray-400 font-bold hover:text-[#2A1D1A] px-4 transition-colors">ยกเลิก</button>
             
             <button (click)="onSubmit()" class="bg-[#F9BD15] px-8 py-3 rounded-xl font-black text-[#2A1D1A] shadow-md hover:brightness-105 active:scale-95 transition-all">
               บันทึกข้อมูล
             </button>
           </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div class="lg:col-span-4 space-y-6">
             <div class="flex items-center gap-3 mb-6">
                <div class="text-[#F9BD15]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <h3 class="font-black text-[#2A1D1A] text-lg">ข้อมูลพื้นฐาน</h3>
             </div>

             <div class="flex flex-col items-center justify-center mb-8">
                <div class="w-32 h-32 rounded-full bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center mb-4 cursor-pointer hover:bg-gray-100 transition-colors relative group">
                  <svg class="w-8 h-8 text-gray-300 group-hover:text-[#F9BD15] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.66-.9l.82-1.23A2 2 0 0110.07 4h3.86a2 2 0 011.66.9l.82 1.23A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 10-6 0 3 3 0 006 0z"/></svg>
                </div>
             </div>

             <div class="space-y-4">
                <div>
                  <label class="block text-[11px] font-bold text-gray-400 mb-2">ชื่อ-นามสกุล</label>
                  <input type="text" class="w-full p-3.5 bg-gray-50 rounded-xl text-sm font-bold border border-transparent focus:border-[#F9BD15] focus:bg-white outline-none transition-all">
                </div>
                <div>
                  <label class="block text-[11px] font-bold text-gray-400 mb-2">รหัสประจำตัว</label>
                  <input type="text" class="w-full p-3.5 bg-gray-50 rounded-xl text-sm font-bold border border-transparent focus:border-[#F9BD15] focus:bg-white outline-none transition-all">
                </div>
                <div>
                  <label class="block text-[11px] font-bold text-gray-400 mb-2">อีเมล</label>
                  <input type="email" class="w-full p-3.5 bg-gray-50 rounded-xl text-sm font-bold border border-transparent focus:border-[#F9BD15] focus:bg-white outline-none transition-all">
                </div>
                <div>
                  <label class="block text-[11px] font-bold text-gray-400 mb-2">สาขา/ภาควิชา</label>
                  <div class="relative">
                    <select class="w-full p-3.5 bg-gray-50 rounded-xl text-sm font-bold border border-transparent focus:border-[#F9BD15] focus:bg-white outline-none appearance-none transition-all">
                      <option value="" disabled selected>เลือกสาขา/ภาควิชา</option>
                      <option value="cs">Computer Science</option>
                      <option value="math">Mathematics</option>
                      <option value="chem">Chemistry</option>
                    </select>
                    <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
             </div>
          </div>

          <div class="lg:col-span-8">
             <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-3">
                  <div class="text-[#F9BD15]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 class="font-black text-[#2A1D1A] text-lg">การกำหนดสิทธิ์</h3>
                </div>
                <div class="bg-[#F9BD15]/10 text-[#D97706] px-4 py-2 rounded-full text-[10px] font-bold flex items-center gap-2">
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                   เลือกขอบเขตข้อมูลสำหรับแต่ละการกระทำ
                </div>
             </div>
             
             <div class="overflow-x-auto">
               <table class="w-full min-w-[600px]">
                  <thead class="text-[10px] text-gray-400 font-bold border-b border-gray-100">
                     <tr>
                        <th class="text-left py-4 px-2">ฟีเจอร์ / โมดูล</th>
                        <th class="py-4 text-center w-32">ดูข้อมูล (VIEW)</th>
                        <th class="py-4 text-center w-36">เพิ่มข้อมูล (ADD)</th>
                        <th class="py-4 text-center w-36">แก้ไข/ลบ (EDIT)</th>
                     </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-50">
                     @for (mod of modules; track mod.id) {
                       <tr class="hover:bg-gray-50/50 transition-colors">
                          <td class="py-6 px-2">
                             <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400" [innerHTML]="mod.icon"></div>
                                <div>
                                   <p class="font-black text-sm text-[#2A1D1A]">{{ mod.name }}</p>
                                   <p class="text-[10px] text-gray-400 font-bold mt-0.5">{{ mod.subName }}</p>
                                </div>
                             </div>
                          </td>
                          <td class="text-center">
                             <label class="relative inline-flex items-center cursor-pointer">
                               <input type="checkbox" class="sr-only peer" [checked]="mod.viewAccess">
                               <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F9BD15]"></div>
                             </label>
                          </td>
                          <td class="text-center px-2">
                             <select class="w-full text-xs font-bold bg-gray-50 border border-gray-100 text-gray-500 rounded-lg focus:ring-[#F9BD15] focus:border-[#F9BD15] p-2.5 outline-none appearance-none text-center cursor-pointer" [disabled]="!mod.viewAccess">
                                <option>ปิดการใช้งาน</option>
                                <option>เฉพาะของตนเอง</option>
                                <option>เฉพาะในภาควิชา</option>
                             </select>
                          </td>
                          <td class="text-center px-2">
                             <select class="w-full text-xs font-bold bg-gray-50 border border-gray-100 text-gray-500 rounded-lg focus:ring-[#F9BD15] focus:border-[#F9BD15] p-2.5 outline-none appearance-none text-center cursor-pointer" [disabled]="!mod.viewAccess">
                                <option>ปิดการใช้งาน</option>
                                <option>เฉพาะของตนเอง</option>
                                <option>เฉพาะในภาควิชา</option>
                             </select>
                          </td>
                       </tr>
                     }
                  </tbody>
               </table>
             </div>
          </div>
        </div>
      </div>
    </div>

    @if (showSuccessModal()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a1a1a]/80 backdrop-blur-sm animate-in fade-in duration-300">
        <div class="bg-white rounded-3xl p-10 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95 duration-300">
           <h3 class="text-xl font-black text-[#2A1D1A] mb-6">บัญชีถูกสร้างขึ้นแล้ว</h3>
           
           <p class="text-[13px] text-gray-500 font-bold leading-relaxed mb-8">
             อีเมล จะถูกใช้เป็น Username<br>
             และ รหัสประจำตัว จะถูกใช้เป็น Password<br>
             ในช่วงแรกเข้า<br>
             และจะถูกบังคับให้เปลี่ยนรหัสผ่าน
           </p>
           
           <button (click)="closeModal()" class="w-full bg-[#F9BD15] text-white font-bold py-3.5 rounded-xl hover:bg-yellow-400 active:scale-95 transition-all shadow-md">
             ฉันเข้าใจแล้ว
           </button>
        </div>
      </div>
    }
  `,
  styles: [`
    .animate-in { animation: fadeIn 0.4s ease-out forwards; }
    .zoom-in-95 { animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes zoomIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
  `]
})
export class AddStaffComponent {
  // สร้างตัวแปร State เพื่อคุมการเปิด/ปิด Modal (ค่าเริ่มต้นคือ false = ปิดอยู่)
  showSuccessModal = signal(false);

  // เรียกใช้ Router เพื่อเอาไว้เปลี่ยนหน้า
  constructor(private router: Router) {}

  // ฟังก์ชันเมื่อกดปุ่ม "บันทึกข้อมูล"
  onSubmit() {
    // โชว์ Pop-up
    this.showSuccessModal.set(true);
    
    // (ในอนาคต: โค้ดส่งข้อมูลเข้า Database API จะอยู่ตรงนี้ครับ)
  }

  // ฟังก์ชันเมื่อกดปุ่ม "ฉันเข้าใจแล้ว" ใน Pop-up
  closeModal() {
    this.showSuccessModal.set(false); // ปิด Pop-up
    this.router.navigate(['/admin/staff']); // ดีดกลับไปหน้า Staff Information (รายชื่อ)
  }

  modules = [
    { id: 1, name: 'Dashboard', subName: 'แดชบอร์ด', viewAccess: true, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>' },
    { id: 2, name: 'Staff Info', subName: 'ข้อมูลบุคลากร', viewAccess: false, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
    { id: 3, name: 'Research Info', subName: 'ข้อมูลวิจัย', viewAccess: true, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>' },
    { id: 4, name: 'Plans / Projects', subName: 'แผนงาน / โครงการ', viewAccess: true, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>' },
    { id: 5, name: 'Training', subName: 'ข้อมูลอบรม', viewAccess: false, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>' }
  ];
}