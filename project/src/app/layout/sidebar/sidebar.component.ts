import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  title: string;
  icon: string;
  route: string;
  badge?: number;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { title: 'Dashboard', icon: '📊', route: '/dashboard' },
    { title: 'IoT Sensors', icon: '🌡️', route: '/iot', badge: 2 },
    { title: 'Marketplace', icon: '🛒', route: '/marketplace' },
    { title: 'Messaging', icon: '💬', route: '/messaging', badge: 3 },
    { title: 'Rewards', icon: '🏆', route: '/rewards' },
    { title: 'AI Analytics', icon: '🧠', route: '/analytics' }
  ];

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}