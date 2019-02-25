import React from "react"
import { StyledSearchCep, Table, Input, Button } from './style'

const SearchCep = () => (
    <StyledSearchCep>
        <form>
            <Input type='text' name='cep' placeholder='CEP'/>
            <Button type='submit'>Search</Button>
        </form>
        <Table>
            <thead>
                <tr>
                    <th>CEP</th>
                    <th>Endereço</th>
                    <th>Bairro</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>94465260</td>
                    <td>Rua</td>
                    <td>Bairro</td>
                    <td>Cidade</td>
                    <td>Estado</td>
                </tr>
            </tbody>
        </Table>
    </StyledSearchCep>
)

export default SearchCep
