var titleBar = {
	title: "Autograder",
	elementsLeft: [
		{
			title: "Student",
			type:"dropdown",
			elements: [
				{link: "http:about",content:"Course 1"},
				{link: "http:about",content:"Course 2"},
				{devider:""},
				{link: "http:joincourse",content:"Join course as student"}
			]
		},
		{
			title: "Teacher",
			type:"dropdown",
			elements: [
				{link: "http:c1",content:"Course 1"},
				{link: "http:c2",content:"Course 2"},
				{devider:""},							// <-- hvorfor søren funker dette????
				{link: "http:newcourse",content:"Make new course"},
				{link: "http:joincourseAsTeacher",content:"Join course as teacher"},
			]
		},
		{
			title: "Admin",
			type:"dropdown",
			elements: [
				{link: "#course1",content:"Admin panel"},
				{link: "#course2",content:"Edit courses"},
				{devider:""},							// <-- hvorfor søren funker dette????
				{link: "#course3",content:"Pending teachers and students"}
			]
		},
		{
			title: "Help",
			type:"single",
			link:"#help"
		}
	],
	elementsRight: [
		{
			title: "Notifications",
			type:"single",
			link:"#help"
		},
		{
			title: "Sign in",
			type:"single",
			link:"#help"
		}
	]
};
