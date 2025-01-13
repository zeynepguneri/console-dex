pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ChikoritaToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Chikorita", "CHK") {
        _mint(msg.sender, initialSupply);
    }
}

contract CyndaToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Cynda", "CYND") {
        _mint(msg.sender, initialSupply);
    }
}
