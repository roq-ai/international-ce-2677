import { UserInterface } from 'interfaces/user';
import { SubscriptionInterface } from 'interfaces/subscription';
import { GetQueryInterface } from 'interfaces';

export interface SubscriberInterface {
  id?: string;
  user_id: string;
  subscription_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  subscription?: SubscriptionInterface;
  _count?: {};
}

export interface SubscriberGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  subscription_id?: string;
}
