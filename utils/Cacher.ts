let cachedList: Record<string, any> = {};

export const valueCacher = {
  exists: (key: string) => {
    return cachedList?.[key] ? true : false;
  },
  add: (key: string, value: any) => {
    cachedList = {
      ...cachedList,
      [key]: value,
    };
  },
  remove: (key: string) => {
    let newCacheList = cachedList;
    delete newCacheList?.[key];

    cachedList = newCacheList;
  },
  get: (key: string) => {
    return cachedList?.[key];
  },
  clearCached: () =>{
    cachedList = {};
  }  
};
