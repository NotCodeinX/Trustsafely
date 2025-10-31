// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract TreasuryTimelock is TimelockController {
    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors,
        address admin
    ) TimelockController(minDelay, proposers, executors, admin) {}
}

contract TimelockFactory {
    function createTimelock(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors,
        address admin
    ) external returns (TimelockController) {
        TimelockController t = new TimelockController(minDelay, proposers, executors, admin);
        return t;
    }
}


