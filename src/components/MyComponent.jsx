import React, { Component } from 'react'
import { newContextComponents } from "@drizzle/react-components"
const { AccountData, ContractData, ContractForm } = newContextComponents
class MyComponent extends Component {
    render() {
        return (

            <div>
                <h2>取得帳戶餘額</h2>
                <AccountData
                    drizzle={this.props.drizzle}
                    drizzleState={this.props.drizzleState}
                    accountIndex={0}
                    units={"ether"}
                    precision={6}
                ></AccountData>
            </div>

        )
    }
}
export default MyComponent;