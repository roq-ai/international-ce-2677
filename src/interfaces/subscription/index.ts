import { SubscriberInterface } from 'interfaces/subscriber';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SubscriptionInterface {
  id?: string;
  start_date: any;
  end_date: any;
  status: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  subscriber?: SubscriberInterface[];
  user?: UserInterface;
  _count?: {
    subscriber?: number;
  };
}

export interface SubscriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
}
