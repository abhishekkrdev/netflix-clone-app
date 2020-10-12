import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
  const { firebase } = useContext(FirebaseContext);
  const [content, setContent] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => {
          return { ...contentObj.data(), docId: contentObj.id };
        });
        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { [target]: content };
}
