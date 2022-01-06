// // import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import { map, take } from 'rxjs/operators';

// export abstract class BaseService<T> {
//   protected path = '';

//   constructor(path: string, protected firestore: AngularFirestore) {
//     this.path = path;
//   }

//   get collection() {
//     return this.firestore.collection(this.path);
//   }

//   getData(): Observable<T[]> {
//     return this.collection.valueChanges({ idField: 'id' }).pipe(
//       map((item) => (<unknown>item) as T[]),
//       take(1)
//     );
//   }

//   get(id: string) {
//     return this.collection
//       .doc(id)
//       .valueChanges({ idField: 'id' })
//       .pipe(
//         map((item) => (<unknown>item) as T),
//         take(1)
//       );
//   }

//   add(data: T) {
//     return this.collection.add({ ...data });
//   }

//   update(data: T) {
//     return this.collection.doc((<any>data).id).update(JSON.parse(JSON.stringify(data)));
//   }

//   delete(id: string) {
//     return this.collection.doc(id).delete();
//   }
// }
