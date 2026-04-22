import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-plans',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="max-w-[1000px] mx-auto animate-in fade-in duration-500 pb-20">
      
      <div class="flex items-center gap-3 mb-8">
        <div class="w-1.5 h-6 bg-[#F9BD15] rounded-full"></div>
        <h2 class="font-black text-[#2A1D1A] text-xl uppercase tracking-widest">Plans / Projects</h2>
      </div>

      <div class="space-y-6">
        
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
           <div class="flex items-center gap-3 mb-6 text-[#F9BD15]">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
             <h3 class="font-black text-[#2A1D1A] text-lg">ข้อมูลแผนงาน/โครงการ</h3>
           </div>
           
           <div class="space-y-4">
              <div>
                <label class="text-xs font-bold text-gray-400 mb-2 block">ตั้งชื่อโครงการ</label>
                <input type="text" class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-[#F9BD15] outline-none transition-all">
              </div>
              
              <div>
                <label class="text-xs font-bold text-gray-400 mb-2 block">กิจกรรมย่อย</label>
                <div class="flex gap-2">
                   <input type="text" class="flex-1 p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-[#F9BD15] outline-none">
                   <button class="w-14 bg-green-50 text-green-600 rounded-xl font-black text-xl hover:bg-green-100 transition-colors">+</button>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-6">
                 <div>
                    <label class="text-xs font-bold text-gray-400 mb-2 block">ยุทธศาสตร์</label>
                    <select class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-[#F9BD15] outline-none">
                       <option>เลือกแผนยุทธศาสตร์</option>
                    </select>
                 </div>
                 <div>
                    <label class="text-xs font-bold text-gray-400 mb-2 block">แผนงาน</label>
                    <select class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-[#F9BD15] outline-none">
                       <option>เลือกแผนงาน</option>
                    </select>
                 </div>
              </div>
           </div>
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
           <div class="flex justify-between items-center mb-6">
             <div class="flex items-center gap-3 text-[#F9BD15]">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
               <h3 class="font-black text-[#2A1D1A] text-lg">ชื่อผู้รับผิดชอบ</h3>
             </div>
             <button class="text-[#F9BD15] font-black text-xs">+ เพิ่มรายชื่อ</button>
           </div>
           
           <input type="text" placeholder="ค้นหาชื่อผู้ร่วมอบรม สัมมนา" class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-[#F9BD15] outline-none mb-4">
           
           <div class="bg-gray-50 rounded-2xl p-4">
              <div class="flex justify-between py-3 px-4 border-b border-gray-200 text-xs font-bold text-gray-400">
                 <span>ชื่อ-นามสกุล</span>
                 <span>แก้ไข</span>
              </div>
              <div class="flex justify-between py-4 px-4 items-center">
                 <span class="font-bold text-sm text-[#2A1D1A]">ดร. ลอร์ดโวลเดอมอร์</span>
                 <button class="text-red-400 hover:text-red-600 font-bold text-xs">ลบ</button>
              </div>
           </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
           <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div class="flex items-center gap-3 mb-6 text-[#F9BD15]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                 <h3 class="font-black text-[#2A1D1A] text-lg">ข้อมูลลงงบประมาณ</h3>
              </div>
              <div class="space-y-4">
                <input type="number" placeholder="งบประมาณอนุมัติ" class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-[#F9BD15] outline-none">
                <input type="number" placeholder="งบประมาณใช้จริง" class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-[#F9BD15] outline-none">
              </div>
           </div>

           <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div class="flex items-center gap-3 mb-6 text-[#F9BD15]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/></svg>
                 <h3 class="font-black text-[#2A1D1A] text-lg">ข้อมูลสถานะ</h3>
              </div>
              <select class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-[#F9BD15] outline-none appearance-none mb-6">
                 <option>อยู่ระหว่างดำเนินการ</option>
                 <option>ยังไม่ได้ดำเนินการ</option>
                 <option>เสร็จสิ้น</option>
              </select>
              <label class="text-xs font-bold text-gray-400 mb-2 block">รายละเอียด</label>
              <textarea class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-[#F9BD15] outline-none h-24"></textarea>
           </div>
        </div>

        <div class="flex justify-end gap-4 pt-6">
           <button routerLink="/admin/plans" class="px-8 py-3 rounded-xl font-bold text-gray-400 hover:text-[#2A1D1A]">ยกเลิก</button>
           <button class="px-10 py-3 rounded-xl font-black bg-[#F9BD15] text-[#2A1D1A] shadow-md hover:brightness-105 active:scale-95 transition-all">บันทึกข้อมูล</button>
        </div>

      </div>
    </div>
  `
})
export class AddPlansComponent {}