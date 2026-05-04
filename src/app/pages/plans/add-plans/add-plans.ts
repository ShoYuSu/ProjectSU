import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-plans',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="max-w-[1000px] mx-auto animate-in fade-in duration-500 pb-20">
      
      <!-- HEADER -->
      <div class="flex items-center gap-3 mb-8">
        <div class="w-1.5 h-6 bg-su-gold rounded-full"></div>
        <h2 class="font-black text-su-brown text-xl uppercase tracking-widest">Plans / Projects</h2>
      </div>

      <div class="space-y-6">
        
        <!-- ================= SECTION 1: ข้อมูลแผนงาน ================= -->
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
           <div class="flex items-center gap-3 mb-6 text-su-gold">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
             <h3 class="font-black text-su-brown text-lg">ข้อมูลแผนงาน/โครงการ</h3>
           </div>
           
           <div class="space-y-4">
              <div>
                <label class="text-xs font-bold text-gray-400 mb-2 block">ตั้งชื่อโครงการ</label>
                <input type="text" class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-su-gold outline-none transition-all">
              </div>
              
              <!-- กิจกรรมย่อย (เพิ่ม/ลบ ได้) -->
              <div>
                <label class="text-xs font-bold text-gray-400 mb-2 block">กิจกรรมย่อย</label>
                <div class="space-y-3">
                   @for (item of subActivities(); track item.id; let first = $first) {
                     <div class="flex gap-2 animate-in fade-in slide-in-from-top-1">
                        <input type="text" 
                               [value]="item.value"
                               (input)="updateSubActivity(item.id, $any($event.target).value)"
                               placeholder="ระบุกิจกรรมย่อย" 
                               class="flex-1 p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-su-gold outline-none transition-all">
                        
                        @if (first) {
                          <button type="button" (click)="addSubActivity()" class="w-14 bg-green-50 text-green-600 rounded-xl font-black text-xl hover:bg-green-100 active:scale-95 transition-all">+</button>
                        } @else {
                          <button type="button" (click)="removeSubActivity(item.id)" class="w-14 bg-red-50 text-red-500 rounded-xl font-black text-xl hover:bg-red-100 active:scale-95 transition-all">-</button>
                        }
                     </div>
                   }
                </div>
              </div>

              <div class="grid grid-cols-2 gap-6">
                 <!-- ยุทธศาสตร์ Dropdown -->
                 <div class="relative">
                    <label class="text-xs font-bold text-gray-400 mb-2 block">ยุทธศาสตร์</label>
                    <button type="button" (click)="toggleStrategy()" 
                      class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border outline-none flex justify-between items-center transition-all"
                      [class.border-su-gold]="isStrategyOpen()" 
                      [class.bg-white]="isStrategyOpen()"
                      [class.border-transparent]="!isStrategyOpen()">
                       <span [class.text-gray-400]="selectedStrategy() === 'เลือกแผนยุทธศาสตร์'">{{ selectedStrategy() }}</span>
                       <svg [class.rotate-180]="isStrategyOpen()" class="w-4 h-4 transition-transform text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>

                    @if (isStrategyOpen()) {
                      <ul class="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden max-h-72 flex flex-col animate-in slide-in-from-top-2">
                         <div class="overflow-y-auto custom-scrollbar flex-1">
                           @for (item of strategiesList(); track item) {
                             <li (click)="selectStrategy(item)" 
                               class="px-4 py-3 text-sm font-bold text-su-brown cursor-pointer transition-colors hover:bg-[#FEF5DD]" 
                               [class.bg-[#FEF5DD]]="selectedStrategy() === item">
                               {{ item }}
                             </li>
                           }
                         </div>
                         <div class="border-t border-gray-100 p-2 bg-gray-50">
                           @if (!isAddingStrategy()) {
                             <button type="button" (click)="isAddingStrategy.set(true); $event.stopPropagation()" class="w-full text-left px-3 py-2 text-sm font-bold text-su-gold hover:bg-white rounded-lg transition-colors flex items-center gap-2">
                               <span>+</span> เพิ่มยุทธศาสตร์ใหม่
                             </button>
                           } @else {
                             <div class="flex gap-2" (click)="$event.stopPropagation()">
                               <input #newStrategy type="text" placeholder="พิมพ์ชื่อยุทธศาสตร์..." class="flex-1 px-3 py-2 text-sm font-bold border border-gray-200 rounded-lg outline-none focus:border-su-gold">
                               <button type="button" (click)="addNewStrategy(newStrategy.value)" class="px-4 py-2 bg-su-gold text-su-brown text-sm font-bold rounded-lg hover:brightness-105 active:scale-95 transition-all">เพิ่ม</button>
                               <button type="button" (click)="isAddingStrategy.set(false)" class="px-3 py-2 text-gray-400 hover:text-red-500 font-bold text-sm transition-colors">✕</button>
                             </div>
                           }
                         </div>
                      </ul>
                    }
                 </div>

                 <!-- แผนงาน Dropdown -->
                 <div class="relative">
                    <label class="text-xs font-bold text-gray-400 mb-2 block">แผนงาน</label>
                    <button type="button" (click)="togglePlan()" 
                      class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border outline-none flex justify-between items-center transition-all"
                      [class.border-su-gold]="isPlanOpen()" 
                      [class.bg-white]="isPlanOpen()"
                      [class.border-transparent]="!isPlanOpen()">
                       <span [class.text-gray-400]="selectedPlan() === 'เลือกแผนงาน'">{{ selectedPlan() }}</span>
                       <svg [class.rotate-180]="isPlanOpen()" class="w-4 h-4 transition-transform text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>

                    @if (isPlanOpen()) {
                      <ul class="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden max-h-72 flex flex-col animate-in slide-in-from-top-2">
                         <div class="overflow-y-auto custom-scrollbar flex-1">
                           @for (item of plansList(); track item) {
                             <li (click)="selectPlan(item)" 
                               class="px-4 py-3 text-sm font-bold text-su-brown cursor-pointer transition-colors hover:bg-[#FEF5DD]" 
                               [class.bg-[#FEF5DD]]="selectedPlan() === item">
                               {{ item }}
                             </li>
                           }
                         </div>
                         <div class="border-t border-gray-100 p-2 bg-gray-50">
                           @if (!isAddingPlan()) {
                             <button type="button" (click)="isAddingPlan.set(true); $event.stopPropagation()" class="w-full text-left px-3 py-2 text-sm font-bold text-su-gold hover:bg-white rounded-lg transition-colors flex items-center gap-2">
                               <span>+</span> เพิ่มแผนงานใหม่
                             </button>
                           } @else {
                             <div class="flex gap-2" (click)="$event.stopPropagation()">
                               <input #newPlan type="text" placeholder="พิมพ์ชื่อแผนงาน..." class="flex-1 px-3 py-2 text-sm font-bold border border-gray-200 rounded-lg outline-none focus:border-su-gold">
                               <button type="button" (click)="addNewPlan(newPlan.value)" class="px-4 py-2 bg-su-gold text-su-brown text-sm font-bold rounded-lg hover:brightness-105 active:scale-95 transition-all">เพิ่ม</button>
                               <button type="button" (click)="isAddingPlan.set(false)" class="px-3 py-2 text-gray-400 hover:text-red-500 font-bold text-sm transition-colors">✕</button>
                             </div>
                           }
                         </div>
                      </ul>
                    }
                 </div>

              </div>
           </div>
        </div>

        <!-- ================= SECTION 2: ชื่อผู้รับผิดชอบ ================= -->
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
           <div class="flex justify-between items-center mb-6">
             <div class="flex items-center gap-3 text-su-gold">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
               <h3 class="font-black text-su-brown text-lg">ชื่อผู้รับผิดชอบ</h3>
             </div>
             <button class="text-su-gold font-black text-xs hover:brightness-110">+ เพิ่มรายชื่อ</button>
           </div>
           
           <input type="text" placeholder="ค้นหาชื่อผู้ร่วมอบรม สัมมนา" class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-su-gold outline-none mb-4 transition-all">
           
           <div class="bg-gray-50 rounded-2xl p-4">
              <div class="flex justify-between py-3 px-4 border-b border-gray-200 text-xs font-bold text-gray-400">
                 <span>ชื่อ-นามสกุล</span>
                 <span>แก้ไข</span>
              </div>
              <div class="flex justify-between py-4 px-4 items-center">
                 <span class="font-bold text-sm text-su-brown">ดร. ลอร์ดโวลเดอมอร์</span>
                 <button class="text-red-400 hover:text-red-600 font-bold text-xs transition-colors">ลบ</button>
              </div>
           </div>
        </div>

        <!-- ================= SECTION 3 & 4: งบประมาณและสถานะ ================= -->
        <div class="grid grid-cols-2 gap-6">
           <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div class="flex items-center gap-3 mb-6 text-su-gold">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                 <h3 class="font-black text-su-brown text-lg">ข้อมูลลงงบประมาณ</h3>
              </div>
              <div class="space-y-4">
                <div>
                   <label class="text-xs font-bold text-gray-400 mb-2 block">งบประมาณอนุมัติ</label>
                   <input type="number" class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-su-gold outline-none transition-all">
                </div>
                <div>
                   <label class="text-xs font-bold text-gray-400 mb-2 block">งบประมาณใช้จริง</label>
                   <input type="number" class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-su-gold outline-none transition-all">
                </div>
              </div>
           </div>

           <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div class="flex items-center gap-3 mb-6 text-su-gold">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/></svg>
                 <h3 class="font-black text-su-brown text-lg">ข้อมูลสถานะ</h3>
              </div>
              <div class="space-y-4">
                 
                 <!-- สถานะ Dropdown -->
                 <div class="relative">
                    <label class="text-xs font-bold text-gray-400 mb-2 block">สถานะของแผนงาน/โครงการ</label>
                    <button type="button" (click)="toggleStatus()" 
                      class="w-full p-4 rounded-xl font-bold text-sm border outline-none flex justify-between items-center transition-all"
                      [ngClass]="{
                        'border-su-gold bg-white text-su-brown': isStatusOpen(),
                        'border-transparent': !isStatusOpen(),
                        'bg-gray-50 text-gray-400': !isStatusOpen() && selectedStatus() === 'ระบุสถานะ',
                        'bg-[#FEF5DD] text-su-brown': !isStatusOpen() && selectedStatus() === 'อยู่ระหว่างดำเนินการ',
                        'bg-[#FFD6D6] text-su-brown': !isStatusOpen() && selectedStatus() === 'ยังไม่ได้ดำเนินการ',
                        'bg-[#D1F0D1] text-su-brown': !isStatusOpen() && selectedStatus() === 'เสร็จสิ้น'
                      }">
                       <span>{{ selectedStatus() }}</span>
                       <svg [class.rotate-180]="isStatusOpen()" class="w-4 h-4 transition-transform" 
                            [class.text-gray-400]="selectedStatus() === 'ระบุสถานะ' || isStatusOpen()"
                            [class.text-su-brown]="selectedStatus() !== 'ระบุสถานะ' && !isStatusOpen()"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                       </svg>
                    </button>

                    @if (isStatusOpen()) {
                      <ul class="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden flex flex-col animate-in slide-in-from-top-2">
                         @for (item of statusList; track item) {
                           <li (click)="selectStatus(item)" 
                             class="px-4 py-3 text-sm font-bold text-su-brown cursor-pointer transition-colors hover:bg-gray-50" 
                             [class.bg-gray-50]="selectedStatus() === item">
                             {{ item }}
                           </li>
                         }
                      </ul>
                    }
                 </div>

                 <!-- ⭐️ แสดงรายละเอียดเฉพาะเมื่อเลือก "อยู่ระหว่างดำเนินการ" ⭐️ -->
                 @if (selectedStatus() === 'อยู่ระหว่างดำเนินการ') {
                   <div class="animate-in fade-in slide-in-from-top-1">
                      <label class="text-xs font-bold text-gray-400 mb-2 block">รายละเอียด</label>
                      <textarea placeholder="ระบุรายละเอียดเพิ่มเติม..." class="w-full p-4 bg-gray-50 rounded-xl font-bold text-sm border border-transparent focus:bg-white focus:border-su-gold outline-none h-[120px] transition-all"></textarea>
                   </div>
                 }
              </div>
           </div>
        </div>

        <!-- ================= FOOTER ACTIONS ================= -->
        <div class="flex justify-end gap-4 pt-6">
           <button routerLink="/admin/plans" class="px-8 py-3 rounded-xl font-bold text-gray-400 hover:text-su-brown transition-colors">ยกเลิก</button>
           <button class="px-10 py-3 rounded-xl font-black bg-su-gold text-su-brown shadow-md hover:brightness-105 active:scale-95 transition-all">บันทึกข้อมูล</button>
        </div>

      </div>
    </div>
  `
})
export class AddPlansComponent {
  
  // ================= กิจกรรมย่อย =================
  subActivities = signal([{ id: 1, value: '' }]);
  nextSubId = 2;

  addSubActivity() {
    this.subActivities.update(list => [...list, { id: this.nextSubId++, value: '' }]);
  }

  removeSubActivity(id: number) {
    this.subActivities.update(list => list.filter(item => item.id !== id));
  }

  updateSubActivity(id: number, newValue: string) {
    this.subActivities.update(list => 
      list.map(item => item.id === id ? { ...item, value: newValue } : item)
    );
  }

  // ================= ข้อมูล Dropdowns =================
  strategiesList = signal([
    '1. Future Research and Innovation',
    '2. Future Education',
    '3. Future Lecturer/Researcher',
    '4. Future System for Management',
    '5. Sustainable Future',
    '6. บริการวิชาการและบริการชุมชน',
    '7. การทำนุบำรุงศิลปะและวัฒนธรรมและสร้างจิตสำนึกฯ'
  ]);

  plansList = signal(['แผนงาน1', 'แผนงาน2', 'แผนงาน3', 'แผนงาน4', 'แผนงาน5']);
  
  statusList = ['อยู่ระหว่างดำเนินการ', 'ยังไม่ได้ดำเนินการ', 'เสร็จสิ้น'];

  // ================= State ควบคุม =================
  isStrategyOpen = signal(false);
  selectedStrategy = signal('เลือกแผนยุทธศาสตร์');
  isAddingStrategy = signal(false);

  isPlanOpen = signal(false);
  selectedPlan = signal('เลือกแผนงาน');
  isAddingPlan = signal(false);

  isStatusOpen = signal(false);
  selectedStatus = signal('ระบุสถานะ');

  // ================= ฟังก์ชันควบคุมยุทธศาสตร์ =================
  toggleStrategy() {
    this.isStrategyOpen.set(!this.isStrategyOpen());
    this.isPlanOpen.set(false);
    this.isStatusOpen.set(false);
    this.isAddingStrategy.set(false);
  }

  selectStrategy(strategy: string) {
    this.selectedStrategy.set(strategy);
    this.isStrategyOpen.set(false);
  }

  addNewStrategy(value: string) {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      this.strategiesList.update(list => [...list, trimmedValue]);
      this.selectedStrategy.set(trimmedValue);
      this.isStrategyOpen.set(false);
      this.isAddingStrategy.set(false);
    }
  }

  // ================= ฟังก์ชันควบคุมแผนงาน =================
  togglePlan() {
    this.isPlanOpen.set(!this.isPlanOpen());
    this.isStrategyOpen.set(false);
    this.isStatusOpen.set(false);
    this.isAddingPlan.set(false);
  }

  selectPlan(plan: string) {
    this.selectedPlan.set(plan);
    this.isPlanOpen.set(false);
  }

  addNewPlan(value: string) {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      this.plansList.update(list => [...list, trimmedValue]);
      this.selectedPlan.set(trimmedValue);
      this.isPlanOpen.set(false);
      this.isAddingPlan.set(false);
    }
  }

  // ================= ฟังก์ชันควบคุมสถานะ =================
  toggleStatus() {
    this.isStatusOpen.set(!this.isStatusOpen());
    this.isStrategyOpen.set(false);
    this.isPlanOpen.set(false);
  }

  selectStatus(status: string) {
    this.selectedStatus.set(status);
    this.isStatusOpen.set(false);
  }
}