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
        string category;
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
        string category,
        address payable creator
    );

    event ProjectFunded(
        uint id,
        string title,
        string description,
        uint goal,
        uint received,
        uint date,
        string imageHash,
        string category,
        address payable creator
    );

    function createProject (string memory _title, string memory _desc, uint _goal, string memory _imageHash, string memory _category) public {
        // Make sure data sent is complete
        require(bytes(_title).length > 0);
        require(bytes(_desc).length > 0);
        require(bytes(_imageHash).length > 0);
        require(bytes(_category).length > 0);
        require(_goal > 0);
        require(msg.sender != address(0));

        projects[projectCount] = Project(projectCount, _title, _desc, _goal, 0, block.timestamp, _imageHash, _category,msg.sender);
        emit ProjectCreated(
            projectCount,
            _title,
            _desc,
            _goal,
            0,
            block.timestamp,
            _imageHash,
            _category,
            msg.sender
        );
        
        projectCount++;
    }

    function updateReceivedFunds (uint _id) public payable {
        // make sure id is valid
        require(_id >= 0 && _id < projectCount);
        // make sure funds are higher than 0
        require(msg.value > 0);
        // fetch project
        Project memory _project = projects[_id];
        // fetch creator
        address payable _creator = _project.creator;
        // pay creator
        address(_creator).transfer(msg.value);
        // increment received funds
        _project.received += msg.value;
        // update project
        projects[_id] = _project;
        // trigger event
        emit ProjectFunded(
            _id, 
            _project.title,
            _project.description,
            _project.goal,
            _project.received,
            _project.date,
            _project.imageHash,
            _project.category,
            _creator
        );
    }
}