import data from '../assets/data.json';

export default {
  getAllItems () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 200);
    });
  }
};
