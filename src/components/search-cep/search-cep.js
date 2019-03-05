import React from "react"
import { StyledSearchCep, Table, Input, Button } from './style'

const SearchCep = ({
    address,
    city,
    code,
    district,
    state,
    status,
    isFetching,
    handleSubmit
}) => (
    <StyledSearchCep onSubmit={handleSubmit}>
        <form>
            <Input type='text' name='cep' placeholder='CEP'/>
            <Button type='submit' disabled={isFetching}>
                {isFetching ? 'Searching':'Search'}
            </Button>
        </form>

        {status === 0 && <p>address not found</p>}

        {status === 1 && (
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
                        <td>{code}</td>
                        <td>{address}</td>
                        <td>{district}</td>
                        <td>{city}</td>
                        <td>{state}</td>                    
                    </tr>
                </tbody>
            </Table>
        )}
    </StyledSearchCep>
)

export default SearchCep
