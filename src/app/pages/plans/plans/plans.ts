import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="max-w-[1200px] mx-auto animate-in fade-in duration-500 pb-10 space-y-6">
      <div class="flex justify-between items-center mb-8">
        <div>
           <h2 class="font-black text-[#2A1D1A] text-xl uppercase tracking-widest">Plans / Projects</h2>
        </div>
        <button routerLink="/admin/plans/add" class="bg-[#F9BD15] text-[#2A1D1A] px-6 py-3 rounded-xl font-black text-sm hover:brightness-105 active:scale-95 transition-all shadow-sm">
           + เพิ่มสรุปโครงการ
        </button>
      </div>

      <div class="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
         <table class="w-full text-left">
            <thead class="text-xs text-gray-500 font-bold border-b border-gray-100">
               <tr>
                  <th class="py-4">ชื่อโครงการ</th>
                  <th class="py-4">กิจกรรมย่อย</th>
                  <th class="py-4">ยุทธศาสตร์</th>
                  <th class="py-4">แผนงาน</th>
                  <th class="py-4">ผู้รับผิดชอบ</th>
               </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
               <tr>
                  <td class="py-6 text-sm font-bold text-[#2A1D1A]">ตัวอย่างโครงการ A</td>
                  <td class="py-6 text-sm font-bold text-gray-500">-</td>
                  <td class="py-6 text-sm font-bold text-gray-500">-</td>
                  <td class="py-6 text-sm font-bold text-gray-500">-</td>
                  <td class="py-6 text-sm font-bold text-gray-500">-</td>
               </tr>
            </tbody>
         </table>
      </div>
    </div>
  `
})
export class PlansComponent {}