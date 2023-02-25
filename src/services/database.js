import { Storage, Drivers } from '@ionic/storage';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

const storage = new Storage({
  driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]
});
export default {
  initDatabase() {
    return new Promise((resolve) => {
      storage.create().then(() => resolve());
    });
  },
  async getData(key) {
    const data = await storage.get(key);
    return JSON.parse(data);
  },
  async setData(key, data) {
    const jsonData = JSON.stringify(data);
    await storage.set(key, jsonData);
  },
  async removeData(key) {
    await storage.remove(key);
  },
};
