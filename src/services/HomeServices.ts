import {MangoModel} from './../models/MangoModel';
import axios from 'axios';

export const getMangoes = async () => {
  try {
    const res = await axios.get<Array<MangoModel>>(
      'https://testingweb.tagmango.com/staticassets/mangoes.json',
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
