// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract BillContract{
  event AddBill(address recipient,uint taskId);
  
  struct Bill{
    uint id;
    string billText;


  }
  Bill[] private Bills;
  mapping(uint256 => address) billtochain;

  function AddBill(string memory billText,uint id)
   external {
    uint billID=Bill.id;
    Bills.push(Bills(billId,billText));
    billtochain[billId]=msg.sender;
    emit AddBill(msg.sender, billId);
   }

  
  

}
 