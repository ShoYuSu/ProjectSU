import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex h-screen bg-[#FDFBF7] font-sans text-[#2C2220] overflow-hidden relative">
      @if (isSidebarOpen()) {
        <div
          class="fixed inset-0 bg-black/50 z-40 lg:hidden animate-in fade-in duration-200"
          (click)="toggleSidebar()"
        ></div>
      }

      <aside
        class="fixed lg:relative inset-y-0 left-0 z-50 bg-[#3A1E1D] flex flex-col shadow-2xl text-white transform transition-all duration-300 ease-in-out lg:translate-x-0"
        [ngClass]="{
          '-translate-x-full': !isSidebarOpen(),
          'translate-x-0': isSidebarOpen(),
          'w-[280px]': !isMiniSidebar(),
          'w-[96px]': isMiniSidebar(),
        }"
      >
        <button
          class="lg:hidden absolute top-6 right-6 text-gray-400 hover:text-white"
          (click)="toggleSidebar()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div
          class="hidden lg:flex w-full items-center pt-6 transition-all duration-300"
          [ngClass]="isMiniSidebar() ? 'justify-center' : 'justify-end px-6'"
        >
          <button
            (click)="toggleMiniSidebar()"
            class="text-gray-400 hover:text-white p-2 rounded-xl hover:bg-white/5 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>

        <div
          class="p-6 flex flex-col items-center border-b border-white/5 mb-4 transition-all duration-300"
        >
          <div
            class="bg-white rounded-full flex items-center justify-center p-1 shadow-lg transition-all duration-300"
            [ngClass]="isMiniSidebar() ? 'w-12 h-12 mb-0' : 'w-20 h-20 mb-4'"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/th/thumb/a/a2/Siam_University_Logo.svg/150px-Siam_University_Logo.svg.png"
              class="object-contain transition-all duration-300"
              [ngClass]="isMiniSidebar() ? 'h-8' : 'h-12'"
            />
          </div>
          @if (!isMiniSidebar()) {
            <h1
              class="font-black tracking-widest text-sm uppercase text-center whitespace-nowrap animate-in fade-in duration-300"
            >
              SU SCIENCE MIS
            </h1>
          }
        </div>

        <nav
          class="flex-1 space-y-2 overflow-y-auto no-scrollbar transition-all duration-300"
          [ngClass]="isMiniSidebar() ? 'px-3' : 'px-6'"
        >
          <button
            routerLink="/admin/dashboard"
            routerLinkActive="bg-[#F9BD15] text-[#2A1D1A]"
            [routerLinkActiveOptions]="{ exact: true }"
            (click)="closeSidebarOnMobile()"
            class="w-full flex items-center rounded-2xl transition-all hover:bg-white/5 group relative"
            [ngClass]="
              isMiniSidebar() ? 'justify-center py-4 px-0' : 'justify-start px-6 py-4 gap-3'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="shrink-0"
            >
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            @if (!isMiniSidebar()) {
              <span class="font-bold text-sm whitespace-nowrap">Dashboard</span>
            }
          </button>

          <div class="space-y-1">
            <button
              (click)="toggleStaff()"
              [class.bg-[#F9BD15]]="isStaffExpanded()"
              [class.text-[#2A1D1A]]="isStaffExpanded()"
              class="w-full flex items-center rounded-2xl transition-all hover:bg-white/5"
              [ngClass]="isMiniSidebar() ? 'justify-center py-4 px-0' : 'justify-between px-6 py-4'"
            >
              <div class="flex items-center" [ngClass]="!isMiniSidebar() ? 'gap-3' : ''">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="shrink-0"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                @if (!isMiniSidebar()) {
                  <span class="font-bold text-sm whitespace-nowrap">Staff Information</span>
                }
              </div>
              @if (!isMiniSidebar()) {
                <svg
                  [class.rotate-180]="isStaffExpanded()"
                  class="w-4 h-4 transition-transform shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              }
            </button>
            @if (isStaffExpanded() && !isMiniSidebar()) {
              <div class="pl-12 space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                <a
                  routerLink="/admin/staff"
                  (click)="closeSidebarOnMobile()"
                  class="block py-2 text-xs font-bold text-gray-300 hover:text-[#F9BD15] transition-colors whitespace-nowrap"
                  >List All (ทั้งหมด)</a
                >
                <a
                  routerLink="/admin/staff"
                  (click)="closeSidebarOnMobile()"
                  class="block py-2 text-xs font-bold text-gray-300 hover:text-[#F9BD15] transition-colors whitespace-nowrap"
                  >Mathematics</a
                >
                <a
                  routerLink="/admin/staff"
                  (click)="closeSidebarOnMobile()"
                  class="block py-2 text-xs font-bold text-gray-300 hover:text-[#F9BD15] transition-colors whitespace-nowrap"
                  >Chemistry</a
                >
              </div>
            }
          </div>

          <div class="space-y-1">
            <button
              (click)="toggleResearch()"
              [class.bg-[#F9BD15]]="isResearchExpanded()"
              [class.text-[#2A1D1A]]="isResearchExpanded()"
              class="w-full flex items-center rounded-2xl transition-all hover:bg-white/5"
              [ngClass]="isMiniSidebar() ? 'justify-center py-4 px-0' : 'justify-between px-6 py-4'"
            >
              <div class="flex items-center" [ngClass]="!isMiniSidebar() ? 'gap-3' : ''">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="shrink-0"
                >
                  <path d="M10 2v7.31" />
                  <path d="M14 9.3V1.99" />
                  <path d="M8.5 2h7" />
                  <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
                  <path d="M5.52 16h12.96" />
                </svg>
                @if (!isMiniSidebar()) {
                  <span class="font-bold text-sm whitespace-nowrap">Research Information</span>
                }
              </div>
              @if (!isMiniSidebar()) {
                <svg
                  [class.rotate-180]="isResearchExpanded()"
                  class="w-4 h-4 transition-transform shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              }
            </button>
            @if (isResearchExpanded() && !isMiniSidebar()) {
              <div class="pl-12 space-y-1 py-1 animate-in fade-in slide-in-from-top-2 duration-300">
                <a
                  routerLink="/admin/research"
                  (click)="closeSidebarOnMobile()"
                  class="block py-2 text-xs font-bold text-gray-300 hover:text-[#F9BD15] transition-colors whitespace-nowrap"
                  >Research Project</a
                >
                <a
                  routerLink="/admin/research/article"
                  (click)="closeSidebarOnMobile()"
                  class="block py-2 text-xs font-bold text-gray-300 hover:text-[#F9BD15] transition-colors whitespace-nowrap"
                  >Research Article</a
                >
              </div>
            }
          </div>

          <button
            routerLink="/admin/training"
            routerLinkActive="bg-[#F9BD15] text-[#2A1D1A]"
            (click)="closeSidebarOnMobile()"
            class="w-full flex items-center rounded-2xl transition-all hover:bg-white/5"
            [ngClass]="
              isMiniSidebar() ? 'justify-center py-4 px-0' : 'justify-start px-6 py-4 gap-3'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="shrink-0"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            @if (!isMiniSidebar()) {
              <span class="font-bold text-sm whitespace-nowrap">Training & Seminars</span>
            }
          </button>

          <button
            routerLink="/admin/plans"
            routerLinkActive="bg-[#F9BD15] text-[#2A1D1A]"
            (click)="closeSidebarOnMobile()"
            class="w-full flex items-center rounded-2xl transition-all hover:bg-white/5"
            [ngClass]="
              isMiniSidebar() ? 'justify-center py-4 px-0' : 'justify-start px-6 py-4 gap-3'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="shrink-0"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
            @if (!isMiniSidebar()) {
              <span class="font-bold text-sm whitespace-nowrap">Plans / Projects</span>
            }
          </button>
        </nav>

        <div
          class="mt-auto flex flex-col gap-3 transition-all duration-300"
          [ngClass]="isMiniSidebar() ? 'p-3' : 'p-6'"
        >
          @if (userRole === 'teacher') {
            <a
              href="http://localhost:4200/home"
              target="_blank"
              class="flex items-center rounded-2xl border border-white/5 transition-all group shadow-sm bg-white/5 hover:bg-white/10"
              [ngClass]="isMiniSidebar() ? 'justify-center p-3' : 'justify-between p-4'"
            >
              <div class="flex items-center" [ngClass]="!isMiniSidebar() ? 'gap-3' : ''">
                <div class="p-2 bg-[#F9BD15]/10 rounded-lg text-[#F9BD15] shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                @if (!isMiniSidebar()) {
                  <div class="flex flex-col text-left whitespace-nowrap">
                    <span class="text-[10px] text-gray-400 font-bold mb-0.5">ไปยังระบบอื่น</span>
                    <span
                      class="font-bold text-sm text-white group-hover:text-[#F9BD15] transition-colors"
                      >ระบบที่ปรึกษา</span
                    >
                  </div>
                }
              </div>
              @if (!isMiniSidebar()) {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-gray-500 group-hover:text-[#F9BD15] transition-colors shrink-0"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              }
            </a>
          }
          @if (userRole === 'admin') {
            <a
              href="http://localhost:4200/system-dashboard"
              target="_blank"
              class="flex items-center rounded-2xl border border-white/5 transition-all group shadow-sm bg-white/5 hover:bg-white/10"
              [ngClass]="isMiniSidebar() ? 'justify-center p-3' : 'justify-between p-4'"
            >
              <div class="flex items-center" [ngClass]="!isMiniSidebar() ? 'gap-3' : ''">
                <div class="p-2 bg-[#F9BD15]/10 rounded-lg text-[#F9BD15] shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                @if (!isMiniSidebar()) {
                  <div class="flex flex-col text-left whitespace-nowrap">
                    <span class="text-[10px] text-gray-400 font-bold mb-0.5">ไปยังระบบอื่น</span>
                    <span
                      class="font-bold text-sm text-white group-hover:text-[#F9BD15] transition-colors"
                      >ระบบที่ปรึกษา</span
                    >
                  </div>
                }
              </div>
              @if (!isMiniSidebar()) {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-gray-500 group-hover:text-[#F9BD15] transition-colors shrink-0"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              }
            </a>
          }
          <div
            class="flex items-center bg-white/5 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors"
            routerLink="/login"
            [ngClass]="isMiniSidebar() ? 'justify-center p-3' : 'gap-4 p-4'"
          >
            <div
              class="shrink-0 rounded-full border-2 border-[#F9BD15] flex items-center justify-center text-[#F9BD15] font-black shadow-sm bg-[#3A1E1D]"
              [ngClass]="isMiniSidebar() ? 'w-10 h-10 text-base' : 'w-10 h-10 text-lg'"
            >
              A
            </div>
            @if (!isMiniSidebar()) {
              <div class="text-left whitespace-nowrap">
                <p class="text-xs font-black text-white uppercase leading-none mb-1">ADMIN</p>
                <p class="text-[9px] text-[#F9BD15] uppercase tracking-widest">SYSTEM ADMIN</p>
              </div>
            }
          </div>
        </div>
      </aside>

      <div class="flex-1 flex flex-col h-screen overflow-hidden">
        <header
          class="lg:hidden bg-white shadow-sm border-b border-gray-100 p-4 flex items-center gap-4 z-30 relative"
        >
          <button
            (click)="toggleSidebar()"
            class="p-2 bg-gray-50 text-[#2A1D1A] rounded-xl hover:bg-[#F9BD15] hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center p-1"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/th/thumb/a/a2/Siam_University_Logo.svg/150px-Siam_University_Logo.svg.png"
                class="object-contain h-5"
              />
            </div>
            <h1 class="font-black tracking-widest text-xs uppercase text-[#2A1D1A]">
              SU SCIENCE MIS
            </h1>
          </div>
        </header>

        <main class="flex-1 overflow-y-auto p-4 md:p-10 bg-[#FAFAFA]">
          <div class="max-w-[1200px] mx-auto animate-in fade-in">
            <router-outlet></router-outlet>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: [
    `
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      .animate-in {
        animation: fadeIn 0.3s ease-out forwards;
      }
      .slide-in-from-top-2 {
        animation: slideDown 0.3s ease-out forwards;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class AdminLayoutComponent implements OnInit {
  isStaffExpanded = signal(false);
  isResearchExpanded = signal(false);
  isSidebarOpen = signal(false); // สำหรับมือถือ
  isMiniSidebar = signal(false); // ⭐️ ควบคุมการย่อเมนูบนจอคอม

  userRole: string | null = '';

  // Inject ตัวอ่าน URL
  private route = inject(ActivatedRoute);

  ngOnInit() {
    // 1. ลองดึงค่าจาก URL Parameters (กรณีเพิ่งเด้งมาจากระบบ Login)
    this.route.queryParams.subscribe((params) => {
      if (params['role']) {
        this.userRole = params['role'];

        // แนะนำ: เซฟลง LocalStorage ของพอร์ต 4201 ด้วย เผื่อกด Refresh หน้าเว็บจะได้ไม่หลุด
        localStorage.setItem('role', params['role']);
        if (params['token']) localStorage.setItem('token', params['token']);
        if (params['user']) localStorage.setItem('full_name', params['user']);
      } else {
        // 2. ถ้าใน URL ไม่มี (เช่น กด Refresh) ให้ไปดึงจาก LocalStorage ของระบบนี้แทน
        this.userRole = localStorage.getItem('role');
      }
    });
  }
  // ฟังก์ชันย่อ/ขยาย Sidebar บนจอคอม
  toggleMiniSidebar() {
    this.isMiniSidebar.set(!this.isMiniSidebar());
    // ถ้าย่อเมนูอยู่ ให้พับเมนูย่อยเก็บอัตโนมัติ
    if (this.isMiniSidebar()) {
      this.isStaffExpanded.set(false);
      this.isResearchExpanded.set(false);
    }
  }

  toggleStaff() {
    if (this.isMiniSidebar()) this.isMiniSidebar.set(false); // ขยาย Sidebar อัตโนมัติถ้าถูกย่ออยู่
    this.isStaffExpanded.set(!this.isStaffExpanded());
  }

  toggleResearch() {
    if (this.isMiniSidebar()) this.isMiniSidebar.set(false); // ขยาย Sidebar อัตโนมัติถ้าถูกย่ออยู่
    this.isResearchExpanded.set(!this.isResearchExpanded());
  }

  toggleSidebar() {
    this.isSidebarOpen.set(!this.isSidebarOpen());
  }

  closeSidebarOnMobile() {
    if (window.innerWidth < 1024) {
      this.isSidebarOpen.set(false);
    }
  }
}
