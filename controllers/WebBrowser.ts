import * as WB from 'expo-web-browser';

export class WebBrowser {
  async openUrl(url: string) {
    return await WB.openBrowserAsync(url);
  }
}
