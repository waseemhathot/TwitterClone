import { Injectable } from '@angular/core';

export const darkTheme = {
    'app-background-color': '#15202B',
    'app-text-color': '#fff',
    'app-border-color': 'rgb(101, 119, 134)',
    'app-input-color': '#000',
};

export const lightTheme = {
    'app-background-color': '#fff',
    'app-text-color': '#000',
    'app-border-color': 'rgba(0, 0, 0, 0.3)',
    'app-input-color': 'rgba(0, 0, 0, 0.05)',
};

enum Theme {
    Light = 'light',
    Dark = 'dark'
}

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    currTheme: Theme =  Theme.Light;

    constructor() { }

    toggleDark() {
        this.setTheme(darkTheme);
    }

    toggleLight() {
        this.setTheme(lightTheme);
    }

    toggleTheme() {
        if (this.currTheme === Theme.Light) {
            this.currTheme = Theme.Dark;
            this.toggleDark();
        } else {
            this.currTheme = Theme.Light;
            this.toggleLight();
        }
    }

    private setTheme(theme: {}) {
        Object.keys(theme).forEach(k =>
            document.documentElement.style.setProperty(`--${k}`, theme[k])
        );
    }
}
