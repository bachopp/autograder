var MockData = {
  title: "Mockdata from mockdata.js",
  students: [
    {
      id:0,
      username:"tokams",
      firstName:"Thomas",
      lastName:"Darvik",
      studentNumber:464646,
      slipDays:2,
      hasGroup:false,
      labs: [
        {
          id: 0,
          title: "Lab 1",
          approved: false,
          log: [
            "1: Running program",
            "2: Running helloworld.go, =====> 100%",
            "3: Testing helloworld.go, =====> 100%",
            "4: TEST1: 100%",
            "5: TEST2: 100%",
            "6: TESTS PASSED",
            "7. LAB PASSED"
          ],
          percent: 100,
          isSelected: false
        },{
          id: 0,
          title: "Lab 2",
          approved: true,
          log: ["The build log comes here"],
          percent: 70,
          isSelected: false
        },{
          id: 0,
          title: "Lab 3",
          approved: false,
          log: ["The build log comes here"],
          percent: 30,
          isSelected: false
        },{
          id: 0,
          title: "Lab 4",
          approved: false,
          log: ["The build log comes here"],
          percent: 65,
          isSelected: false
        },{
          id: 0,
          title: "Lab 5",
          approved: true,
          log: ["The build log comes here"],
          percent: 65,
          isSelected: false
        }
      ]
    },
    {
      id:1,
      username:"tokams",
      firstName:"Tomasz",
      lastName:"Gli",
      studentNumber:464646,
      slipDays:2,
      hasGroup:false,
      labs: [
        {
          id: 0,
          title: "Lab 1",
          approved: true,
          log: ["The build log comes here"],
          percent: 65,
          isSelected: false
        },{
          id: 0,
          title: "Lab 2",
          approved: true,
          log: ["The build log comes here"],
          percent: 70,
          isSelected: false
        },{
          id: 0,
          title: "Lab 3",
          approved: true,
          log: ["The build log comes here"],
          percent: 30,
          isSelected: false
        },{
          id: 0,
          title: "Lab 4",
          approved: true,
          log: ["The build log comes here"],
          percent: 65,
          isSelected: false
        },{
          id: 0,
          title: "Lab 5",
          approved: false,
          log: ["The build log comes here"],
          percent: 65,
          isSelected: false
        }
      ]
    },
    {
      id:2,
      username:"herpiderp",
      firstName:"Herman",
      lastName:"Slyngstadli",
      studentNumber:221144,
      slipDays:4,
      hasGroup:false,
      labs: [
        {
          id: 0,
          title: "Lab 1",
          approved: false,
          log: ["The build log comes here"],
          percent: 65,
          isSelected: false
        },{
          id: 0,
          title: "Lab 2",
          approved: true,
          log: ["The build log comes here"],
          percent: 70,
          isSelected: false
        },{
          id: 0,
          title: "Lab 3",
          approved: false,
          log: ["The build log comes here"],
          percent: 30,
          isSelected: false
        },{
          id: 0,
          title: "Lab 4",
          approved: true,
          log: ["The build log comes here"],
          percent: 65,
          isSelected: false
        },{
          id: 0,
          title: "Lab 5",
          approved: false,
          log: ["The build log comes here"],
          percent: 65,
          isSelected: false
        }
      ]
    },
    {
      id:3,
      username:"deadpool",
      firstName:"Dead",
      lastName:"Pool",
      studentNumber:666666,
      slipDays:11,
      hasGroup:false,
      labs: [
        {
          id: 0,
          title: "Lab 1",
          approved: true,
          log: ["The build log comes here"],
          percent: 65,
          isSelected: false
        },{
          id: 0,
          title: "Lab 2",
          approved: false,
          log: ["The build log comes here"],
          percent: 70,
          isSelected: false
        },{
          id: 0,
          title: "Lab 3",
          approved: false,
          log: ["The build log comes here"],
          percent: 30,
          isSelected: false
        },{
          id: 0,
          title: "Lab 4",
          approved: false,
          log: ["The build log comes here"],
          percent: 65,
          isSelected: false
        },{
          id: 0,
          title: "Lab 5",
          approved: false,
          log: ["The build log comes here"],
          percent: 65,
          isSelected: false
        }
      ]
    },
    {
      id:4,
      username:"tokams",
      firstName:"Tomasz",
      lastName:"Dradinski",
      studentNumber:990022,
      slipDays:0,
      hasGroup:false,
      labs: [
        {
          id: 0,
          title: "Lab 1",
          approved: true,
          log: ["The build log comes here"],
          percent: 65,
          isSelected: false
        },{
          id: 0,
          title: "Lab 2",
          approved: false,
          log: ["The build log comes here"],
          percent: 70,
          isSelected: false
        },{
          id: 0,
          title: "Lab 3",
          approved: false,
          log: ["The build log comes here"],
          percent: 30,
          isSelected: false
        },{
          id: 0,
          title: "Lab 4",
          approved: false,
          log: ["The build log comes here"],
          percent: 65,
          isSelected: false
        },{
          id: 0,
          title: "Lab 5",
          approved: true,
          log: ["The build log comes here"],
          percent: 65,
          isSelected: false
        }
      ]
    }
  ]
}

module.exports = MockData;
