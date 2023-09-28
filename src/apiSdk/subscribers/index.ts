import queryString from 'query-string';
import { SubscriberInterface, SubscriberGetQueryInterface } from 'interfaces/subscriber';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSubscribers = async (
  query?: SubscriberGetQueryInterface,
): Promise<PaginatedInterface<SubscriberInterface>> => {
  return fetcher('/api/subscribers', {}, query);
};

export const createSubscriber = async (subscriber: SubscriberInterface) => {
  return fetcher('/api/subscribers', { method: 'POST', body: JSON.stringify(subscriber) });
};

export const updateSubscriberById = async (id: string, subscriber: SubscriberInterface) => {
  return fetcher(`/api/subscribers/${id}`, { method: 'PUT', body: JSON.stringify(subscriber) });
};

export const getSubscriberById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/subscribers/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteSubscriberById = async (id: string) => {
  return fetcher(`/api/subscribers/${id}`, { method: 'DELETE' });
};
