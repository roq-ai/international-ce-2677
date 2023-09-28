import queryString from 'query-string';
import { CertificateInterface, CertificateGetQueryInterface } from 'interfaces/certificate';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCertificates = async (
  query?: CertificateGetQueryInterface,
): Promise<PaginatedInterface<CertificateInterface>> => {
  return fetcher('/api/certificates', {}, query);
};

export const createCertificate = async (certificate: CertificateInterface) => {
  return fetcher('/api/certificates', { method: 'POST', body: JSON.stringify(certificate) });
};

export const updateCertificateById = async (id: string, certificate: CertificateInterface) => {
  return fetcher(`/api/certificates/${id}`, { method: 'PUT', body: JSON.stringify(certificate) });
};

export const getCertificateById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/certificates/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCertificateById = async (id: string) => {
  return fetcher(`/api/certificates/${id}`, { method: 'DELETE' });
};
