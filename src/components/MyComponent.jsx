import React, { Component } from 'react'
import { newContextComponents } from "@drizzle/react-components"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
const { AccountData, ContractData, ContractForm } = newContextComponents
class MyComponent extends Component {
    render() {
        return (

            <div>
                <h2>取得帳戶餘額</h2>
                <ToastContainer ></ToastContainer>
                <AccountData
                    drizzle={this.props.drizzle}
                    drizzleState={this.props.drizzleState}
                    accountIndex={0}
                    units={"ether"}
                    precision={6}
                ></AccountData>
                <h2>呼叫合約(唯讀)</h2>
                <ContractData
                    contract="Storage"
                    drizzle={this.props.drizzle}
                    drizzleState={this.props.drizzleState}
                    method="getData"

                ></ContractData>
                <h2>呼叫合約的交易</h2>
                <ContractForm
                    contract="Storage"
                    drizzle={this.props.drizzle}
                    drizzleState={this.props.drizzleState}
                    method="setData"
                    labels={["設定新的合約變數值"]}
                ></ContractForm>
            </div>

        )
    }
}
export default MyComponent;