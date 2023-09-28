import { SubscriberInterface } from 'interfaces/subscriber';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;
  created_at: string;
  updated_at: string;

  subscriber: SubscriberInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
