import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Sidebar } from "./sidebar/sidebar";
import { Header } from "./header/header";

@Component({
  selector: 'app-admin-layout',
  imports: [RouterModule, Sidebar, Header],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {}
