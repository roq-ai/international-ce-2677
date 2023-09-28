import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CertificateInterface {
  id?: string;
  name: string;
  issue_date: any;
  expiry_date?: any;
  status: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CertificateGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  user_id?: string;
}
