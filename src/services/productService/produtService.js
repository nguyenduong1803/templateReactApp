import HttpClient from '~/utils/HttpClient';
const getProduct = async (callback) => {
  try {
    const response = await HttpClient.get('/products');
    await callback(response);
  } catch (error) {
    console.log(error);
    callback([]);
  }
};
export { getProduct };
