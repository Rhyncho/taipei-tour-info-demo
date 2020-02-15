import { Injectable } from '@angular/core';

// Enums
import { StorageType } from './../../enum/storage-type.enum';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private memoryStorage = new Map();

  constructor() {}

  /**
   * 儲存資料
   *
   * @param key - 資料的Key值
   * @param data - 要儲存的資料
   * @param type - 要儲存的類型
   */
  store(key: string, data: any, type: StorageType): void {

    switch (type) {

      case StorageType.LOCAL:
        window.localStorage.setItem(key, JSON.stringify(data));
        break;

      case StorageType.SESSION:
        window.sessionStorage.setItem(key, JSON.stringify(data));
        break;

      case StorageType.MEMORY:
        this.memoryStorage.set(key, data);
        break;

    }

  }

  /**
   * 取得儲存的資料
   *
   * @param key - 資料的Key值
   * @param type - 要從哪裡取得儲存的資料
   */
  getData(key: string, type: StorageType): any {

    switch (type) {

      case StorageType.LOCAL:
        return JSON.parse(window.localStorage.getItem(key));

      case StorageType.SESSION:
        return JSON.parse(window.sessionStorage.getItem(key));

      case StorageType.MEMORY:
        return this.memoryStorage.get(key);

    }

  }

  /**
   * 清除已儲存的資料
   *
   * @param type - 要清除的空間
   * @param [key] - 如果要清除某個特定的資料時才傳入
   */
  clean(type: number, key?: string): void {

    switch (type) {

      case StorageType.LOCAL:
        window.localStorage.removeItem(key);
        break;

      case StorageType.SESSION:
        window.sessionStorage.removeItem(key);
        break;

    }

  }
}
