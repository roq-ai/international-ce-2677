import queryString from 'query-string';
import { AdminInterface, AdminGetQueryInterface } from 'interfaces/admin';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAdmins = async (query?: AdminGetQueryInterface): Promise<PaginatedInterface<AdminInterface>> => {
  return fetcher('/api/admins', {}, query);
};

export const createAdmin = async (admin: AdminInterface) => {
  return fetcher('/api/admins', { method: 'POST', body: JSON.stringify(admin) });
};

export const updateAdminById = async (id: string, admin: AdminInterface) => {
  return fetcher(`/api/admins/${id}`, { method: 'PUT', body: JSON.stringify(admin) });
};

export const getAdminById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/admins/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteAdminById = async (id: string) => {
  return fetcher(`/api/admins/${id}`, { method: 'DELETE' });
};
