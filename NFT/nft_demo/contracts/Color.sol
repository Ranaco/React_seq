// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

import "./ERC721Full.sol";

contract Color is ERC721Full{

  mapping(string => bool) _colorExists;
  string[] public colors;

  constructor() public ERC721Full("Color", "COL"){}

  function mint(string memory col) public {
    require(!_colorExists[col], "Color already exists");
    uint256 colorId = colors.push(col);
    _mint(msg.sender, colorId);
    _colorExists[col] = true;
  }

  function getColor(uint256 index) public view returns(string memory){
      return colors[index];
  }

}