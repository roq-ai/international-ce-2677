import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createCertificate } from 'apiSdk/certificates';
import { certificateValidationSchema } from 'validationSchema/certificates';
import { UserInterface } from 'interfaces/user';
import { getUsers } from 'apiSdk/users';
import { CertificateInterface } from 'interfaces/certificate';

function CertificateCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: CertificateInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createCertificate(values);
      resetForm();
      router.push('/certificates');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<CertificateInterface>({
    initialValues: {
      name: '',
      issue_date: new Date(new Date().toDateString()),
      expiry_date: new Date(new Date().toDateString()),
      status: '',
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: certificateValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Certificates',
              link: '/certificates',
            },
            {
              label: 'Create Certificate',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Certificate
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.name}
            label={'Name'}
            props={{
              name: 'name',
              placeholder: 'Name',
              value: formik.values?.name,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="issue_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Issue Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.issue_date ? new Date(formik.values?.issue_date) : null}
              onChange={(value: Date) => formik.setFieldValue('issue_date', value)}
            />
          </FormControl>
          <FormControl id="expiry_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Expiry Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.expiry_date ? new Date(formik.values?.expiry_date) : null}
              onChange={(value: Date) => formik.setFieldValue('expiry_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.status}
            label={'Status'}
            props={{
              name: 'status',
              placeholder: 'Status',
              value: formik.values?.status,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/certificates')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'certificate',
    operation: AccessOperationEnum.CREATE,
  }),
)(CertificateCreatePage);
