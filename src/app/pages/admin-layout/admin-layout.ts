import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex h-screen bg-[#FDFBF7] font-sans text-[#2C2220] overflow-hidden">
      <aside class="w-[280px] bg-[#3A1E1D] flex flex-col shadow-2xl z-20 shrink-0 text-white">
        
        <div class="p-8 pt-12 flex flex-col items-center border-b border-white/5 mb-4">
          <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center p-1 mb-4 shadow-lg">
             <img src="https://upload.wikimedia.org/wikipedia/th/thumb/a/a2/Siam_University_Logo.svg/150px-Siam_University_Logo.svg.png" class="object-contain h-12" />
          </div>
          <h1 class="font-black tracking-widest text-sm uppercase">SU SCIENCE MIS</h1>
        </div>

        <nav class="flex-1 px-6 space-y-2 overflow-y-auto no-scrollbar">
          <button routerLink="/admin/dashboard" routerLinkActive="bg-[#F9BD15] text-[#2A1D1A]" [routerLinkActiveOptions]="{exact: true}" 
            class="w-full flex items-center px-6 py-4 rounded-2xl transition-all font-bold text-sm text-left hover:bg-white/5">
            Dashboard
          </button>

          <div class="space-y-1">
            <button (click)="toggleStaff()" 
              [class.bg-[#F9BD15]]="isStaffExpanded()" [class.text-[#2A1D1A]]="isStaffExpanded()"
              class="w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all font-bold text-sm text-left hover:bg-white/5">
              <span>Staff Information</span>
              <svg [class.rotate-180]="isStaffExpanded()" class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            @if (isStaffExpanded()) {
              <div class="pl-8 space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                <a routerLink="/admin/staff" class="block py-2 text-xs font-bold text-gray-300 hover:text-[#F9BD15] transition-colors">List All (ทั้งหมด)</a>
                <a routerLink="/admin/staff" class="block py-2 text-xs font-bold text-gray-300 hover:text-[#F9BD15] transition-colors">Mathematics</a>
                <a routerLink="/admin/staff" class="block py-2 text-xs font-bold text-gray-300 hover:text-[#F9BD15] transition-colors">Chemistry</a>
                <a routerLink="/admin/staff" class="block py-2 text-xs font-bold text-gray-300 hover:text-[#F9BD15] transition-colors">Food Technology</a>
                <a routerLink="/admin/staff" class="block py-2 text-xs font-bold text-gray-300 hover:text-[#F9BD15] transition-colors">Physics</a>
                <a routerLink="/admin/staff" class="block py-2 text-xs font-bold text-gray-300 hover:text-[#F9BD15] transition-colors">Computer Science</a>
              </div>
            }
          </div>

          <div class="space-y-1">
            <button (click)="toggleResearch()" 
              [class.bg-[#F9BD15]]="isResearchExpanded()" [class.text-[#2A1D1A]]="isResearchExpanded()"
              class="w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all font-bold text-sm text-left hover:bg-white/5">
              <span>Research Information</span>
              <svg [class.rotate-180]="isResearchExpanded()" class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            @if (isResearchExpanded()) {
              <div class="pl-8 space-y-1 py-1 animate-in fade-in slide-in-from-top-2 duration-300">
                <a routerLink="/admin/research" class="block py-2 text-xs font-bold text-gray-300 hover:text-[#F9BD15] transition-colors">Research Project</a>
                <a routerLink="/admin/research/article" class="block py-2 text-xs font-bold text-gray-300 hover:text-[#F9BD15] transition-colors">Research Article</a>
              </div>
            }
          </div>

          <button routerLink="/admin/training" routerLinkActive="bg-[#F9BD15] text-[#2A1D1A]" 
            class="w-full flex items-center gap-3 px-6 py-4 rounded-2xl transition-all font-bold text-sm text-left hover:bg-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            Training & Seminars
          </button>

          <button routerLink="/admin/plans" routerLinkActive="bg-[#F9BD15] text-[#2A1D1A]" 
            class="w-full flex items-center gap-3 px-6 py-4 rounded-2xl transition-all font-bold text-sm text-left hover:bg-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
            Plans / Projects
          </button>
        </nav>

        <div class="p-6 mt-auto">
          <div class="flex items-center gap-4 bg-white/5 p-4 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors" routerLink="/login">
             <div class="w-10 h-10 rounded-full border-2 border-[#F9BD15] flex items-center justify-center text-[#F9BD15] font-black text-lg">A</div>
             <div class="text-left">
               <p class="text-xs font-black text-white uppercase leading-none mb-1">ADMIN</p>
               <p class="text-[9px] text-[#F9BD15] uppercase tracking-widest">SYSTEM ADMIN</p>
             </div>
          </div>
        </div>
      </aside>

      <main class="flex-1 overflow-y-auto p-10 bg-[#FAFAFA]">
        <div class="max-w-[1200px] mx-auto animate-in fade-in">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [`
    /* คลาสสำหรับซ่อน Scrollbar */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    
    /* Animation */
    .animate-in { animation: fadeIn 0.3s ease-out forwards; }
    .slide-in-from-top-2 { animation: slideDown 0.3s ease-out forwards; }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class AdminLayoutComponent {
  isStaffExpanded = signal(false);
  isResearchExpanded = signal(false);

  toggleStaff() { this.isStaffExpanded.set(!this.isStaffExpanded()); }
  toggleResearch() { this.isResearchExpanded.set(!this.isResearchExpanded()); }
}