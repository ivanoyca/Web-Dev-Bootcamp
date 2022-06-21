const express = require('express')
const mailchimp = require("@mailchimp/mailchimp_marketing");
const bodyParser = require('body-parser')
const request = require("request")
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/signup.html')
})

//Congifure Mailchimp
mailchimp.setConfig({
	apiKey: "675ce8a2b6d38543e8cd190fc82af792-us18",
	server: "us18",
});

app.post('/', (req, res) => {
	//Get user data
	let fname = req.body.fname
	let lname = req.body.lname
	let mail = req.body.email

	//List ID
	const listId = "104a0a957c";

	//User Info Object
	const subscribingUser = {
		firstName: fname,
		lastName: lname,
		email: mail
	};


	const run = async () => {
		try {
			//Tries to add a user to the subscription
			const response = await mailchimp.lists.addListMember(listId, {
				email_address: subscribingUser.email,
				status: "subscribed",
				merge_fields: {
					FNAME: subscribingUser.firstName,
					LNAME: subscribingUser.lastName
				}
			});
			console.log(response)
			res.sendFile(__dirname + "/success.html")
		}
		//If fail return failure html
		catch (e) {
			console.log("====== ERROR ======");
			console.log(JSON.parse(e.response.error.text).detail);
			res.sendFile(__dirname + "/failure.html");
		}
	}
	run()
});

app.post("/failure", function (req, res) {
	res.redirect("/");
});

app.listen(port, () => {
	console.log('listening on port ' + port)
})