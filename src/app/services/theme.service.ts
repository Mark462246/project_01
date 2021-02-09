import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  //Angular dark mode
  isDarkTheme: boolean;
  //Ionic dark mode
  darkMode: boolean;

  constructor() { }

  getDarkMode() {
    return this.darkMode;
  }
  getIsDarkTheme() {
    return this.isDarkTheme;
  }
  setDarkMode(darkMode: boolean) {
    this.darkMode = darkMode;
  }
  setIsDarkTheme(isDarkTheme: boolean) {
    this.isDarkTheme = isDarkTheme;
  }
}
