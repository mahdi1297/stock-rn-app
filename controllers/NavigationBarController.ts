import * as NavigationBar from 'expo-navigation-bar';

export class NavigationController {
  setBgColor(color: string) {
    NavigationBar.setPositionAsync('absolute');
    // NavigationBar.setBackgroundColorAsync('#41414166');
    NavigationBar.setBackgroundColorAsync(color);
  }
}
