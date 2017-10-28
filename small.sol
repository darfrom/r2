
pragma solidity ^0.4.16;



contract Main {
    C[] public s;
    function sets(string name) public {
        
        s.push(new C(name));
    }
    
}

contract C{
    function C(string st) public{
        s= st;
    }
    string s;
}