To avoid this error, ensure that your database operations are performed only after the connection has been successfully established.  One solution is to wrap your database access in a promise or use async/await.

**Using Promises:**

```javascript
firebase.database().ref().once('value').then((snapshot) => {
  // Access database data here - the connection is guaranteed to be established
  console.log(snapshot.val());
}).catch((error) => {
  console.error(error);
});
```

**Using Async/Await:**

```javascript
async function fetchData() {
  try {
    const snapshot = await firebase.database().ref().once('value');
    console.log(snapshot.val());
  } catch (error) {
    console.error(error);
  }
}
fetchData();
```