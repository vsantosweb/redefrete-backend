import React from 'react'
import { Page } from '../../_app'
import * as Styled from './styles';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading, FormControl, FormLabel, Input, Stack, Button, Radio, HStack } from '@chakra-ui/react'

// export async function getServerSideProps(ctx) {

// }
const Driver: Page = () => {

    return (
        <Styled.ProfileWrapper>
            <Styled.ProfileDetails>
                <Styled.ProfileInfoContainer>
                    <Styled.ProfileAvatar><i className={'las la-user'}></i></Styled.ProfileAvatar>
                    <Styled.ProfileInfo>
                        <Styled.ProfileInfoLabel>VITOR LAURENCIO SOUZA SANTOS</Styled.ProfileInfoLabel>
                        <Styled.ProfileInfoValue>jhon@doe.com.br</Styled.ProfileInfoValue>
                    </Styled.ProfileInfo>
                </Styled.ProfileInfoContainer>
            </Styled.ProfileDetails>
            <Styled.ProfileOverView>
                <Heading mb={8}>Dados Cadastrais</Heading>
                <Tabs>
                    <TabList>
                        <Tab>DADOS PESSOAIS</Tab>
                        <Tab>ENDEREÇO</Tab>
                        <Tab>DADOS BANCÁRIOS</Tab>
                    </TabList>

                    <TabPanels >
                        <TabPanel px={0}>
                            <Stack spacing={4}>
                                <FormControl>
                                    <FormLabel>Nome Completo</FormLabel>
                                    <Input placeholder={'Insira o nome completo do motorista'} variant={'flushed'} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <Input placeholder={'Email do motorista'} variant={'flushed'} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Phone</FormLabel>
                                    <Input placeholder={'Telefone do motorista'} variant={'flushed'} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Gênero</FormLabel>
                                    <HStack>
                                    <Radio>Masculino</Radio>
                                    <Radio>Feminino</Radio>
                                    </HStack>
                                </FormControl>
                                <div><Button colorScheme={'primary'}>Salvar Alterações</Button></div>
                            </Stack>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Styled.ProfileOverView>
        </Styled.ProfileWrapper>
    )
}

Driver.config = {
    title: 'Motoristas',
    layout: 'AccountLayout'
}

export default (Driver);