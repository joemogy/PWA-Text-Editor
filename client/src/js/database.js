import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {console.log('putDb implemented');

const jateDb= await openDB("jate",1);

const tx= jateDb.transaction("jate","readwrite");

const store= tx.objectStore("jate");

const request= store.put({jate:content});

const result= await request;

console.log("data saved to database", result);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {console.log('getDb implemented');

const getDb= await openDB("jate",1);

const getTx= getDb.transaction("jate","readonly");

const getStore= getTx.objectStore("jate");

const getRequest= getStore.getAll();

const getResult= await getRequest;

console.log("All data is fetched", getResult);
}

initdb();
