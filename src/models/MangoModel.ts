export interface MangoModel {
  _id: string;
  isStopTakingPayment: boolean;
  isHidden: boolean;
  content: boolean;
  chat: boolean;
  videocall: number;
  isPublic: boolean;
  creator: string;
  title: string;
  start: Date;
  end: Date;
  price: number;
  description: string;
  recurringType: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  razorpayPlanId: string;
  firebaseSync: number;
}

export interface Mango {
  _id: string;
  title: string;
  checked: boolean;
}
