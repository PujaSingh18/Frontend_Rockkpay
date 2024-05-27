import BUDComponent from '../SVGComponent/BUDComponent';
import FastagComponent from '../SVGComponent/FastagComponent';
import BComponent from './../SVGComponent/BComponent';
import CADComponent from './../SVGComponent/CADComponent';
import CCComponent from './../SVGComponent/CCComponent';
import CCDComponent from './../SVGComponent/CCDComponent';
import CreditComponent from './../SVGComponent/CreditComponent';
import DComponent from './../SVGComponent/DComponent';
import DthComponent from './../SVGComponent/DthComponent';
import EComponent from './../SVGComponent/EComponent';
import ETDComponent from './../SVGComponent/ETDComponent';
import EUDComponent from './../SVGComponent/EUDComponent';
import GBPComponent from './../SVGComponent/GBPComponent';
import GBUDComponent from './../SVGComponent/GBUDComponent';
import IDComponent from './../SVGComponent/IDComponent';
import LLUDComponent from './../SVGComponent/LLUDComponent';
import LPComponent from './../SVGComponent/LPComponent';
import LPDComponent from './../SVGComponent/LPDComponent';
import MComponent from './../SVGComponent/MComponent';
import MRComponent from './../SVGComponent/MRComponent';
import MRUDComponent from './../SVGComponent/MRUDComponent';
import MSDComponent from './../SVGComponent/MSDComponent';
import MTDComponent from './../SVGComponent/MTDComponent';
import MTUDComponent from './../SVGComponent/MTUDComponent';
import MobileComponent from './../SVGComponent/MobileComponent';
import RUDComponent from './../SVGComponent/RUDComponent';
import WUDComponent from './../SVGComponent/WUDComponent';

export const ArrHis = [
  {
    id: 1,
    payment_name: 'John Doe',
    payment_date: new Date('2023-04-20'), // Date of payment
    amount: 100.0, // Amount paid
    bank_name: 'Bank of America', // Bank name
  },
  {
    id: 2,
    payment_name: 'Jane Smith',
    payment_date: new Date('2023-04-21'),
    amount: 200.5,
    bank_name: 'Chase Bank',
  },
];

//Utility Payment Image
export const ArrUP = [
  {
    id: 1,
    img: <MRComponent />,
    path: 'HomeMainScreen',
  },
  {
    id: 2,
    img: <DComponent />,
    path: 'HomeMainScreen',
  },
  {
    id: 3,
    img: <EComponent />,
    path: 'HomeMainScreen',
  },
  {
    id: 4,
    img: <CCComponent />,
    path: 'HomeMainScreen',
  },
  {
    id: 5,
    img: <LPComponent />,
    path: 'HomeMainScreen',
  },
  {
    id: 6,
    img: <GBPComponent />,
    path: 'HomeMainScreen',
  },
  {
    id: 7,
    img: <BComponent />,
    path: 'HomeMainScreen',
  },
  {
    id: 8,
    img: <MComponent />,
    path: 'HomeMPMain',
  },
];

//Recharges Array

export const arrInfo = [
  {
    id: 1,
    //title:'Mobile',
    img: <MobileComponent />,
    //subtitle:'Recharge',
    path: 'HomeMPMain',
  },
  {
    id: 2,
    //title:'DTH',
    img: <DthComponent />,
    path: 'HomeMPMain',
  },
  {
    id: 3,
    //title:'FASTag',
    img: <FastagComponent />,
    //subtitle:'Recharge',
    path: 'HomeMPMain',
  },
  {
    id: 4,
    //title:'Credit',
    img: <CreditComponent />,
    //subtitle:'Card',
    path: 'HomeMPMain',
  },
];

//Utilities Array

export const ArrUPay = [
  {
    id: 1,
    //title:"Mobile",
    img: <MRUDComponent />,
    //subtitle:"Postpaid",
    path: 'HomeMPMain',
  },
  {
    id: 2,
    //title:"Electricity",
    img: <EUDComponent />,
    path: 'HomeMPMain',
  },
  {
    id: 3,
    //title:"Water",
    img: <WUDComponent />,
    path: 'HomeMPMain',
  },
  {
    id: 4,
    //title:"Book a",
    img: <GBUDComponent />,
    //subtitle:"cylinder",
    path: 'HomeMPMain',
  },
  {
    id: 5,
    //title:"Broadband",
    img: <BUDComponent />,
    path: 'HomeMPMain',
  },
  {
    id: 6,
    //title:"Land Line",
    img: <LLUDComponent />,
    path: 'HomeMPMain',
  },
  {
    id: 7,
    //title:"Rent",
    img: <RUDComponent />,
    path: 'HomeMPMain',
  },
  {
    id: 8,
    //title:"Piped Gas",
    img: <MTUDComponent />,
    path: 'HomeMPMain',
  },
];

//Financial Services Array

export const arrfinaS = [
  {
    id: 1,
    //title:"Credit Card",
    img: <CCDComponent />,
    //subtitle:"Payment",
    path: 'HomeMPMain',
  },
  {
    id: 2,
    //title:"Loan",
    img: <LPDComponent />,
    //subtitle:"Payment",
    path: 'HomeMPMain',
  },
  {
    id: 3,
    //title:"Insurance",
    img: <IDComponent />,
    path: 'HomeMPMain',
  },
  {
    id: 4,
    //title:"Municipal",
    img: <MTDComponent />,
    //subtitle:"Payment",
    path: 'HomeMPMain',
  },
];

//Others Services Array

export const arrOtherS = [
  {
    id: 1,
    //title:"Municipal",
    img: <MSDComponent />,
    //subtitle:"Services",
    path: 'HomeMPMain',
  },
  {
    id: 2,
    //title:"Club &",
    img: <CADComponent />,
    //subtitle:"Association",
    path: 'HomeMPMain',
  },
  {
    id: 3,
    //title:"Eduction",
    img: <ETDComponent />,
    //subtitle:"Fees",
    path: 'HomeMPMain',
  },
];
