// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.5.16;
contract Storage {
    event DataChanged(string newValue, uint256 date);
    string public data;
    function getData() public view returns (string memory) {
        return data;
    }
    function setData(string memory _data) public {
        data = _data;
        emit DataChanged(data, now);
    }
}
