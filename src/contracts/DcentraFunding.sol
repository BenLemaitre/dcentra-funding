pragma solidity ^0.5.16;

contract DcentraFunding {
    string public name = "DcentraFunding";
    uint public projectCount = 0;
    mapping (uint => Project) public projects;

    struct Project {
        uint id;
        string title;
        string description;
        uint goal;
        uint received;
        uint date;
        string imageHash;
        address payable creator;
    }

    event ProjectCreated (
        uint id,
        string title,
        string description,
        uint goal,
        uint received,
        uint date,
        string imageHash,
        address payable creator
    );

    function createProject (string memory _title, string memory _desc, uint _goal, string memory _imageHash) public {
        // Make sure data sent is complete
        require(bytes(_title).length > 0);
        require(bytes(_desc).length > 0);
        require(bytes(_imageHash).length > 0);
        require(_goal > 0);
        require(msg.sender != address(0));

        projects[projectCount] = Project(projectCount, _title, _desc, _goal, 0, block.timestamp, _imageHash, msg.sender);
        emit ProjectCreated(projectCount, _title, _desc, _goal, 0, block.timestamp, _imageHash, msg.sender);
        
        projectCount++;
    }

    function updateReceivedFunds (uint _id, uint _received) public {

    }
}