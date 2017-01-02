import idb from 'idb';
import data from './data';

const dbPromise = idb.open('rr-store', 1, (upgradeDB) => {
  const reviews = upgradeDB.createObjectStore('reviews');

  data.forEach(r => reviews.put(r, r.id));
});

export default dbPromise;

// function update() {
//   return dbPromise.then((db) => {
//     const tx = db.transaction('reviews', 'readwrite');
//     const objectStore = tx.objectStore('reviews');
//     data.forEach(r => objectStore.put(r, r.id));
//     return tx.complete;
//   });
// }

export const getAll = () =>
  dbPromise.then((db) => {
    const tx = db.transaction('reviews');
    return tx.objectStore('reviews').getAll();
  });

export const update = r => (
  dbPromise.then((db) => {
    const tx = db.transaction('reviews', 'readwrite');
    tx.objectStore('reviews').put(r, r.id);
    return tx.complete;
  })
);

// update();


/*
const idbKeyval = {
  get(key) {
    return dbPromise.then(db => {
      return db.transaction('keyval')
        .objectStore('keyval').get(key);
    });
  },
  set(key, val) {
    return dbPromise.then(db => {
      const tx = db.transaction('keyval', 'readwrite');
      tx.objectStore('keyval').put(val, key);
      return tx.complete;
    });
  },
  delete(key) {
    return dbPromise.then(db => {
      const tx = db.transaction('keyval', 'readwrite');
      tx.objectStore('keyval').delete(key);
      return tx.complete;
    });
  },
  clear() {
    return dbPromise.then(db => {
      const tx = db.transaction('keyval', 'readwrite');
      tx.objectStore('keyval').clear();
      return tx.complete;
    });
  },
  keys() {
    return dbPromise.then(db => {
      const tx = db.transaction('keyval');
      const keys = [];
      const store = tx.objectStore('keyval');

      // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
      // openKeyCursor isn't supported by Safari, so we fall back
      (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
        if (!cursor) return;
        keys.push(cursor.key);
        cursor.continue();
      });

      return tx.complete.then(() => keys);
    });
  }
};
*/
