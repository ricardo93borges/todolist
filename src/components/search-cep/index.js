import React, {PureComponent} from "react"
import { connect } from 'react-redux'
import ajax from '@fdaciuk/ajax'
import SearchCep from './search-cep'
import { updateAddress } from "../../reducers/address/action-creators";

class SearchCepContainer extends PureComponent {
    state = { isFetching: false }

    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({isFetching:true})

        const cep = e.target.cep.value
        const response = await ajax().get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`)
        
        this.props.updateAddress(response)
        this.setState({isFetching:false})
    }

    render(){
        return (
            <SearchCep 
                {...this.props.address}
                {...this.state}
                handleSubmit={this.handleSubmit}/>
        )
    }
}

const mapStateToProps = (state) => ({
    address: state.address
})

const mapDispatchToProps = {
    updateAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)
