pragma solidity ^0.4.16;

contract owned {
    address public owner;

    function owned() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address newOwner) onlyOwner public {
        owner = newOwner;
    }
    
}


contract Main {
    Order[] public orders;
    function createOrder(string name, uint count, uint price, uint timestamp) public returns (Order adr){
        adr = new Order(name,count,timestamp,price);
        orders.push(adr);
    }
}

contract Tender is owned {
    function Tender(uint p,uint d) public {
        date  = d;
        price = p;
    }
    uint public price;
    uint public date;
  
}


contract Order is owned{
    function Order(string a, uint n, uint Date, uint mp) public {
        article = a;
        number = n;
        neededDate = Date;
        maxPrice = mp;
    }

    string public article;
    uint public number;
    uint public neededDate;
    uint public maxPrice;
    Tender[] tenders;
    
    function addTender(uint date, uint price) public {
        if( price <= maxPrice && date <= neededDate)
            tenders.push(new Tender(price, date));    
    }
}

