import React from 'react';
import DriverRepository from '../../repository/drivers/driver.respository'
import suspenseResource from '../../suspenseResource';
import { Avatar, Box, Input, Spinner, Stack, Link as ChakraLink } from '@chakra-ui/react';
import { DriverAttributes } from '../../repository/drivers/driver';
import { Page } from '../_app';
import { IColumn } from '@inovua/reactdatagrid-enterprise/types';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';


let DataGrid = React.lazy(() => import('../../resources/components/DataGrid'));


const { list } = DriverRepository();


const resource = suspenseResource(list)

const columns: Array<IColumn> = [
  { name: 'id', header: 'id', defaultVisible: false },
  {
    name: 'name', header: 'Nome', defaultFlex: 2.6, render: ({ value, ...rest }) => {

      return <Box display={'flex'} alignItems={'center'} gap={'10px'}><Avatar size={'sm'} name={value} /><Link href={'/drivers/'+ rest.data.id}><ChakraLink>{value}<strong>({rest.data.email})</strong></ChakraLink></Link></Box>
    }
  },
  { name: 'phone', header: 'Telefone/Whatsapp', defaultFlex: 1.3 },
  { name: 'status', header: 'Status', defaultFlex: 1 },
  { name: 'last_activity', header: 'Ultima atividade', defaultFlex: 1 },
  { name: 'created_at', header: 'Created At', defaultFlex: 1 },
  { name: 'updated_at', header: 'Updated At', defaultFlex: 1 },
];

const Driver: Page = () => {

  const [drivers, setDrivers] = React.useState<Array<DriverAttributes>>(resource.read());
  const [search, setSearch] = React.useState('');

  // const onSelectionChange = React.useCallback(({ data }) => { Router.push(`/drivers/${data[0].id}`) }, [])

  const filterDrivers = search.length > 0 ? drivers.filter(driver => driver.phone.includes(search)) : []

  return (
    <React.Suspense fallback={<Spinner />}>
      <Stack h={'100%'}>
        <div>
          <Input name={'search'} onChange={e => setSearch(e.target.value)} variant={'filled'} placeholder='CPF do motorista' />
        </div>
        <DataGrid
          // onSelectionChange={onSelectionChange}
          columns={columns}
          dataSource={search.length > 0 ? filterDrivers : drivers || []}
        />
      </Stack>
    </React.Suspense>
  )
}

Driver.config = { title: 'Motoristas', layout: 'AccountLayout' }

export default Driver
