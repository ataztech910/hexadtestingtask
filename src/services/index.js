import axios from 'axios';

export default async () => {
  const responce = await axios.get('https://firebasestorage.googleapis.com/v0/b/personalportfolio-bceba.appspot.com/o/generated.json?alt=media&token=6309fd49-45f5-4150-bc7b-d1189ebfa394', {});
  return responce.data;
};
