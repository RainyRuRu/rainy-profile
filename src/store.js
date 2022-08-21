import { reactive } from 'vue'

export const THEME_MODE = {
  LIGHT: 'light',
  RAINY: 'rainy',
  DARK: 'dark'
}

export const store = reactive({
  themeMode: THEME_MODE.LIGHT,
  nextTheme() {
    switch (this.themeMode) {
      case THEME_MODE.LIGHT:
        this.themeMode = THEME_MODE.RAINY
        break;
      case THEME_MODE.RAINY:
        this.themeMode = THEME_MODE.DARK
        break;
      case THEME_MODE.DARK:
        this.themeMode = THEME_MODE.LIGHT
        break;    
      default:
        break;
    }
  }
})
